export default function ImageCard({ image }) {
  return (
    <div>
      <img src={image.small} alt="Image" />
    </div>
  );
}
