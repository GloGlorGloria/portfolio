"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import styles from "./imageModalCarousel.module.css";

export default function ImageCarouselModal({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.carouselWrapper}>
      {/* Small Carousel */}
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
              onClick={() => openModal(index)} // Click to enlarge
              style={{ cursor: "pointer" }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Modal with Swiper */}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>

            <Swiper
              modules={[Navigation, Pagination, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              initialSlide={selectedIndex} // Start at clicked image
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
      )}
    </div>
  );
}
