import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onClick }) {
  return (
    <ul className="ImageGallery">
      {images.map((item) => {
        return <ImageGalleryItem item={item} onClick={onClick} />;
      })}
    </ul>
  );
}

export default ImageGallery;
