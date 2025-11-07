"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Minimize2, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Aimi, your AI study abroad companion. I'm here to guide you through your journey to global education. How can I help you today?",
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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! I'm currently in demo mode, but soon I'll be able to help you find the perfect university, guide you through visa applications, and answer all your study abroad questions. Feel free to contact our team for immediate assistance!",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickActions = [
    "Find Universities 🎓",
    "Visa Information 🛂",
    "Application Process 📝",
    "Talk to Counselor 👨‍🎓",
  ];

  return (
    <>
      {/* Floating Aimi Character - Always Visible */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open chat with Aimi"
        >
          {/* Outer Orbit Ring - Rotates */}
          <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 -left-4 -top-4">
            <div className="absolute inset-0 rounded-full border-2 border-black/20 animate-spin-slow"
                 style={{ animationDuration: '20s' }}>
              {/* Orbit Dots */}
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-black rounded-full -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-black/60 rounded-full -translate-x-1/2" />
            </div>
          </div>

          {/* Middle Pulse Ring */}
          <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 -left-2 -top-2 animate-pulse-ring" />

          {/* Main Aimi Orb - 3D Glassmorphic Sphere */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-110 transition-all duration-500 ease-out">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black via-gray-800 to-black blur-xl opacity-40 animate-glow" />

            {/* Main Glass Orb */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
              {/* Glass layers for 3D depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-100/80 to-gray-300/70 backdrop-blur-xl" />

              {/* Inner gradient sphere */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-inner" />

              {/* Highlight shine effect */}
              <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-sm" />

              {/* Center AI Icon - Animated */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* AI Brain Pattern */}
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-float"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                          strokeLinecap="round"
                          className="animate-pulse" />
                  </svg>

                  {/* Sparkle accent */}
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-white animate-twinkle" />
                </div>
              </div>

              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>

            {/* Active Status Ring */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-3 border-white shadow-lg animate-pulse-slow" />
          </div>

          {/* Speech Bubble "Hi! I'm Aimi 👋" */}
          <div className="absolute bottom-full right-0 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none animate-bounce-slow">
            <div className="glass-card rounded-2xl px-5 py-3 shadow-2xl whitespace-nowrap backdrop-blur-xl border-2 border-black/10">
              <p className="text-sm font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Hi! I'm Aimi 👋
              </p>
              <p className="text-xs text-gray-600 mt-0.5">Your AI study companion</p>
              {/* Arrow pointing down */}
              <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/90" />
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 w-32 h-32 -left-8 -top-8 pointer-events-none">
            <div className="absolute top-4 left-4 w-1 h-1 bg-black/30 rounded-full animate-float-particle-1" />
            <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-black/20 rounded-full animate-float-particle-2" />
            <div className="absolute bottom-6 left-8 w-1 h-1 bg-black/25 rounded-full animate-float-particle-3" />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 transition-all duration-300 ${
            isMinimized ? "h-16" : "h-[600px] max-h-[80vh]"
          }`}
        >
          <div className="glass-card rounded-2xl shadow-2xl h-full flex flex-col overflow-hidden border-2 border-black/10">
            {/* Header with Aimi */}
            <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                {/* Mini Aimi Avatar */}
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/90 via-gray-200/80 to-gray-400/70 backdrop-blur-xl flex items-center justify-center shadow-lg border-2 border-white/20">
                    <svg
                      className="w-6 h-6 text-black animate-float"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                            strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                </div>

                {/* Aimi Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                    Aimi
                    <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" />
                  </h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    AI Study Companion • Online
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content - Hidden when minimized */}
            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-br from-white/50 via-gray-50/50 to-white/50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-2 animate-slide-in ${
                        message.sender === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-black to-gray-800 text-white shadow-lg"
                            : "bg-gradient-to-br from-white/90 via-gray-100/80 to-gray-200/70 backdrop-blur-xl border-2 border-black/10 shadow-md"
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <svg
                            className="w-4 h-4 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="12" r="2" fill="currentColor" />
                            <path d="M12 4v3M12 17v3M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M4 12h3M17 12h3M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"
                                  strokeLinecap="round" />
                          </svg>
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div
                        className={`max-w-[75%] rounded-2xl px-4 py-2.5 shadow-md ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-black to-gray-900 text-white"
                            : "glass-card border border-black/5"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1.5 ${
                          message.sender === "user" ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex items-start gap-2 animate-slide-in">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-white/90 via-gray-100/80 to-gray-200/70 backdrop-blur-xl border-2 border-black/10">
                        <svg
                          className="w-4 h-4 text-black"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="2" fill="currentColor" />
                          <path d="M12 4v3M12 17v3M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M4 12h3M17 12h3M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12"
                                strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="glass-card rounded-2xl px-4 py-3 border border-black/5">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3 bg-white/50 border-t border-black/5">
                    <p className="text-xs text-gray-600 mb-2 font-medium">Quick actions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action) => (
                        <button
                          key={action}
                          onClick={() => setInputValue(action)}
                          className="glass-card px-3 py-2 rounded-full text-xs font-medium hover:bg-white hover:shadow-md transition-all border border-black/5 hover:scale-105"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white border-t-2 border-black/5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask Aimi anything..."
                      className="flex-1 border-black/20 focus:border-black h-11 rounded-xl"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-gradient-to-br from-black to-gray-900 text-white hover:from-gray-900 hover:to-black shrink-0 h-11 w-11 rounded-xl shadow-lg"
                      disabled={!inputValue.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>

                  {/* Powered by */}
                  <p className="text-xs text-center text-gray-500 mt-3">
                    Powered by AI • <span className="font-semibold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">AimBritz</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(10px, -20px); opacity: 0; }
        }

        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(-15px, -25px); opacity: 0; }
        }

        @keyframes float-particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(8px, -18px); opacity: 0; }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite 1s;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 4.5s ease-in-out infinite 0.5s;
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
