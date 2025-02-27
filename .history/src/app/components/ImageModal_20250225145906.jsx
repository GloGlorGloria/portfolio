"use client"
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import styles from "./ImageModal.module.css";

export default function ImageModal({ images, selectedImageIndex, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        
        {/* Swiper Carousel inside Modal */}
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          initialSlide={selectedImageIndex} 
          className={styles.swiper}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img src={src} alt={`Slide ${index}`} className={styles.fullImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
