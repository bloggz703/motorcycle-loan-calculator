import React, { useEffect } from 'react';
import { adManager } from '../utils/adManager';

interface AdPlaceholderProps {
  className?: string;
}

export default function AdPlaceholder({ className = "" }: AdPlaceholderProps) {
  useEffect(() => {
    // Load the primary ad script
    adManager.loadPrimaryScript();
  }, []);

  return (
    <div className={`min-h-[250px] ${className}`}>
      <div id="container-ce3b073fb89194578b01d2e69cbd1707"></div>
    </div>
  );
}