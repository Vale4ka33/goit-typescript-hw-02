import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { IPicture, TModalCloseHandler } from "../App/App.types";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    background: "none",
  },
};

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: TModalCloseHandler;
  image: IPicture | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      overlayClassName={css.overlay}
      className={css.imageModal}
      contentLabel="Image Modal"
    >
      {image && (
        <div className={css.imageContainer}>
          <img
            src={image.urls.full}
            alt={image.altDescription}
            className={css.image}
          />
          <div className={css.info}>
            <p>
              <strong>Author:</strong> {image.author.fullName}
            </p>
            <p>
              <strong>Likes:</strong> {image.likesCount}
            </p>
            <p>
              <strong>Description:</strong>{" "}
              {image.altDescription || "No description available."}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
