import React, { useEffect, useState } from "react";
import loading from "../assets/loading.gif";
import { useParams } from "react-router-dom";

const TvDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [tv, setTv] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjJmMjVlMGViYTMyMzkxNjZmZDNhOGNlYjUxNWEyMSIsInN1YiI6IjY0MWU3ODNiMjUzZmFiMDA5NjZiZDIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZfH_EQ03YfUTlgsJfmTWSYUjt02H06619WCjfPPKGJk",
      },
    };

    fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setTv(response))
      .catch((err) => console.error(err));
  }, [id]);
  console.log(tv);
  return (
    <>
      {tv ? (
        <div className="info font-electro text-white">
          <div className="flex flex-col md:flex-row justify-center items-center md:justify-normal md:items-start py-7 md:py-[200px] px-10 md:px-[200px] gap-8">
            <div>
              <img
                className="md:h-[600px] md:w-[900px]"
                src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-2 md:justify-center md:items-start md:py-20">
              <div className="md:pl-3">
                <h1 className="text-xl font-bold md:text-2xl">{tv.name}</h1>
              </div>
              <div>
                <p className="pl-0 md:pl-3">{tv.overview}</p>
              </div>
              <div className="flex gap-6 md:pl-3 py-6">
                <p>Rating: {Math.floor(tv.vote_average.toFixed(1))}</p>
                <p className="text-center md:text-left md:order-1">
                  Number of seasons: {tv.number_of_seasons}
                </p>
                <p>ReleaseDate: {tv.first_air_date}</p>
                <p>Number of Episodes: {tv.number_of_episodes}</p>
              </div>
              <div className=" bg-gray-900 rounded-3xl flex justify-center items-center text-[#B0DC00] border border-[#fff] border-4 hover:bg-white hover:text-gray-900 hover:border-[#B0DA00] duration-500">
                <a
                  href={tv.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-3"
                >
                  {tv.title ? tv.title : tv.name}
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

export default TvDetails;
