import style from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export default function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={style.container}>
      <img
        className={style.image}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt="Recommendation"
      />
      <div className={style.title}>{tvShow.name}</div>
    </div>
  );
}
