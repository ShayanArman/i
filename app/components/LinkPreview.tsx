'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

interface LinkPreviewProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  previewImage?: string;
  previewUrl?: string;
}

export default function LinkPreview({ href, children, className = '', style, previewImage, previewUrl }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const screenshotUrl = previewUrl || href;
  const imgSrc = previewImage || `https://api.microlink.io/?url=${encodeURIComponent(screenshotUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
  const isInternal = href.startsWith('/');

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 100);
  };

  const linkProps = {
    className,
    style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <span className="relative inline-block">
      {isInternal ? (
        <Link href={href} {...linkProps}>
          {children}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...linkProps}>
          {children}
        </a>
      )}
      <span
        className={`
          absolute bottom-full left-0 mb-3 z-50
          pointer-events-none
          transition-all duration-200 ease-out
          ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}
        `}
      >
        <span className="block w-[280px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={`Preview of ${href}`}
            className="w-full h-[180px] object-cover object-top"
            loading="eager"
          />
          <span className="block px-3 py-2 text-xs text-gray-500 dark:text-gray-400 truncate border-t border-gray-100 dark:border-gray-800">
            {screenshotUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </span>
        <span className="absolute left-6 -bottom-1.5 w-3 h-3 rotate-45 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700" />
      </span>
    </span>
  );
}
