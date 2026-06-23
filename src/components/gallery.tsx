"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function InteractiveGallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[activeIndex];

  return (
    <div className="flex flex-col gap-6 w-full">
      <span className="inline-block text-xs font-bold font-title uppercase tracking-widest text-primary">
        Galeria de Fotos
      </span>
      <h3 className="font-title font-bold text-2xl text-deep-blue">
        O Projeto em Imagens
      </h3>

      {/* Main Viewport */}
      <div 
        className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-premium border border-line bg-slate-900 overflow-hidden shadow-premium group cursor-zoom-in"
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          sizes="(max-w-768px) 100vw, 80vw"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.02]"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

        {/* View Zoom Icon */}
        <div className="absolute top-4 right-4 bg-white/20 hover:bg-white/35 backdrop-blur-md text-white p-3 rounded-full shadow-lg transition-all duration-300 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100">
          <ZoomIn className="w-5 h-5" />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <p className="font-title font-bold text-lg sm:text-xl md:text-2xl mb-1 text-white leading-tight">
            {currentImage.caption}
          </p>
          <span className="text-xs text-white/75 font-semibold">
            Foto {activeIndex + 1} de {images.length}
          </span>
        </div>

        {/* Inline Nav Controls */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails Row */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300">
        {images.map((img, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-16 sm:w-28 sm:h-20 rounded-[10px] overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer ${
                isActive 
                  ? "border-primary scale-[1.02] shadow-md opacity-100" 
                  : "border-line opacity-65 hover:opacity-100 hover:border-primary/45"
              }`}
            >
              <Image
                src={img.src}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="(max-w-768px) 80px, 112px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 md:p-8 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Panel Controls */}
          <div className="w-full flex justify-between items-center text-white/80 z-50">
            <span className="font-title font-semibold text-sm">
              Foto {activeIndex + 1} de {images.length}
            </span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Main Viewport */}
          <div className="relative flex-grow flex items-center justify-center my-6 max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full max-w-[90vw] max-h-[70vh] flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={800}
                priority
                className="object-contain max-w-full max-h-full rounded-lg"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 z-50 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Bottom Panel Caption */}
          <div className="w-full text-center max-w-[800px] mx-auto pb-4 md:pb-8" onClick={(e) => e.stopPropagation()}>
            <p className="font-title font-bold text-xl md:text-2xl text-white leading-relaxed mb-2">
              {currentImage.caption}
            </p>
            <p className="text-white/60 text-xs tracking-wider">
              Ponto de Cultura Kombinação &copy; 2026
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
