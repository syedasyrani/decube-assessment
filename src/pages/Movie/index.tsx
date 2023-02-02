import { useParams } from 'react-router-dom';
import { useGetMovieDetailQuery } from '../../services/themoviedb';
import MovieView from './MovieView';

const Movie = () => {
	let { movie_id } = useParams();

	const id = movie_id ? parseInt(movie_id) : 0;

	const { data } = useGetMovieDetailQuery(id);

	const movie = data ?? {};

	return <MovieView movie={movie} />;
};

export default Movie;
