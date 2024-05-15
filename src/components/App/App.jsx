import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { getImages } from "../../images-api";
import { SearchBar } from "../SearchBar/SearchBar";

export default function App() {
  const handleFormSubmit = (value) => {
    console.log("log:", value);
  };
  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleFormSubmit} />
    </>
  );
}
