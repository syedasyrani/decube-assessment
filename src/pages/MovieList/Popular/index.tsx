import { useEffect, useState } from 'react';
import LoadMoreButton from '../../../components/LoadMoreButton';
import MediaGrid from '../../../components/MediaGrid';
import { useGetPopularMoviesQuery } from '../../../services/themoviedb';

const PopularMovieList = () => {
	const currentPageInStorage = localStorage.getItem('currentPopularPage');
	const currentPage = currentPageInStorage ? parseInt(currentPageInStorage) : 1;
	let [page, setPage] = useState(currentPage);

	const { data, error, isLoading } = useGetPopularMoviesQuery(page);
	const movies = data?.results ?? [];

	useEffect(() => {
		localStorage.setItem('currentPopularPage', page.toString());

		return () => {
			localStorage.removeItem('currentPopularPage');
		};
	}, [page]);

	return error ? (
		<>Oh no, there was an error</>
	) : isLoading ? (
		<>Loading...</>
	) : data ? (
		<>
			<MediaGrid type="movie" medias={movies} />
			<LoadMoreButton page={page} setPage={setPage} />
		</>
	) : null;
};

export default PopularMovieList;
