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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <img src={src} alt={alt} className="full-image" />
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          position: relative;
          max-width: 90vw; max-height: 90vh;
        }
        .full-image {
          width: 100%; height: 100%; object-fit: contain;
        }
        .close-button {
          position: absolute;
          top: 10px; right: 10px;
          background: white; border: none; padding: 5px 10px;
          font-size: 24px; cursor: pointer;
        }
      `}</style>
    </div>
  );
}
