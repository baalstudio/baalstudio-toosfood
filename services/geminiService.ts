import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (ingredient: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Persian chef. Create a short, delicious, and traditional Persian recipe description using "${ingredient}" as the main ingredient. Keep it under 100 words in Persian language. Format it nicely.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "متاسفانه در حال حاضر قادر به تولید دستور پخت نیستم. لطفا دوباره تلاش کنید.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "خطایی در ارتباط با هوش مصنوعی رخ داده است.";
  }
};

export const createSupportChat = () => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'شما دستیار هوشمند و پشتیبان آنلاین کارخانه "توس فود" هستید. وظیفه شما پاسخگویی مودبانه و حرفه‌ای به مشتریان است. اطلاعات کلیدی: نام کارخانه: توس فود. محصولات: انواع حبوبات و خشکبار پاک‌شده و بسته‌بندی لوکس (نخود، عدس، لوبیا، لپه و...). آدرس کارخانه: خراسان رضوی، چناران، شهرک صنعتی، فاز ۲، خیابان دانش. تلفن کارخانه: ۰۵۱-۴۶۱۸۸۴۸۶. تلفن دفتر پخش: ۰۵۱-۳۷۶۸۵۶۵۳. فکس: ۰۵۱-۳۷۳۴۴۲۳۱. کد پستی: ۹۱۹۶۷۱۳۸۷۵. ساعات کاری: ۸ صبح تا ۴ بعدازظهر. اگر سوالی خارج از حیطه کاری کارخانه بود، مودبانه بگویید که فقط در زمینه محصولات توس فود راهنمایی می‌کنید. پاسخ‌ها را کوتاه، گرم و به زبان فارسی بدهید.',
    }
  });
};