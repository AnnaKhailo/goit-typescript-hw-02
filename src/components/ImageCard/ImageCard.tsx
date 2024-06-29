import css from "./ImageCard.module.css";

type ImageCardProps = {
  imgUrl: string;
  imgDescr: string;
  onClick: () => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ imgUrl, imgDescr, onClick }) => {
  return (
    <div>
      <img
        onClick={onClick}
        className={css.galleryImage}
        src={imgUrl}
        alt={imgDescr}
      />
    </div>
  );
};

export default ImageCard;
