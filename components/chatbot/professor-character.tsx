"use client";

import { useEffect, useState } from "react";

interface ProfessorCharacterProps {
  expression?: "neutral" | "happy" | "excited" | "thinking";
  pose?: "standing" | "waving" | "pointing" | "reading";
  outfit?: "default" | "casual" | "formal" | "seasonal";
  size?: number;
  animate?: boolean;
}

export function ProfessorCharacter({
  expression = "happy",
  pose = "waving",
  outfit = "default",
  size = 200,
  animate = true,
}: ProfessorCharacterProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Skin tone - warm professional
  const skinColor = "#ffcc99";
  const skinDark = "#d4a574";

  // Outfit colors based on theme
  const outfitColors = {
    default: { primary: "#2563eb", secondary: "#1e40af", accent: "#dc2626" },
    casual: { primary: "#10b981", secondary: "#059669", accent: "#3b82f6" },
    formal: { primary: "#1f2937", secondary: "#111827", accent: "#fbbf24" },
    seasonal: { primary: "#dc2626", secondary: "#991b1b", accent: "#22c55e" },
  };

  const colors = outfitColors[outfit];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size * 1.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={size}
        height={size * 1.2}
        viewBox="0 0 200 240"
        xmlns="http://www.w3.org/2000/svg"
        className={`${animate ? 'animate-character-float' : ''} ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
      >
        <defs>
          {/* Gradients for 3D effect */}
          <linearGradient id="skin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={skinColor} />
            <stop offset="100%" stopColor={skinDark} />
          </linearGradient>

          <linearGradient id="suit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="100%" stopColor={colors.secondary} />
          </linearGradient>

          <radialGradient id="face-highlight">
            <stop offset="0%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Shadow filter */}
          <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="2" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground Shadow */}
        <ellipse
          cx="100"
          cy="225"
          rx="60"
          ry="8"
          fill="rgba(0,0,0,0.15)"
          className="animate-pulse-shadow"
        />

        {/* Main Character Group */}
        <g filter="url(#drop-shadow)">
          {/* Legs */}
          <g>
            <rect x="75" y="160" width="20" height="50" rx="10" fill="#374151" />
            <rect x="105" y="160" width="20" height="50" rx="10" fill="#374151" />
            {/* Shoes */}
            <ellipse cx="85" cy="210" rx="14" ry="6" fill="#1a1a1a" />
            <ellipse cx="115" cy="210" rx="14" ry="6" fill="#1a1a1a" />
          </g>

          {/* Body - Professional Suit */}
          <g>
            <path
              d="M 60 100 L 55 160 Q 55 165 60 165 L 140 165 Q 145 165 145 160 L 140 100 Z"
              fill="url(#suit-gradient)"
            />

            {/* Collar */}
            <path
              d="M 85 100 L 80 95 L 90 100 Z"
              fill="white"
            />
            <path
              d="M 115 100 L 120 95 L 110 100 Z"
              fill="white"
            />

            {/* Tie */}
            <path
              d="M 100 100 L 95 105 L 97 140 L 100 145 L 103 140 L 105 105 Z"
              fill={colors.accent}
            />

            {/* Buttons */}
            <circle cx="100" cy="115" r="2.5" fill="white" opacity="0.9" />
            <circle cx="100" cy="130" r="2.5" fill="white" opacity="0.9" />
            <circle cx="100" cy="145" r="2.5" fill="white" opacity="0.9" />

            {/* Pocket */}
            <rect x="68" y="120" width="18" height="20" rx="2" fill="rgba(0,0,0,0.1)" />
          </g>

          {/* Arms */}
          <g>
            {/* Left Arm */}
            {pose === "waving" ? (
              <g className={animate ? "animate-wave-arm" : ""} style={{ transformOrigin: '50px 110px' }}>
                <path
                  d="M 50 110 Q 45 120 42 140 L 45 150"
                  stroke="url(#suit-gradient)"
                  strokeWidth="18"
                  strokeLinecap="round"
                  fill="none"
                />
                <ellipse cx="45" cy="152" rx="12" ry="14" fill="url(#skin-gradient)" />
              </g>
            ) : (
              <path
                d="M 60 110 Q 50 130 50 150"
                stroke="url(#suit-gradient)"
                strokeWidth="18"
                strokeLinecap="round"
                fill="none"
              />
            )}

            {/* Right Arm - holding tablet */}
            <path
              d="M 150 110 Q 160 130 165 150"
              stroke="url(#suit-gradient)"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="165" cy="152" rx="12" ry="14" fill="url(#skin-gradient)" />

            {/* Tablet/Device */}
            <g>
              <rect x="159" y="155" width="20" height="28" rx="2" fill="#1f2937" />
              <rect x="161" y="157" width="16" height="24" rx="1" fill="#60a5fa" opacity="0.8" />
            </g>
          </g>

          {/* Neck */}
          <path
            d="M 90 95 L 88 105 L 112 105 L 110 95 Z"
            fill="url(#skin-gradient)"
          />

          {/* Head */}
          <g>
            <ellipse
              cx="100"
              cy="70"
              rx="32"
              ry="36"
              fill="url(#skin-gradient)"
            />
            <ellipse
              cx="100"
              cy="70"
              rx="32"
              ry="36"
              fill="url(#face-highlight)"
            />

            {/* Ears */}
            <ellipse cx="68" cy="70" rx="6" ry="10" fill={skinColor} />
            <ellipse cx="132" cy="70" rx="6" ry="10" fill={skinColor} />
          </g>

          {/* Hair - Gray/Silver Professor Style */}
          <g>
            <path
              d="M 72 48 Q 72 35 82 30 Q 90 27 100 27 Q 110 27 118 30 Q 128 35 128 48"
              fill="#c0c0c0"
            />
            <path
              d="M 72 48 Q 72 35 82 30 Q 90 27 100 27 Q 110 27 118 30 Q 128 35 128 48"
              fill="#d8d8d8"
              opacity="0.5"
            />
            {/* Side hair */}
            <ellipse cx="70" cy="62" rx="6" ry="12" fill="#c0c0c0" />
            <ellipse cx="130" cy="62" rx="6" ry="12" fill="#c0c0c0" />
          </g>

          {/* Academic Cap (Mortarboard) */}
          <g>
            {/* Square board */}
            <path
              d="M 70 32 L 130 32 L 135 28 L 65 28 Z"
              fill="#1a1a1a"
            />
            <rect x="70" y="32" width="60" height="3" fill="#2a2a2a" />

            {/* Tassel */}
            <line x1="128" y1="30" x2="138" y2="42" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="138" cy="45" r="4" fill="#fbbf24" />
            <circle cx="138" cy="45" r="2.5" fill="#f59e0b" />

            {/* Cap base */}
            <ellipse cx="100" cy="32" rx="22" ry="8" fill="#1a1a1a" />
          </g>

          {/* Face Features */}
          <g>
            {/* Eyebrows */}
            <path
              d="M 78 58 Q 85 56 92 58"
              stroke="#5a5a5a"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 108 58 Q 115 56 122 58"
              stroke="#5a5a5a"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Glasses - Modern Rounded */}
            <g opacity="0.95">
              <rect x="73" y="62" width="22" height="14" rx="7" fill="none" stroke="#1e293b" strokeWidth="3" />
              <rect x="105" y="62" width="22" height="14" rx="7" fill="none" stroke="#1e293b" strokeWidth="3" />
              <line x1="95" y1="69" x2="105" y2="69" stroke="#1e293b" strokeWidth="3" />

              {/* Glasses shine */}
              <circle cx="80" cy="66" r="3" fill="white" opacity="0.6" />
              <circle cx="112" cy="66" r="3" fill="white" opacity="0.6" />
            </g>

            {/* Eyes behind glasses */}
            <g className={animate ? "animate-blink-smooth" : ""}>
              <ellipse cx="84" cy="69" rx="5" ry="6" fill="white" />
              <circle cx="84" cy="70" r="3.5" fill="#1e293b" />
              <circle cx="85" cy="69" r="1.5" fill="white" />

              <ellipse cx="116" cy="69" rx="5" ry="6" fill="white" />
              <circle cx="116" cy="70" r="3.5" fill="#1e293b" />
              <circle cx="117" cy="69" r="1.5" fill="white" />
            </g>

            {/* Nose */}
            <path
              d="M 100 72 Q 99 78 99 82"
              stroke={skinDark}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="97" cy="82" rx="2" ry="1.5" fill={skinDark} />
            <ellipse cx="103" cy="82" rx="2" ry="1.5" fill={skinDark} />

            {/* Smile - Expression based */}
            {expression === "happy" && (
              <path
                d="M 82 88 Q 86 91 90 92 Q 100 94 110 92 Q 114 91 118 88"
                stroke="#d97757"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            )}
            {expression === "excited" && (
              <path
                d="M 80 88 Q 90 98 100 98 Q 110 98 120 88"
                stroke="#d97757"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            )}
            {expression === "neutral" && (
              <line x1="85" y1="90" x2="115" y2="90" stroke="#d97757" strokeWidth="2.5" strokeLinecap="round" />
            )}
            {expression === "thinking" && (
              <path
                d="M 82 90 Q 100 88 118 90"
                stroke="#d97757"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            )}

            {/* Cheeks - subtle blush */}
            <ellipse cx="72" cy="78" rx="8" ry="5" fill="#ff8a80" opacity="0.25" />
            <ellipse cx="128" cy="78" rx="8" ry="5" fill="#ff8a80" opacity="0.25" />
          </g>

          {/* Sparkles */}
          <g className="animate-sparkle-rotate" style={{ transformOrigin: '100px 120px' }}>
            <circle cx="40" cy="80" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="160" cy="100" r="2" fill="#fbbf24" opacity="0.8" />
            <circle cx="150" cy="60" r="1.5" fill="#60a5fa" opacity="0.8" />
            <circle cx="50" cy="140" r="1.5" fill="#60a5fa" opacity="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}
