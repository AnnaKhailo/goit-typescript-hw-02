import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.error}>
      <p>Oops! There was an error! Try again!</p>
    </div>
  );
};

export default ErrorMessage;
