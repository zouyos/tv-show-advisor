import "./global.css";
import style from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "./components/Logo/Logo";
import logo from "./assets/img/logo.png";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendations, setRecommendations] = useState([]);

  async function fetchPopular() {
    try {
      const popular = await TVShowAPI.fetchPopular();
      if (popular.length > 0) {
        setCurrentTVShow(popular[0]);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendations(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function searchTVShow(TVShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(TVShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

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
            <div>
              <Logo
                image={logo}
                title="Watowatch"
                subtitle="Find a TV show you may like"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={style.detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommendations}>
        {recommendations && recommendations.length > 0 && (
          <TVShowList
            recommendations={recommendations}
            onItemClick={setCurrentTVShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
