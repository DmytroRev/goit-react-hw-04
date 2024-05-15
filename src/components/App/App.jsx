import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { getImages } from "../../images-api";
import { SearchBar } from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";

export default function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoader(true);
        const data = await getImages("", 1);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchImages();
  }, []);

  const handleFormSubmit = async (value) => {
    try {
      const data = await getImages(value, 1);
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      <Loader />
    </>
  );
}
