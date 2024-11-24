'use client';

import { useState, useEffect } from 'react';

const SponsorCarousel = () => {
  const sponsors = [
    '/assets/icons/header/icon-marketing.svg',
    '/assets/icons/header/icon-image.svg',
    '/assets/icons/header/icon-box.svg',
    '/assets/icons/header/icon-target.svg',
    '/assets/icons/header/icon-call.svg',
    '/assets/icons/header/icon-marketing.svg',
    '/assets/icons/header/icon-image.svg',
    '/assets/icons/header/icon-box.svg',
    '/assets/icons/header/icon-target.svg',
    '/assets/icons/header/icon-call.svg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengupdate carousel setiap 5 detik untuk bergerak
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length); // Loop carousel
    }, 500); // Slide setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [sponsors.length]);

  return (
    <div className="overflow-hidden relative w-full h-32 bg-black">
      <div
        className="flex absolute top-0 left-0 transition-all duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / 5}%)`, // Mengatur pergeseran berdasarkan index
          width: '200%', // Atur lebar slider untuk melampaui batas container
        }}>
        {/* Mendistribusikan 5 sponsor per slide, duplikasi untuk efek infinite scroll */}
        {[...sponsors, ...sponsors].map((src, index) => (
          <div key={index} className="w-1/5 flex-shrink-0 flex justify-center items-center">
            <img src={src} alt={`Sponsor ${index + 1}`} className="h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCarousel;
