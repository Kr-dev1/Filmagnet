import { useState } from "react";
import Home from "./Routes/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Movie from "./Routes/Movie";
import Tv from "./Routes/Tv";
import MovieDetails from "./Routes/MovieDetails";
import TvDetails from "./Routes/TvDetails";
import Search from "./Routes/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="tv" element={<Tv />} />
        <Route path="tv/:id" element={<TvDetails />} />
        <Route path="query/:value/" element={<Search />} />
      </Route>
    </Routes>
  );
}
