"use client";

import React, { useState } from "react";

import ReactMarkdown from "react-markdown";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minRows?: number;
};

export const WYSIWYGTextarea: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "Type your markdown here...",
  minRows = 8,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="w-full border border-gray-600 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
      {/* Toggle buttons */}
      <div className="flex border-b border-gray-600 bg-gray-800">
        <button
          onClick={() => setShowPreview(false)}
          className={`px-4 py-2 text-sm font-medium transition ${
            !showPreview
              ? "bg-gray-700 border-b-2 border-blue-500 text-blue-300"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Write
        </button>
        <button
          onClick={() => setShowPreview(true)}
          className={`px-4 py-2 text-sm font-medium transition ${
            showPreview
              ? "bg-gray-700 border-b-2 border-blue-500 text-blue-300"
              : "text-gray-300 hover:text-white"
          }`}
        >
          Preview
        </button>
      </div>

      {/* Content area */}
      <div className="min-h-[200px]">
        {!showPreview ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={minRows}
            className="w-full h-full min-h-[200px] p-4 border-none outline-none resize-none font-mono text-sm leading-relaxed bg-gray-900 text-gray-100 placeholder-gray-500"
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", monospace',
            }}
          />
        ) : (
          <div className="p-4 min-h-[200px] bg-gray-900 text-gray-100">
            {value ? (
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-bold mb-3 text-white mt-6 border-b border-gray-700 pb-1">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-semibold mb-2 text-white mt-4">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-200 leading-relaxed">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-white">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-200">{children}</em>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-800 text-red-300 px-1.5 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700 font-mono text-sm">
                      {children}
                    </pre>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-200">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-200">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-200">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-300 bg-gray-800/50 p-2 rounded-r-md my-4">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-blue-400 hover:text-blue-300 underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  hr: () => <hr className="border-gray-700 my-6" />,
                }}
              >
                {value}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-500 italic">Nothing to preview</p>
            )}
          </div>
        )}
      </div>

      {/* Helper text */}
      <div className="px-4 py-2 bg-gray-800 border-t border-gray-600 text-xs text-gray-400">
        Supports **bold**, *italic*, `code`, [links](url), # headers, - lists, etc.
      </div>
    </div>
  );
};