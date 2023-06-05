import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading from "../assets/loading.gif";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Movie = () => {
  const [tvShows, setTShows] = useState();
  const [page, setPage] = useState(1);

  const prevPage = () => {
    console.log("prev clicked");
    if (page > 1) {
      setPage((Page) => Page - 1);
    }
  };
  const nextPage = () => {
    if (page < 500) {
      setPage((Page) => Page + 1);
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjJmMjVlMGViYTMyMzkxNjZmZDNhOGNlYjUxNWEyMSIsInN1YiI6IjY0MWU3ODNiMjUzZmFiMDA5NjZiZDIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfH_EQ03YfUTlgsJfmTWSYUjt02H06619WCjfPPKGJk",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setTShows(response.results))
      .catch((err) => console.error(err));
  }, [page]);

  console.log(tvShows);

  return (
    <>
      {tvShows ? (
        <div className="info text-white">
          <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-4 px-5 py-10 text-white font-white">
            {tvShows.map((show) => (
              <div className="" key={show.id}>
                <Link to={`/tv/${show.id}`}>
                  <img
                    className="w-full h-[330px]"
                    src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
                  />
                  <div className="flex justify-between">
                    <div>
                      <p>{show.original_name}</p>
                    </div>
                    <div>
                      <p>{show.first_air_date.split("-")[0]}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex pb-8 justify-center items-center gap-5">
            <button onClick={prevPage}>
              <AiOutlineLeft />
            </button>
            <p>{page}</p>
            <button onClick={nextPage}>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[900px] flex justify-center items-center">
          <div>
            <img src={loading} />
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
