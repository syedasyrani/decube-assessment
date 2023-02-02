import { format } from 'date-fns';
import { IMovie } from '../../types';

type Props = {
	movie: IMovie;
};

const MovieView = ({ movie }: Props) => {
	return (
		<>
			{movie?.backdrop_path && (
				<div
					className="z-0 absolute top-0 w-full h-screen bg-cover"
					style={{
						backgroundImage: movie.backdrop_path
							? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
							: '',
					}}
				>
					<div className="absolute h-full w-full bg-black/60" />
				</div>
			)}
			<div className="relative z-10 p-4 flex flex-col mt-4">
				<div className="flex flex-row gap-8 items-start justify-start">
					<div className="flex flex-col flex-shrink-0 flex-grow-0 max-w-[342px]">
						<div
							className="w-[342px] h-[513px] bg-center bg-contain bg-no-repeat mb-4 shadow-lg"
							style={{
								backgroundImage: movie.poster_path
									? `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`
									: '',
							}}
						/>
						<div className="flex flex-row flex-wrap gap-2 max-w-full justify-center items-center">
							{movie?.genres &&
								movie.genres.map((genre) => (
									<div
										key={genre.id}
										className="py-1 px-2 rounded-full bg-white text-black dark:bg-black dark:text-white text-sm w-100"
									>
										{genre.name}
									</div>
								))}
						</div>
					</div>

					<div className="flex flex-col flex-1 backdrop-blur-sm shadow-lg p-4 max-w-xl rounded-2xl">
						<h1 className="text-4xl text-white mb-4">{movie.title}</h1>
						<p className="italic mb-8 text-white text-sm">{movie.tagline}</p>
						{movie?.release_date && (
							<p className="mb-2 text-white text-sm">
								Release Date:{' '}
								{format(new Date(movie.release_date), 'do MMMM yyyy')}
							</p>
						)}
						{movie?.runtime && (
							<p className="mb-8 text-white text-sm">
								Movie Runtime: {Math.floor(movie.runtime / 60)} hours{' '}
								{movie.runtime % 60} minutes
							</p>
						)}
						<h2 className="text-2xl text-white mb-2">Overview</h2>
						<h2 className="text-md text-white max-w-xl break-words mb-8">
							{movie.overview}
						</h2>
						{movie?.production_companies && (
							<>
								<h2 className="text-2xl text-white mb-2">
									Production Companies
								</h2>
								<div className="flex flex-row gap-8 rounded">
									{movie.production_companies.map((company) => (
										<div
											key={company.id}
											className="w-[154px] min-h-[100px] max-h-[154px] p-2 flex justify-center items-center bg-center bg-contain bg-no-repeat bg-white/50"
										>
											{company?.logo_path ? (
												<img
													src={`https://image.tmdb.org/t/p/w154${company.logo_path}`}
													alt={`${company.name}`}
												/>
											) : (
												<div className="text-xl">{company.name}</div>
											)}
										</div>
									))}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieView;
