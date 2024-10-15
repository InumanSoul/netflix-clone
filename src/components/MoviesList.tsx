import { Link } from "react-router-dom";
import type { Movie } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

export default function MoviesList({ movies }: { movies: Movie[] }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 1200, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.length !== 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
