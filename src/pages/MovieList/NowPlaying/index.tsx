import { useEffect, useState } from 'react';
import LoadMoreButton from '../../../components/LoadMoreButton';
import MediaGrid from '../../../components/MediaGrid';
import { useGetNowPlayingMoviesQuery } from '../../../services/themoviedb';

const NowPlayingMovieList = () => {
	const currentPageInStorage = localStorage.getItem('currentNowPlayingPage');
	const currentPage = currentPageInStorage ? parseInt(currentPageInStorage) : 1;
	let [page, setPage] = useState(currentPage);

	const { data, error, isLoading } = useGetNowPlayingMoviesQuery(page);
	const movies = data?.results ?? [];

	useEffect(() => {
		localStorage.setItem('currentNowPlayingPage', page.toString());

		return () => {
			localStorage.removeItem('currentNowPlayingPage');
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

export default NowPlayingMovieList;
