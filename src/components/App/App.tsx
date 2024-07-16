import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../fetch-api/fetch-api";
import { Toaster, toast } from "react-hot-toast";
import { IPicture, TSearchHandler, TLoadMoreHandler, TImageClickHandler, TModalCloseHandler } from "./App.types";

function App() {
  const [images, setImages] = useState<IPicture[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<IPicture | null>(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await fetchImages({ query, page });
        if (data.images.length === 0) {
          toast.error("No images found");
        }
        setImages((prevImages) =>
          page === 1 ? data.images : [...prevImages, ...data.images]
        );
      } catch (error) {
        setError(true);
        toast.error("Error fetching images");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch: TSearchHandler = (newQuery) => {
    setImages([]);
    setPage(1);
    setQuery(newQuery);
  };

  const loadMoreImages: TLoadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal: TImageClickHandler = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal: TModalCloseHandler = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "rgb(63, 63, 255)",
            color: "white",
            boxShadow: "none",
          },
        }}
      />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={loadMoreImages} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
