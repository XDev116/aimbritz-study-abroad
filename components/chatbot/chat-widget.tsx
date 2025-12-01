"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Minimize2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProfessorCharacter } from "./professor-character";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasWalkedIn, setHasWalkedIn] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm your AimBritz study abroad assistant. I have information about the top 100 universities worldwide!\n\nTry asking me:\n• 'Show me UK universities'\n• 'Tell me about Oxford'\n• 'Universities for Computer Science'\n• 'Affordable universities'\n\nWhat would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Walk-in animation on page load
  useEffect(() => {
    const walkInTimer = setTimeout(() => {
      setHasWalkedIn(true);
      // Show greeting after walk-in
      setTimeout(() => {
        setShowGreeting(true);
        // Auto-hide greeting after 8 seconds
        setTimeout(() => {
          setShowGreeting(false);
        }, 8000);
      }, 500);
    }, 1000);

    return () => clearTimeout(walkInTimer);
  }, []);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userQuestion = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      // Call Gemini API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ content: userQuestion, role: "user" }],
        }),
      });

      const data = await response.json();

      if (data.error) {
        // Show error message
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `⚠️ ${data.error}\n\nPlease contact support if this issue persists.`,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } else {
        // Show AI response
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Show fallback error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    { icon: "🇬🇧", text: "UK Universities", action: () => {
      setInputValue("Show me UK universities");
      setTimeout(() => handleSendMessage(), 100);
    }},
    { icon: "💻", text: "Computer Science", action: () => {
      setInputValue("Universities for Computer Science");
      setTimeout(() => handleSendMessage(), 100);
    }},
    { icon: "💰", text: "Budget Options", action: () => {
      setInputValue("Affordable universities");
      setTimeout(() => handleSendMessage(), 100);
    }},
    { icon: "📞", text: "Contact Us", action: () => window.location.href = "/contact" },
  ];

  return (
    <>
      {/* Professional Business Character */}
      {!isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 ${!hasWalkedIn ? "translate-x-[200%]" : ""} transition-all duration-1000 ease-out`}>
          {/* Greeting Speech Bubble */}
          {showGreeting && hasWalkedIn && (
            <div className="absolute bottom-full right-0 mb-4 animate-slide-down">
              <div className="relative bg-white rounded-2xl shadow-2xl px-5 py-4 border border-gray-200 max-w-[280px]">
                <p className="text-base font-bold text-gray-900 mb-1">
                  👋 How can I help you?
                </p>
                <p className="text-sm text-gray-600">
                  I'm here to guide your study abroad journey
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 right-12 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45" />
              </div>
            </div>
          )}

          {/* Professional 3D Character */}
          <button
            onClick={() => {
              setIsOpen(true);
              setShowGreeting(false);
            }}
            className="relative group focus:outline-none"
            aria-label="Chat with advisor"
          >
            {/* Scalable Professor Character Component */}
            <ProfessorCharacter
              expression="happy"
              pose="waving"
              outfit="default"
              size={200}
              animate={true}
            />

            {/* Chat Notification Badge - Animated */}
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full border-4 border-white shadow-lg animate-bounce-notification flex items-center justify-center">
              <span className="text-white text-base font-bold">💬</span>
            </div>

            {/* Hover tooltip - Enhanced */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="text-sm font-bold text-gray-900 bg-white px-5 py-2.5 rounded-xl shadow-2xl border-2 border-gray-200">
                👋 Click to chat!
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            isMinimized ? "w-80 h-16" : "w-full sm:w-96 h-[600px]"
          } max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]`}
        >
          <div className="glass-card rounded-3xl shadow-2xl h-full flex flex-col overflow-hidden border border-gray-200 animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
              <div className="flex items-center gap-3">
                {/* Mini Avatar */}
                <div className="relative w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden border-2 border-white">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="#f8fafc" />
                    <ellipse cx="50" cy="40" rx="18" ry="20" fill="#fcd9b8" />
                    <circle cx="45" cy="38" r="3" fill="#1e293b" />
                    <circle cx="55" cy="38" r="3" fill="#1e293b" />
                    <path d="M 42 48 Q 50 52 58 48" stroke="#dc2626" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <rect x="40" y="35" width="8" height="6" fill="none" stroke="#1e293b" strokeWidth="1.5" rx="1" />
                    <rect x="52" y="35" width="8" height="6" fill="none" stroke="#1e293b" strokeWidth="1.5" rx="1" />
                    <path d="M 35 28 Q 50 22 65 28 L 65 35 Q 50 32 35 35 Z" fill="#3b3228" />
                    <rect x="30" y="55" width="40" height="30" fill="#3b82f6" />
                    <rect x="47" y="55" width="6" height="15" fill="#dc2626" />
                  </svg>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">Study Abroad Advisor</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Online Now
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 animate-slide-in ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                          <span className="text-xs">👔</span>
                        </div>
                      )}

                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                          message.sender === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-white border border-gray-200 text-gray-900 rounded-bl-none"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>

                      {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0 shadow-md">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 animate-slide-in">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-blue-600 flex items-center justify-center shadow-md">
                        <span className="text-xs">👔</span>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions - Compact */}
                <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-100 rounded-full transition-all text-xs font-medium border border-gray-200 shadow-sm whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-sm">{action.icon}</span>
                        <span>{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                      placeholder="Type your message..."
                      className="flex-1 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 shadow-md"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    We're here to help you achieve your study abroad dreams! 🎓
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
