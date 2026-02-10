import React from "react";
import { X } from "lucide-react";

interface ErrorPopupProps {
  message: string;
  onClose: () => void;
}

export const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-spotify-glass-dark backdrop-blur-xl flex items-center justify-center z-50 animate-fade-in">
      <div className="relative max-w-md mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
        <div className="relative bg-spotify-glass backdrop-blur-2xl p-8 rounded-2xl shadow-2xl border border-white/20">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X size={14} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Oops! Something went wrong
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white ml-4 transition-colors duration-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-spotify-green to-spotify-green-light text-white rounded-full font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-spotify-green/30"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
