import { OpenRouter } from '@openrouter/sdk';
import { allProducts } from '../data/products';
import { Product } from '../types';

const client = new OpenRouter({
  apiKey: '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',
});

const extractText = (content: any): string => {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content
      .map((item) => (typeof item === 'object' && 'text' in item ? item.text : ''))
      .join('');
  }
  return '';
};

export const generateRecipe = async (
  ingredient: string, 
  onUpdate?: (text: string) => void,
  onProductsFound?: (products: Product[]) => void
): Promise<string> => {
  try {
    const productsInfo = allProducts
      .map(p => `ID: ${p.id}, Title: ${p.title}, Description: ${p.description}`)
      .join('\n');

    const stream = await client.chat.send({
      model: "openai/gpt-oss-120b:free",
      messages: [
        {
          role: "user",
          content: `You are an expert Persian chef. 
          1. Create a short, delicious, and traditional Persian recipe description using "${ingredient}" as the main ingredient. 
          2. Format it nicely with emojis. 
          3. Always speak in Persian. 
          4. Make sure steps are in multi line always.
          5. At the very end of your response, after the recipe, identify which of these products from our shop are relevant to the recipe.
          
          Products List:
          ${productsInfo}
          
          Provide the relevant product IDs in this EXACT format at the end: [RELATED_PRODUCTS: id1, id2, ...]`,
        },
      ],
      stream: true
    });

    let fullText = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      fullText += content;
      
      // Clean up the text for UI update (hide the special product tag)
      const cleanText = fullText.split('[RELATED_PRODUCTS:')[0].trim();
      if (onUpdate) onUpdate(cleanText);
    }

    if (fullText) {
      // Extract product IDs using regex
      const productMatch = fullText.match(/\[RELATED_PRODUCTS:\s*([\d,\s]+)\]/);
      
      if (productMatch && productMatch[1]) {
        const ids = productMatch[1]
          .split(',')
          .map(id => parseInt(id.trim()))
          .filter(id => !isNaN(id));
        
        const matchingProducts = allProducts.filter(p => ids.includes(p.id)).slice(0, 3);
        
        if (matchingProducts.length > 0 && onProductsFound) {
          onProductsFound(matchingProducts);
        }
      } else {
        // Fallback to basic search if AI fails to provide IDs properly
        const normalize = (s: string) => s.replace(/\s+/g, '').toLowerCase();
        const normalizedIngredient = normalize(ingredient);

        const matchingProducts = allProducts.filter(p => {
          const normalizedTitle = normalize(p.title);
          const normalizedDesc = normalize(p.description);
          const titleWithoutToos = normalize(p.title.replace(' توس', ''));
          
          return normalizedTitle.includes(normalizedIngredient) || 
                 normalizedIngredient.includes(titleWithoutToos) ||
                 normalizedDesc.includes(normalizedIngredient);
        }).slice(0, 3);

        if (matchingProducts.length > 0 && onProductsFound) {
          onProductsFound(matchingProducts);
        }
      }
    }

    const finalCleanText = fullText.split('[RELATED_PRODUCTS:')[0].trim();
    return finalCleanText || "متاسفانه در حال حاضر قادر به تولید دستور پخت نیستم. لطفا دوباره تلاش کنید.";
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return "خطایی در ارتباط با هوش مصنوعی رخ داده است.";
  }
};

export class OpenRouterChat {
  private messages: { role: 'user' | 'assistant' | 'system'; content: string }[] = [];
  private systemInstruction: string;

  constructor(systemInstruction: string) {
    this.systemInstruction = systemInstruction;
    this.messages = [{ role: 'system', content: systemInstruction }];
  }

  async sendMessage({ message }: { message: string }) {
    this.messages.push({ role: 'user', content: message });

    try {
      const response = await client.chat.send({
        model: "openai/gpt-oss-120b:free",
        messages: this.messages as any, // Cast to any to avoid complex message content type issues
      });

      const assistantMessage = extractText(response.choices[0]?.message?.content);
      if (assistantMessage) {
        this.messages.push({ role: 'assistant', content: assistantMessage });
      }

      return {
        text: assistantMessage,
      };
    } catch (error) {
      console.error("OpenRouter Chat Error:", error);
      throw error;
    }
  }
}

export const createSupportChat = () => {
  const systemInstruction = 'شما دستیار هوشمند و پشتیبان آنلاین کارخانه "توس فود" هستید. وظیفه شما پاسخگویی مودبانه و حرفه‌ای به مشتریان است. اطلاعات کلیدی: نام کارخانه: توس فود. محصولات: انواع حبوبات و خشکبار پاک‌شده و بسته‌بندی لوکس (نخود، عدس، لوبیا، لپه و...). آدرس کارخانه: خراسان رضوی، چناران، شهرک صنعتی، فاز ۲، خیابان دانش. تلفن کارخانه: ۰۵۱-۴۶۱۸۸۴۸۶. تلفن دفتر پخش: ۰۵۱-۳۷۶۸۵۶۵۳. فکس: ۰۵۱-۳۷۳۴۴۲۳۱. کد پستی: ۹۱۹۶۷۱۳۸۷۵. ساعات کاری: ۸ صبح تا ۴ بعدازظهر. اگر سوالی خارج از حیطه کاری کارخانه بود، مودبانه بگویید که فقط در زمینه محصولات توس فود راهنمایی می‌کنید. پاسخ‌ها را کوتاه، گرم و به زبان فارسی بدهید.';
  return new OpenRouterChat(systemInstruction);
};
