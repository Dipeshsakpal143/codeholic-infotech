import { GoogleGenAI } from "@google/genai";
import { SERVICES, CEO_PROFILE, COMPANY_NAME, PORTFOLIO } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${COMPANY_NAME}, an IT solutions and game development company led by CEO ${CEO_PROFILE.name}.
Your tone is professional, futuristic, and helpful.

Company Details:
- CEO: ${CEO_PROFILE.name} (${CEO_PROFILE.bio})
- Expertise: Game Development, Web Development, Mobile Apps, AR/VR.
- Key Services: ${SERVICES.map(s => s.title).join(', ')}.
- Portfolio Highlights: ${PORTFOLIO.map(p => p.title).join(', ')}.

Your Goal:
Answer visitor questions about the company's services, the CEO's background, and how to get a quote.
If a user asks for a quote or specific project discussion, guide them to the Contact page.
Keep answers concise (under 100 words) unless detailed technical explanation is asked.
`;

let aiClient: GoogleGenAI | null = null;

export const getAIClient = () => {
  if (!aiClient) {
    // Note: In a real production app, ensure API_KEY is set. 
    // For this demo, we assume process.env.API_KEY is available.
    if (process.env.API_KEY) {
      aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return aiClient;
};

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  const client = getAIClient();
  if (!client) {
    return "I'm currently offline (API Key missing). Please contact us via the form!";
  }

  try {
    const model = client.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the mainframe. Please try again later.";
  }
};
