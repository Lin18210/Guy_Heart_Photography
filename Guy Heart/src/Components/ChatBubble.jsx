import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#6B8E9B] p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Guy Heart AI</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </div>
                <button 
                  onClick={toggleChat}
                  className="hover:bg-white/20 p-1 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chatbot Iframe */}
              <div className="flex-1 bg-gray-50">
                <iframe 
                  src="https://guy-chatbot.onrender.com" 
                  title="Guy Heart Chatbot"
                  width="100%" 
                  height="100%" 
                  className="border-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className="bg-[#6B8E9B] hover:bg-[#5a7a85] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </>
  );
};

export default ChatBubble;
