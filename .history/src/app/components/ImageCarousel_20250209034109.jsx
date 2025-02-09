import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images, className }) {
  return (
    <div className={`${styles.carouselWrapper} ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        className={styles.swiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className={styles.carouselImage} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
