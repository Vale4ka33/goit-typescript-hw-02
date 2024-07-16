import React from "react";
import css from "./ImageCard.module.css";
import { IPicture, TImageClickHandler } from "../App/App.types";

interface ImageCardProps {
  image: IPicture; 
  onClick: TImageClickHandler;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const { urls, altDescription } = image;

  return (
    <img
      src={urls.small}
      alt={altDescription}
      className={css.image}
      onClick={() => onClick(image)}
    />
  );
};

export default ImageCard;
