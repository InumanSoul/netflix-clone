import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { MovieDetail } from '../../types';

export default function MovieDetails() {
	const { id } = useParams<{ id: string }>();
	const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b82da365ecaa984f4f1426b0c6afddbc`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setMovieDetail(res);
			});
	}, []);

	return (
		<main>
			<section
				className='detail-poster'
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}>
				<div className='detail__content'>
					<h1>{movieDetail?.title}</h1>
					<p>{movieDetail?.tagline}</p>
					<span>
						{movieDetail?.release_date}
					</span>
					<span>
						{movieDetail?.runtime} min
					</span>
					<p>
						{movieDetail?.overview}
					</p>
          <div className='genres-list'>
            {movieDetail?.genres.map((genre) => (
              <span key={genre.id} className='badge'>{genre.name}</span>
            ))}
          </div>
					<button className='btn-white'>
						Play now
					</button>
				</div>
			</section>
			<div className='page'>
				<section>
					<h2>Similar movies</h2>
				</section>
			</div>
		</main>
	);
}
