import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Minus, User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { createSupportChat, OpenRouterChat } from '../services/openrouterService';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'سلام! 👋\nچطور می‌تونم در مورد محصولات توس فود کمکتون کنم؟', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatInstance = useRef<OpenRouterChat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session
    chatInstance.current = createSupportChat();
  }, []);

  useEffect(() => {
    // Scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatInstance.current) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      const result = await chatInstance.current.sendMessage({ message: userMessage });
      const botResponse = result.text || "متوجه نشدم، لطفا دوباره بپرسید.";
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "مشکلی در ارتباط پیش آمده. لطفا بعدا تلاش کنید.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-800 rotate-90' : 'bg-toos-green animate-bounce-slow'
        } text-white`}
        aria-label="پشتیبانی آنلاین"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        
        {/* Notification Badge */}
        {!isOpen && (
             <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 left-6 z-40 w-[350px] max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-300 origin-bottom-left overflow-hidden flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '70vh' }}
      >
        {/* Header */}
        <div className="bg-toos-green p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">پشتیبانی هوشمند توس فود</h3>
              <p className="text-xs text-green-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span>
                آنلاین
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
            <Minus size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-200">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-gray-200 text-gray-600' : 'bg-toos-green/10 text-toos-green'
              }`}>
                  {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              
              <div
                className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-toos-green text-white rounded-2xl rounded-br-none whitespace-pre-wrap'
                    : 'bg-white text-gray-800 border border-gray-100 rounded-2xl rounded-bl-none shadow-sm prose prose-sm'
                }`}
              >
                {msg.sender === 'user' ? (
                  msg.text
                ) : (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-full bg-toos-green/10 flex items-center justify-center">
                    <Bot size={16} className="text-toos-green" />
               </div>
               <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                   <div className="flex gap-1">
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                       <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                   </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-toos-green/20 focus-within:border-toos-green transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={`p-2 rounded-full transition-all ${
                input.trim() && !isLoading 
                    ? 'bg-toos-green text-white hover:scale-105 shadow-md' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />}
            </button>
          </div>
          <div className="text-center mt-1">
             <span className="text-[10px] text-gray-300">قدرت گرفته از هوش مصنوعی</span>
          </div>
        </div>
      </div>
    </>
  );
};