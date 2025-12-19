import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${
        hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-2xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
