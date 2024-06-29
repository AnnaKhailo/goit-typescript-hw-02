import css from "./LoadMoreBtn.module.css";

type LoadMore = {
  onLoadMore: () => void;
};

const LoadMoreBtn: React.FC<LoadMore> = ({ onLoadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
