import { useEffect } from "react";
import styles from "./ImageModal.module.css";

export default function ImageModal({ src, alt, onClose }) {
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
        <img src={src} alt={alt} className={styles.fullImage} />
      </div>
    </div>
  );
}
