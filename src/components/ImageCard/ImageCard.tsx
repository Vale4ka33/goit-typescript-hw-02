import React from "react";
import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} className={css.image} onClick={onClick} />;
};

export default ImageCard;