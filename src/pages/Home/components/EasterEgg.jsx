import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function EasterEgg({ showEasterEgg, setShowEasterEgg }) {
  // Easter egg trigger
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setShowEasterEgg(true);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowEasterEgg(false)}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="text-8xl mb-8"
            >
              🐋
            </motion.div>
            <h2 className="text-4xl font-bold text-purple-300 mb-4 font-mono">
              You found the secret!
            </h2>
            <p className="text-xl text-gray-200 font-mono">
              Congrats! You discovered the hidden easter egg. <br />
              You're clearly someone who pays attention to details. <br />
              <span className="text-purple-300">I like that.</span>
            </p>
            <p className="text-sm text-gray-400 mt-4 font-mono">
              (Press Ctrl+Shift+P or click anywhere to close)
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
