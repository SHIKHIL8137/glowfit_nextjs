import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GymLoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500); // wait before exit animation
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 🔥 EXIT ANIMATION
  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        onAnimationComplete={onFinish} // <-- Call finish ONLY after animations end
        className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-orange-500 text-6xl font-bold"
        >
          LET'S GO!
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-8 z-[9999]">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="mb-12"
      >
        <motion.div
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-orange-500">
            <motion.path
              d="M30 60 L40 60 L40 40 L50 40 L50 80 L40 80 L40 60 M70 40 L70 80 L80 80 L80 40 L90 40 L90 60 L90 60"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="35" cy="60" r="8" fill="currentColor" />
            <circle cx="85" cy="60" r="8" fill="currentColor" />
            <rect x="48" y="55" width="24" height="10" fill="currentColor" rx="2" />
          </svg>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-7xl font-black text-orange-500 mb-4 tracking-tight"
      >
        Glow<span className="text-orange-400">Fit</span> Women's Gym
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-orange-500/70 text-lg md:text-xl font-semibold mb-12 tracking-wider"
      >
        Empower Your Strength
      </motion.p>

      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="relative"
        >
          <div className="h-3 bg-orange-500/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 relative"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-4 text-orange-500 text-2xl font-bold tabular-nums"
            key={progress}
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="flex gap-2 mt-8"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-orange-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-orange-500/60 text-sm font-medium mt-4 tracking-widest uppercase"
      >
        Preparing your empowerment journey
      </motion.p>
    </div>
  );
};

export default React.memo(GymLoadingScreen);
