import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import styles from "./ImageCarousel.module.css"; // Custom CSS only

export default function ImageCarousel({ images }) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={10}
        slidesPerView={1}
        className={styles.swiper} // Ensures Swiper doesn’t break layout
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
