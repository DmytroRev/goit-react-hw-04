import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { getImages } from "../../images-api";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const fetchImages = async (topic, page) => {
    try {
      setLoader(true);
      setIsError(false);
      const data = await getImages(topic, page);
      setImages(data);
    } catch (error) {
      setIsError(true);
      toast.error("Failed to fetch images");
    } finally {
      setLoader(false);
    }
  };

  const handleFormSubmit = (value) => {
    if (value.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    fetchImages(value, 1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleFormSubmit} />
      {isError && <ErrorMessage />}
      {loader && <Loader />}
      <ImageGallery images={images} />
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}
