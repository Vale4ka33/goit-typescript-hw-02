import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { IPicture, TImageClickHandler } from "../App/App.types";

interface ImageGalleryProps {
  images: IPicture[];
  onImageClick: TImageClickHandler;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageList}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            image={image} 
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
