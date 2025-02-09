"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        className={styles.swiper}
        onClick={() => setSelectedImage("/images/projects/relay/relay-user-research.png")}
                  style={{ cursor: "pointer" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <img src={src} alt={`Slide ${index}`} className={styles.carouselImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
