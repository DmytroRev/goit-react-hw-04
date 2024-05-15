import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      <li>
        <div>
          <ImageCard images={images} />
        </div>
      </li>
    </ul>
  );
}
