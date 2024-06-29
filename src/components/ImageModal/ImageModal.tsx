import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../../images-api";

Modal.setAppElement("#root");

type ModalProps = {
  isOpen: boolean;
  selectedImage: Image;
  onRequestClose: () => void;
};

const ImageModal: React.FC<ModalProps> = ({
  isOpen,
  selectedImage,
  onRequestClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={selectedImage.description}
      className={css.imageModal}
      overlayClassName={css.overlay}
    >
      <img src={selectedImage.urls.regular} alt={selectedImage.description} />
    </Modal>
  );
};

export default ImageModal;
