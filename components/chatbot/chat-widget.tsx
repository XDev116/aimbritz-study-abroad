"use client";

import { useState, useRef, useEffect, memo, useCallback } from "react";
import { X, Send, Minimize2, User, ArrowLeftRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Professor3D } from "./professor-3d";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Memoized message bubble — paper surfaces, hairline borders, editorial type
const MessageBubble = memo(({ message }: { message: Message }) => (
  <div
    className={`flex gap-3 animate-slide-in ${
      message.sender === "user" ? "justify-end" : "justify-start"
    }`}
  >
    {message.sender === "bot" && (
      <div className="w-8 h-8 rounded-full bg-paper border border-hairline flex items-center justify-center flex-shrink-0 overflow-hidden">
        <img
          src="/images/team/alameen.webp"
          alt="Advisor"
          className="w-full h-full object-cover"
        />
      </div>
    )}

    <div
      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
        message.sender === "user"
          ? "bg-ink text-paper rounded-br-sm"
          : "bg-paper-3 border border-hairline text-ink rounded-bl-sm"
      }`}
    >
      <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
      <span
        className={`font-mono text-[10px] tracking-wider uppercase mt-1.5 block ${
          message.sender === "user" ? "text-paper/50" : "text-ink-3"
        }`}
      >
        {message.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>

    {message.sender === "user" && (
      <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
        <User className="h-4 w-4 text-paper" />
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
  const [side, setSide] = useState<"right" | "left">("right");
  const [isDismissed, setIsDismissed] = useState(false);
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
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setMessages((prev) => prev.slice(0, 1));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let greetingTimer: ReturnType<typeof setTimeout>;
    const walkInTimer = setTimeout(() => {
      setHasWalkedIn(true);
      greetingTimer = setTimeout(() => {
        setShowGreeting(true);
      }, 10000);
    }, 1000);

    return () => {
      clearTimeout(walkInTimer);
      clearTimeout(greetingTimer);
    };
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
      return updated.length > MAX_MESSAGES ? updated.slice(-MAX_MESSAGES) : updated;
    });
    const userQuestion = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
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
      setIsOnline(false);
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
      {/* Floating CEO character — walks in on load */}
      {!isOpen && !isDismissed && (
        <>
          {/* Speech bubble */}
          {showGreeting && hasWalkedIn && (
            <button
              onClick={() => { setIsOpen(true); setShowGreeting(false); }}
              aria-label="Chat with advisor"
              className={`fixed z-50 pointer-events-auto animate-in fade-in duration-300
                         [bottom:130px] sm:[bottom:220px] md:[bottom:300px]
                         ${side === "right"
                           ? "[right:100px] sm:[right:100px] md:[right:180px]"
                           : "[left:100px] sm:[left:100px] md:[left:180px]"}`}
            >
              <div
                className="relative rounded-xl px-3 py-2 sm:rounded-2xl sm:px-4 sm:py-3 shadow-lg text-left"
                style={{ background: "var(--ink)", maxWidth: "120px" }}
              >
                <p className="font-sans text-[10px] sm:text-[12px] leading-snug font-medium" style={{ color: "var(--paper)" }}>
                  Hi! Need help finding a university?
                </p>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${side === "right" ? "-right-[7px]" : "-left-[7px]"}`}
                  style={side === "right"
                    ? { borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "8px solid var(--ink)" }
                    : { borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderRight: "8px solid var(--ink)" }}
                />
              </div>
            </button>
          )}

          <div
            className={`fixed bottom-0 z-50 pointer-events-none transition-all duration-1000 ease-out
              ${side === "right" ? "right-0" : "left-0"}
              ${!hasWalkedIn ? (side === "right" ? "translate-x-[200%]" : "-translate-x-[200%]") : ""}`}
          >
            {/* Character — click to open chat */}
            <button
              onClick={() => { setIsOpen(true); setShowGreeting(false); }}
              aria-label="Chat with advisor"
              data-cursor-label="Chat"
              className="relative block w-[140px] h-[240px] sm:w-[200px] sm:h-[340px] md:w-[280px] md:h-[480px] pointer-events-auto cursor-pointer"
              style={{ touchAction: "pan-y", background: "none", border: "none", padding: 0 }}
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <Professor3D />
              </div>
            </button>

            {/* Control buttons — swap side / dismiss to chat bubble */}
            <div
              className={`absolute bottom-3 pointer-events-auto flex gap-1.5
                ${side === "right" ? "left-1/2 -translate-x-1/2" : "left-1/2 -translate-x-1/2"}`}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSide(s => s === "right" ? "left" : "right"); }}
                aria-label="Swap position"
                className="h-7 w-7 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                style={{ background: "var(--ink)", color: "var(--paper)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <ArrowLeftRight className="h-3 w-3" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setIsDismissed(true); }}
                aria-label="Dismiss"
                className="h-7 w-7 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
                style={{ background: "var(--ink)", color: "var(--paper)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Minimised chat bubble — shown after dismiss */}
      {!isOpen && isDismissed && (
        <button
          onClick={() => { setIsDismissed(false); setIsOpen(true); }}
          aria-label="Open chat"
          data-cursor-label="Chat"
          className={`fixed bottom-6 z-50 h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-colors hover:opacity-90
            ${side === "right" ? "right-6" : "left-6"}`}
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat window — paper surface, hairline border, Fraunces header */}
      {isOpen && (
        <div
          className={`fixed bottom-6 z-50 transition-all duration-300 ${
            side === "right" ? "right-6" : "left-6"
          } ${isMinimized ? "w-80 h-16" : "w-full sm:w-96 h-[600px]"} max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)]`}
        >
          <div className="bg-paper-3 rounded-3xl shadow-paper h-full flex flex-col overflow-hidden border border-hairline animate-scale-in">
            {/* Header — ink surface, editorial title */}
            <div className="flex items-center justify-between p-4 border-b border-hairline bg-ink">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-paper overflow-hidden border border-paper/20">
                  <img
                    src="/images/team/alameen.webp"
                    alt="Advisor"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif italic text-paper text-lg leading-tight">
                    Study abroad advisor
                  </h3>
                  <p className="text-[11px] text-paper/60 flex items-center gap-1.5 font-mono tracking-wider uppercase mt-0.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isOnline
                          ? "bg-olive animate-pulse"
                          : "bg-rose"
                      }`}
                    />
                    {isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-paper/10 rounded-full transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="h-4 w-4 text-paper" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-paper/10 rounded-full transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4 text-paper" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages area — warm paper background */}
                <div
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper"
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                >
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}

                  {isTyping && (
                    <div className="flex gap-3 animate-slide-in">
                      <div className="w-8 h-8 rounded-full bg-paper-3 border border-hairline flex items-center justify-center overflow-hidden">
                        <img
                          src="/images/team/alameen.webp"
                          alt="Advisor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-paper-3 border border-hairline rounded-2xl rounded-bl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-ink rounded-full animate-bounce" />
                          <div
                            className="w-1.5 h-1.5 bg-ink rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                          <div
                            className="w-1.5 h-1.5 bg-ink rounded-full animate-bounce"
                            style={{ animationDelay: "0.4s" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick actions — hairline chips */}
                <div className="px-4 py-3 border-t border-hairline bg-paper-2">
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-paper-3 hover:bg-ink hover:text-paper rounded-full transition-all text-xs font-medium border border-hairline text-ink whitespace-nowrap flex-shrink-0"
                      >
                        <span className="text-sm">{action.icon}</span>
                        <span>{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input area — underline-only */}
                <div className="p-4 border-t border-hairline bg-paper-3">
                  <div className="flex gap-2 items-center">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                      placeholder="Ask anything…"
                      className="flex-1 rounded-full border border-hairline bg-paper text-ink placeholder:text-ink-3"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="bg-ink hover:bg-ink-2 text-paper rounded-full h-10 w-10 p-0 disabled:bg-ink-4 disabled:text-paper"
                      aria-label="Send"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-3 mt-3 text-center">
                    Guided by AimBritz · AI assisted
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
