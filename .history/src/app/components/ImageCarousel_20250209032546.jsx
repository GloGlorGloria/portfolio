import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/ImageCarousel.module.css";

export default function ImageCarousel({ images, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.carouselOverlay} onClick={onClose}>
      <div className={styles.carouselContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>

        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={activeIndex}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index}`} className={styles.carouselImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
