import React, { useState } from 'react';

interface PollUrlDisplayProps {
  pollId: string;
}

const PollUrlDisplay: React.FC<PollUrlDisplayProps> = ({ pollId }) => {
  const [copied, setCopied] = useState(false);

  // Generate the poll participation URL
  const pollUrl = `${window.location.origin}/poll/${pollId}`;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(pollUrl);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = pollUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-800/60 border border-slate-700/50 rounded-xl px-3 py-2 shadow-sm">
      {/* Label */}
      <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
        Poll URL:
      </span>

      {/* URL Code Block */}
      <div className="flex-1 min-w-0 flex items-center gap-2">
        <code
          className="block text-sm text-slate-100 bg-slate-900/70 px-3 py-1.5 rounded-lg border border-slate-600/50 font-mono truncate shadow-inner"
          title={pollUrl}
        >
          {pollUrl}
        </code>

        {/* Copy Button */}
        <button
          onClick={handleCopyUrl}
          className="flex-shrink-0 p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg border border-slate-600/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          title="Copy URL"
          aria-label="Copy URL"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
              <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11.586l-3-3a1 1 0 00-1.414 0L9 10.172V13h2.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z" />
            </svg>
          )}
        </button>
      </div>

      {/* Copied Success Message */}
      {copied && (
        <span className="text-xs font-medium text-green-400 flex-shrink-0 animate-fade-in">
          Copied!
        </span>
      )}
    </div>
  );
};

export default PollUrlDisplay;