"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <img
        src="/assets/logo/Logo.png"
        alt="GlowFit Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />

      <h1
        className="
          text-lg sm:text-xl font-bold 
          bg-gradient-to-b from-[#fceabb] via-[#f8d37a] to-[#c98b2a]
          bg-clip-text text-transparent 
          drop-shadow-[0_0_18px_rgba(255,216,98,0.25)]
          tracking-wide select-none
          whitespace-nowrap
        "
      >
        GlowFit
      </h1>
    </div>
  );
}