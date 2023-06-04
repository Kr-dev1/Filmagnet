import React from "react";
import { useState, useEffect } from "react";
import loading from "../assets/loading.gif";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMoviedetails] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMoviedetails(response))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      {movieDetails.poster_path ? (
        <div className="info font-electro text-white">
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-start py-7 md:py-[200px] px-10 md:px-[200px] gap-8">
            <div>
              <img
                className="min-h-[300px] min-w-[400px] "
                src={`https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`}
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-2 md:justify-center md:items-start md:py-20">
              <div className="md:pl-3">
                <h1 className="text-sm md:text-2xl">{movieDetails.title}</h1>
              </div>
              <div>
                <p className="pl-0 md:pl-3">{movieDetails.overview}</p>
              </div>
              <div className="flex gap-6 md:pl-3 py-6">
                <p>
                  Rating: {Math.floor(movieDetails.vote_average.toFixed(1))}
                </p>
                <p className="text-center md:text-left md:order-1">{movieDetails.runtime} Minutes</p>
                <p>ReleaseDate: {movieDetails.release_date}</p>
              </div>
              <div className=" bg-gray-900 rounded-3xl max-h-[80px] w-[250px] flex justify-center items-center text-[#B0DC00] border border-[#fff] border-4 hover:bg-white hover:text-gray-900 hover:border-[#B0DA00] duration-500">
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-3"
                >
                  {movieDetails.title ? movieDetails.title : movieDetails.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] flex justify-center items-center">
          <img src={loading} />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
