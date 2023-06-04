import { useState, useEffect } from "react";
import React from "react";
import loading from "../assets/loading.gif";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer  ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setTrending(response.results))
      .catch((err) => console.error(err));
  }, []);

  let best = trending.slice(0, 1)[0];
  return (
    <>
      {trending.length > 1 ? (
        <>
          <div
            className="h-[700px] bg-cover bg-center bg-no-repeatrepear flex justify-center items-start flex-col px-[45px]"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${best?.backdrop_path})`,
            }}
          >
            <p className=" capitalize gap tracking-widest text-2xl font-french text-[#B0DC00]">
              filmagnet
            </p>
            <p className="capitalize text-4xl">
              unlimited <span className="text-[#B0DC00]">entertainment,</span>
            </p>
            <p className="capitalize text-4xl">movies & tvs shows</p>
            <div className="flex gap-10 items-center py-4 font-imprima">
              <div className="h-[22px] w-[48px] flex bg-white rounded-md justify-center items-center text-xs">
                <p className="capitalize">{best?.media_type}</p>
              </div>
              <div className="flex items-center">
                <p>
                  <FaRegCalendarAlt className="text-[#B0DC00]" />
                </p>
                <p>{best?.release_date.split("-")[0]}</p>
              </div>
            </div>
            <Link to={`${best?.media_type}/${best?.id}`}>
              <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 px-4 py-2 bg-white rounded-3xl flex justify-center items-center text-white border border-[#B0DC00] border-4">
                {best.original_title ? best?.original_title : best?.original_name}
              </div>
            </Link>
          </div>
          <div className="info">
            <h2 className="text-white font-electro px-16 md:px-26 pt-7 text-3xl">
              Trending
            </h2>
            <div className=" flex flex-wrap justify-center md:justify-normal gap-5 md:px-[100px] py-10 text-white">
              {trending.splice(1, trending.length - 2).map((movie) => (
                <div className="max-w-[300px]" key={movie.id}>
                  <div className="max-w-[190px]">
                    <Link to={`${movie.media_type}/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      />
                      <div className="mb-[-10px] flex justify-between">
                        <p className="capitalize">{movie.media_type}</p>
                        <p className="flex items-center">
                          <AiFillStar /> {movie.vote_average.toFixed(1)}
                        </p>
                      </div>
                      <div className="flex justify-between text-sm pt-3">
                        <p className="text-s">
                          {movie.title ? movie.title : movie.name}
                        </p>
                      </div>
                      <br />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="h-[900px] flex justify-center items-center">
          <img src={loading} />
        </div>
      )}
    </>
  );
};

export default Home;
