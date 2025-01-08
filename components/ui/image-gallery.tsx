"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImageGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
          enabled: true,
          hideOnClick: false,
        }}
        breakpoints={{
          0: {
            navigation: {
              enabled: false,
            },
          },
          640: {
            navigation: {
              enabled: true,
            },
          },
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="h-[300px] sm:h-[600px] mb-2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="h-16 sm:h-24"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
