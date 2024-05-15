import { useState } from "react";
import toast from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [searchImage, setSearchImage] = useState("");

  const handleChange = (event) => {
    setSearchImage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchImage.trim() !== "") {
      onSubmit(searchImage);
    } else {
      toast.error("Type something:)");
    }
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchImage}
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
    </header>
  );
};
