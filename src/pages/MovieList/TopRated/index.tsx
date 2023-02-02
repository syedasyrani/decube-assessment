import { useEffect, useState } from 'react';
import LoadMoreButton from '../../../components/LoadMoreButton';
import MediaGrid from '../../../components/MediaGrid';
import { useGetTopRatedMoviesQuery } from '../../../services/themoviedb';

const TopRatedMovieList = () => {
	const currentPageInStorage = localStorage.getItem('currentTopRatedPage');
	const currentPage = currentPageInStorage ? parseInt(currentPageInStorage) : 1;
	let [page, setPage] = useState(currentPage);

	const { data, error, isLoading } = useGetTopRatedMoviesQuery(page);
	const movies = data?.results ?? [];

	useEffect(() => {
		localStorage.setItem('currentTopRatedPage', page.toString());

		return () => {
			localStorage.removeItem('currentTopRatedPage');
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

export default TopRatedMovieList;
