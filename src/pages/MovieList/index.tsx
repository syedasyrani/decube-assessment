import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { tmdbAPI } from '../../services/themoviedb';
import MovieListView from './MovieListView';

const MovieList = () => {
	document.title = 'Movies';
	const dispatch = useDispatch();

	let [searchParams, setSearchParams] = useSearchParams();

	const getCurrentSort = () => {
		const currentSort = searchParams.get('sort');
		return currentSort ? currentSort : 'popular';
	};

	let [sortBy, setSortBy] = useState(getCurrentSort());

	useEffect(() => {
		localStorage.removeItem('currentPopularPage');
		localStorage.removeItem('currentTopRatedPage');
		localStorage.removeItem('currentNowPlayingPage');
		localStorage.removeItem('currentUpcomingPage');

		sortBy && setSearchParams({ sort: sortBy });

		return () => {
			dispatch(tmdbAPI.util.resetApiState());
		};
	}, [sortBy]);

	return <MovieListView sortBy={sortBy} setSortBy={setSortBy} />;
};

export default MovieList;
