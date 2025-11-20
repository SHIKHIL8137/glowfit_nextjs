"use client";

import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef();

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`${className || ""} overflow-hidden`} {...props}>
      {!isLoaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className || ""}`}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};

export default React.memo(LazyImage);