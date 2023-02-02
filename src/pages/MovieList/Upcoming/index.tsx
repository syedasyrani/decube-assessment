import { useEffect, useState } from 'react';
import LoadMoreButton from '../../../components/LoadMoreButton';
import MediaGrid from '../../../components/MediaGrid';
import { useGetUpcomingMoviesQuery } from '../../../services/themoviedb';

const UpcomingMovieList = () => {
	const currentPageInStorage = localStorage.getItem('currentUpcomingPage');
	const currentPage = currentPageInStorage ? parseInt(currentPageInStorage) : 1;
	let [page, setPage] = useState(currentPage);

	const { data, error, isLoading } = useGetUpcomingMoviesQuery(page);
	const movies = data?.results ?? [];

	useEffect(() => {
		localStorage.setItem('currentUpcomingPage', page.toString());

		return () => {
			localStorage.removeItem('currentUpcomingPage');
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

export default UpcomingMovieList;
