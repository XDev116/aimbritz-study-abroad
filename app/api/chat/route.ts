import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// System prompt for the study abroad chatbot
const SYSTEM_PROMPT = `You are an AI study abroad advisor for AimBritz, a professional study abroad consultancy.

Your role is to help students:
- Find the right university based on their preferences
- Understand admission requirements
- Learn about different countries for studying abroad
- Get information about scholarships and costs
- Understand visa processes
- Make informed decisions about their study abroad journey

Guidelines:
- Be friendly, professional, and encouraging
- Provide accurate, helpful information
- If you don't know something specific, suggest they contact AimBritz counselors
- Keep responses concise (2-3 paragraphs max)
- Focus on popular destinations: UK, USA, Canada, Australia, Germany, Ireland, New Zealand

Available countries and their benefits:
- UK: World-class universities, shorter programs, post-study work visa
- USA: Diverse universities, research opportunities, OPT work options
- Canada: Affordable education, immigration pathways, safe environment
- Australia: High quality of life, work while studying, sunny climate
- Germany: Low/free tuition, engineering excellence, central Europe location
- Ireland: English-speaking, tech hub, friendly culture
- New Zealand: Beautiful country, quality education, work opportunities

Be conversational and helpful!`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Check if API key exists
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured. Please add GEMINI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    // Get the Gemini model (using latest 2.5 Flash - free tier)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    // Get the last user message
    const userMessage = messages[messages.length - 1]?.content || messages[messages.length - 1]?.text;

    if (!userMessage) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // Combine system prompt with user message
    const prompt = `${SYSTEM_PROMPT}\n\nStudent question: ${userMessage}\n\nYour response:`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      message: text,
      success: true,
    });

  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // Handle specific errors
    if (error?.message?.includes("API key")) {
      return NextResponse.json(
        { error: "Invalid API key. Please check your GEMINI_API_KEY in .env.local" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate response. Please try again." },
      { status: 500 }
    );
  }
}
