"use client";
import { useState } from "react";
import ImageModal from "@/app/components/ImageModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true} 
        className={styles.swiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img 
              src={src} 
              alt={`Slide ${index}`} 
              className={styles.carouselImage}
              onClick={() => setSelectedImageIndex(index)} // Save index on click
              style={{ cursor: "pointer" }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImageIndex !== null && (
        <ImageModal
          images={images} 
          selectedImageIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  );
}
