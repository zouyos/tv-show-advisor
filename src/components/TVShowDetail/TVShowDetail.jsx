import FiveStarRating from "../FiveStarRating/FiveStarRating";
import style from "./style.module.css";

export default function TVShowDetail({ tvShow }) {
  const rating = Math.round((tvShow.vote_average / 2) * 100) / 100;
  return (
    <div>
      <div className={style.title} data-testid="tv-show-name">
        {tvShow.name}
      </div>
      <div className={style.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={style.rating}>{rating}/5</div>
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}
