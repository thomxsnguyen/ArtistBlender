/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        spotify: {
          green: "#1db954",
          "green-light": "#1ed760",
          "green-hover": "#1fdf64",
          "green-dark": "#169c46",
          black: "#000000",
          "dark-black": "#121212",
          "dark-gray": "#181818",
          "medium-gray": "#282828",
          "light-gray": "#3e3e3e",
          "lighter-gray": "#535353",
          "text-gray": "#a7a7a7",
          "text-light": "#ffffff",
          "text-subdued": "#b3b3b3",
          "border-gray": "#2a2a2a",
          "hover-gray": "#1a1a1a",
          "card-hover": "#2a2a2a",
          "electric-blue": "#00d4ff",
          "neon-purple": "#8b5cf6",
          "hot-pink": "#ec4899",
          "lime-green": "#84cc16",
          "sunset-orange": "#f97316",
        },
      },
      fontFamily: {
        inter: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-delay": "fadeIn 1s ease-out 0.3s both",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-up-delay": "slideUp 0.8s ease-out 0.2s both",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 2s",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-color": "pulseColor 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        wiggle: "wiggle 1s ease-in-out",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "gentle-bounce": "gentleBounce 3s ease-in-out infinite",
        "soft-glow": "softGlow 4s ease-in-out infinite alternate",
        "card-hover": "cardHover 0.3s ease-out",
        "spotify-bounce": "spotifyBounce 1.2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "float-delayed": "floatDelayed 8s ease-in-out infinite",
        "splash-slide-down": "splashSlideDown 1s ease-out forwards",
        "colorful-glow": "colorfulGlow 3s ease-in-out infinite alternate",
        "rainbow-pulse": "rainbowPulse 4s ease-in-out infinite",
        "title-entrance": "titleEntrance 1.2s ease-out forwards",
        "logo-spin": "logoSpin 3s ease-in-out infinite",
        "particle-float": "particleFloat 4s ease-in-out infinite",
        "loading-bounce": "loadingBounce 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(2deg)" },
          "66%": { transform: "translateY(10px) rotate(-1deg)" },
        },
        pulseColor: {
          "0%, 100%": { backgroundColor: "rgba(29, 185, 84, 0.1)" },
          "50%": { backgroundColor: "rgba(29, 185, 84, 0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(29, 185, 84, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(29, 185, 84, 0.6)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gentleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        softGlow: {
          "0%": { boxShadow: "0 0 10px rgba(29, 185, 84, 0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(29, 185, 84, 0.4)" },
        },
        cardHover: {
          "0%": { transform: "translateY(0) scale(1)" },
          "100%": { transform: "translateY(-2px) scale(1.02)" },
        },
        spotifyBounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-8px)" },
          "60%": { transform: "translateY(-4px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatDelayed: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(-2deg)" },
          "66%": { transform: "translateY(8px) rotate(1deg)" },
        },
        splashSlideDown: {
          "0%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(100vh) scale(0.8)",
          },
        },
        colorfulGlow: {
          "0%": {
            boxShadow:
              "0 0 30px rgba(29, 185, 84, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
          },
          "25%": {
            boxShadow:
              "0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 30px rgba(236, 72, 153, 0.4), 0 0 60px rgba(132, 204, 22, 0.2)",
          },
          "75%": {
            boxShadow:
              "0 0 30px rgba(249, 115, 22, 0.4), 0 0 60px rgba(29, 185, 84, 0.2)",
          },
          "100%": {
            boxShadow:
              "0 0 30px rgba(29, 185, 84, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)",
          },
        },
        rainbowPulse: {
          "0%": {
            background:
              "linear-gradient(45deg, #1db954, #8b5cf6, #ec4899, #00d4ff)",
          },
          "25%": {
            background:
              "linear-gradient(45deg, #8b5cf6, #ec4899, #00d4ff, #84cc16)",
          },
          "50%": {
            background:
              "linear-gradient(45deg, #ec4899, #00d4ff, #84cc16, #f97316)",
          },
          "75%": {
            background:
              "linear-gradient(45deg, #00d4ff, #84cc16, #f97316, #1db954)",
          },
          "100%": {
            background:
              "linear-gradient(45deg, #1db954, #8b5cf6, #ec4899, #00d4ff)",
          },
        },
        titleEntrance: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.8)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0px)",
          },
        },
        logoSpin: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        particleFloat: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            opacity: "0.6",
          },
          "33%": {
            transform: "translateY(-30px) translateX(20px) rotate(120deg)",
            opacity: "1",
          },
          "66%": {
            transform: "translateY(15px) translateX(-15px) rotate(240deg)",
            opacity: "0.8",
          },
        },
        loadingBounce: {
          "0%, 80%, 100%": {
            transform: "scale(0.8)",
            opacity: "0.5",
          },
          "40%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
