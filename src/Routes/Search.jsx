import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loading from "../assets/loading.gif";
import Noimage from "../assets/placeholder.svg";
import { AiFillStar } from "react-icons/ai";

const Search = () => {
  const { value } = useParams();
  const [result, setResult] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjJmMjVlMGViYTMyMzkxNjZmZDNhOGNlYjUxNWEyMSIsInN1YiI6IjY0MWU3ODNiMjUzZmFiMDA5NjZiZDIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfH_EQ03YfUTlgsJfmTWSYUjt02H06619WCjfPPKGJk`,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setResult(
          response.results.filter(
            (item) => item.media_type === "movie" || item.media_type === "tv"
          )
        )
      )
      .catch((err) => console.error(err));
  }, [value]);
  return (
    <>
      {result.length > 1 ? (
        <div className="info min-h-[75vh] flex flex-col items-center gap-8 py-8 text-white text-ellipsis">
          {result.map((results) => (
            <div
              key={results.id}
              className="border-b-2 drop-shadow-md rounded-2xl"
            >
              <Link to={`/${results.media_type}/${results.id}`}>
                <div className="flex items-center gap-10  min-w-[80vw] w-[80vw] last-of-type:border-b-0 py-5 ">
                  <div>
                    <img
                      className="min-h-[141px] min-w-[94px] h-[141px] w-[94px]"
                      src={
                        results.poster_path
                          ? `https://image.tmdb.org/t/p/w200/${results.poster_path}`
                          : Noimage
                      }
                    />
                  </div>
                  <div className="w-full flex justify-between">
                    <div>
                      <p>{results.title ? results.title : results.name}</p>
                      <p className="capitalize py-3">{results.media_type}</p>
                    </div>
                    <div>
                      <p>
                        {results.release_date
                          ? results.release_date
                          : results.first_air_date}
                      </p>
                      <div className="flex items-center justify-end text-right">
                        <AiFillStar />
                        <p className="text-right">{results.vote_average}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="info h-[900px] flex justify-center items-center text-white font-electric">
          <p>No results found for {value}</p>
        </div>
      )}
    </>
  );
};

export default Search;
