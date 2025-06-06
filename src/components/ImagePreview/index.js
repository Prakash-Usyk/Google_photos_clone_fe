import React, { useState } from "react";
import "./index.css";

function PhotoGallery({ photos }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <img
            key={idx}
            src={photo.url}
            alt="snap"
            className="photo"
            onClick={() => setSelectedImage(photo.url)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="preview" className="preview-image" />
        </div>
      )}
    </>
  );
}

export default PhotoGallery;
