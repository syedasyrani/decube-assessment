import SortButton from '../../components/SortButton';

import NowPlayingMovieList from './NowPlaying';
import PopularMovieList from './Popular';
import TopRatedMovieList from './TopRated';
import UpcomingMovieList from './Upcoming';

type Props = {
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

const MovieListView = ({ sortBy, setSortBy }: Props) => {
	return (
		<div className="p-4">
			<div className="flex flex-col">
				<div className="flex flex-row gap-2 flex-wrap mb-4">
					<SortButton setSortBy={setSortBy} sortBy="popular" />
					<SortButton setSortBy={setSortBy} sortBy="top_rated" />
					<SortButton setSortBy={setSortBy} sortBy="now_playing" />
					<SortButton setSortBy={setSortBy} sortBy="upcoming" />
				</div>
				{sortBy === 'top_rated' ? (
					<TopRatedMovieList />
				) : sortBy === 'now_playing' ? (
					<NowPlayingMovieList />
				) : sortBy === 'upcoming' ? (
					<UpcomingMovieList />
				) : (
					<PopularMovieList />
				)}
			</div>
		</div>
	);
};

export default MovieListView;
