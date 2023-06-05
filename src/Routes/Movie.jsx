import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loading from "../assets/loading.gif";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Movie = () => {
  const [movies, setMovies] = useState();
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
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, [page]);

  console.log(movies);

  return (
    <>
      {movies ? (
        <div className="info text-white">
          <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-2 gap-4 px-5 py-10 text-white font-white">
            {movies.map((movie) => (
              <div className="" key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  />
                  <div className="flex justify-between">
                    <div>
                      <p>{movie.title}</p>
                    </div>
                    <div>
                      <p>{movie.release_date.split("-")[0]}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5">
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
