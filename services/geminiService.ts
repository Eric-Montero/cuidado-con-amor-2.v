
import { GoogleGenAI, Chat, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

/**
 * AI Service using Gemini models for general Q&A and location-based data.
 */
class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  /**
   * Start a chat session for a general health assistant.
   */
  async startChat(): Promise<Chat> {
    return this.ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `You are 'Cuidado AI', an expert assistant for the Cuidado con Amor nursing marketplace. 
        You help families find the right care, and you assist nurses with clinical guidelines and platform features.
        Be compassionate, professional, and clear. Avoid giving definitive medical diagnoses, instead recommend consulting with a primary physician.`,
      },
    });
  }

  /**
   * Use Gemini 2.5 Flash with Maps tool to find nearby healthcare facilities.
   */
  async findNearbyFacilities(location: string, careType: string): Promise<{ text: string; links: any[] }> {
    const prompt = `Find nearby ${careType} clinics or healthcare support centers near ${location}. List their names and provide Google Maps links.`;
    
    try {
      const response: GenerateContentResponse = await this.ai.models.generateContent({
        model: "gemini-2.5-flash-lite-latest",
        contents: prompt,
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      const text = response.text || "No results found.";
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const links = chunks
        .filter((c: any) => c.maps)
        .map((c: any) => ({
          uri: c.maps.uri,
          title: c.maps.title
        }));

      return { text, links };
    } catch (error) {
      console.error("Gemini Maps Grounding Error:", error);
      return { text: "Sorry, I couldn't fetch local map data right now.", links: [] };
    }
  }
}

export const geminiService = new GeminiService();
