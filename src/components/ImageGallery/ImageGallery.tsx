import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../images-api";

type GalleryProps = {
  images: Image[];
  onImgClick: (img: Image) => void;
};

const ImageGallery: React.FC<GalleryProps> = ({ images, onImgClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <li className={css.galleryItem} key={img.id}>
          <ImageCard
            imgUrl={img.urls.small}
            imgDescr={img.description}
            onClick={() => onImgClick(img)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
