export default function ImageCard({ images }) {
  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.small} alt="asd" />
        </div>
      ))}
    </div>
  );
}
