import "./global.css";
import style from "./style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopular() {
    const popular = await TVShowAPI.fetchPopular();
    if (popular.length > 0) {
      setCurrentTVShow(popular[0]);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  console.log(currentTVShow);

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <input type="search" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div className={style.detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommendations}>Recommendations</div>
    </div>
  );
}

export default App;
