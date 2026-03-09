"use client";

import { useState, useRef, useEffect, memo, useCallback } from "react";
import { X, Send, Minimize2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Professor3D } from "./professor-3d";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Memoized Message Component to prevent unnecessary re-renders
const MessageBubble = memo(({ message }: { message: Message }) => (
  <div
    className={`flex gap-3 animate-slide-in ${
      message.sender === "user" ? "justify-end" : "justify-start"
    }`}
  >
    {message.sender === "bot" && (
      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
        <img
          src="/images/team/alameen.png"
          alt="Professor"
          className="w-full h-full object-cover"
        />
      </div>
    )}

    <div
      className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
        message.sender === "user"
          ? "bg-black text-white rounded-br-none border border-gray-800"
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
));

MessageBubble.displayName = "MessageBubble";

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
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Limit messages to prevent memory bloat (keep last 50 messages)
  const MAX_MESSAGES = 50;

  const scrollToBottom = () => {
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    // Only scroll if chat is open to save resources
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  // Clear old messages when chat is closed to free memory
  useEffect(() => {
    if (!isOpen) {
      // Keep only the initial welcome message when chat is closed
      const timer = setTimeout(() => {
        setMessages((prev) => prev.slice(0, 1));
      }, 5000); // Wait 5s before clearing to allow for smooth transitions

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Walk-in animation on page load
  useEffect(() => {
    const walkInTimer = setTimeout(() => {
      setHasWalkedIn(true);
      // Show greeting only after idle starts (2s walk-in + 5.8s intro + 5.2s wave = ~13s)
      setTimeout(() => {
        setShowGreeting(true);
      }, 13000);
    }, 1000);

    return () => clearTimeout(walkInTimer);
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => {
      const updated = [...prev, userMessage];
      // Keep only last MAX_MESSAGES to prevent memory bloat
      return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
    });
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
        // Show error message and set offline
        setIsOnline(false);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: `⚠️ ${data.error}\n\nPlease contact support if this issue persists.`,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => {
          const updated = [...prev, errorMessage];
          return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
        });
      } else {
        // Show AI response and set online
        setIsOnline(true);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.message,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => {
          const updated = [...prev, botMessage];
          return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Set offline status
      setIsOnline(false);
      // Show fallback error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => {
        const updated = [...prev, errorMessage];
        return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
      });
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, MAX_MESSAGES]);

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
        <div className={`fixed bottom-0 right-0 z-50 pointer-events-none ${!hasWalkedIn ? "translate-x-[200%]" : ""} transition-all duration-1000 ease-out`}>

          {/* Professional 3D Character */}
          <button
            onClick={() => {
              setIsOpen(true);
              setShowGreeting(false);
            }}
            className="relative group focus:outline-none pointer-events-auto"
            aria-label="Chat with advisor"
          >
            {/* 3D Professor Character with Three.js */}
            <div
              className="w-[220px] h-[380px] sm:w-[240px] sm:h-[380px] md:w-[280px] md:h-[480px] rounded-3xl overflow-hidden -mr-8 sm:-mr-8 md:-mr-12"
              onTouchStart={(e) => { (e.currentTarget as any)._touchY = e.touches[0].clientY; }}
              onTouchMove={(e) => {
                const prev = (e.currentTarget as any)._touchY ?? e.touches[0].clientY;
                const delta = prev - e.touches[0].clientY;
                (e.currentTarget as any)._touchY = e.touches[0].clientY;
                window.scrollBy(0, delta);
              }}
            >
              <Professor3D />
            </div>

            {/* Cloud speech bubble — above head */}
            {showGreeting && hasWalkedIn && (
              <div className="absolute top-24 right-0 z-20 animate-in fade-in zoom-in-95 duration-300 pointer-events-none">
                <div className="relative bg-white rounded-2xl shadow-lg px-3 py-2 border border-gray-100" style={{ borderRadius: '18px' }}>
                  <p className="text-[11px] font-semibold text-gray-800 leading-snug whitespace-nowrap">✈️ Study abroad?<br/><span className="font-normal text-gray-500 text-[10px]">Let&apos;s find your uni!</span></p>
                  {/* Cloud tail — bottom left pointing down to head */}
                  <div className="absolute -bottom-[9px] left-4 w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '9px solid white',
                    }}
                  />
                  {/* Border for tail */}
                  <div className="absolute -bottom-[11px] left-[14px] w-0 h-0 -z-10"
                    style={{
                      borderLeft: '7px solid transparent',
                      borderRight: '7px solid transparent',
                      borderTop: '10px solid #f3f4f6',
                    }}
                  />
                </div>
              </div>
            )}

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
            {/* Header - Black & White */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-black via-gray-900 to-black">
              <div className="flex items-center gap-3">
                {/* Mini Professor Avatar */}
                <div className="relative w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden border-2 border-gray-200">
                  <img
                    src="/images/team/alameen.png"
                    alt="Professor"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white text-lg">Study Abroad Advisor</h3>
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${
                      isOnline
                        ? "bg-green-400 animate-pulse"
                        : "bg-red-500"
                    }`} />
                    {isOnline ? "Online Now" : "Offline"}
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
                    <MessageBubble key={message.id} message={message} />
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 animate-slide-in">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-md overflow-hidden">
                        <img
                          src="/images/team/alameen.png"
                          alt="Professor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-gray-800 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-800 rounded-full animate-bounce"
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
                      className="flex-1 rounded-xl border border-gray-300"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-black hover:bg-gray-800 text-white rounded-xl px-6 shadow-md disabled:bg-gray-400"
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
