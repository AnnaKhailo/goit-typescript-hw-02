import { Formik, Form, Field, FormikHelpers } from "formik";
import { HiSearch } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchProps = {
  onSearch: (query: string) => void;
};

type InitialValues = {
  query: string;
};

const SearchBar: React.FC<SearchProps> = ({ onSearch }) => {
  const notify = () => toast.error("Please fill in the search field!");

  const handleSubmit = (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    values.query.trim() === "" && notify();
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.searchForm}>
          <Field
            className={css.searchField}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={css.searchBtn} type="submit">
            <HiSearch className={css.iconSearch} />
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
