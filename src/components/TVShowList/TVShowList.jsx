import TVShowListItem from "../TVShowListItem/TVShowListItem";
import style from "./style.module.css";

export default function TVShowList({ recommendations, onItemClick }) {
  return (
    <>
      <div className={style.title}>You may also like:</div>
      <div className={style.list}>
        {recommendations.map((tvShow) => {
          return (
            <span key={tvShow.id} className={style.list_item}>
              <TVShowListItem tvShow={tvShow} onClick={onItemClick} />
            </span>
          );
        })}
      </div>
    </>
  );
}
