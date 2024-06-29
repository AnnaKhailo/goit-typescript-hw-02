import css from "./Loader.module.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        visible={true}
        height="60"
        width="60"
        color="#264fbe"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
