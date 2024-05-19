import style from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={style.icon} />
      <input
        type="search"
        placeholder="Search a TV show"
        className={style.input}
        onKeyUp={submit}
      />
    </>
  );
}
