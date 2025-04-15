import React from 'react';

export function Textarea({ className = '', ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-indigo-500 ${className}`}
      {...props}
    />
  );
}