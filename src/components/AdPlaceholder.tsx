import React from 'react';

interface AdPlaceholderProps {
  className?: string;
}

export default function AdPlaceholder({ className = "" }: AdPlaceholderProps) {
  return (
    <div className={`ad-placeholder min-h-[250px] bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 ${className}`}>
      <p>Advertisement</p>
    </div>
  );
}