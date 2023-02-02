import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie, IMovieListResponse } from '../../types';

export const tmdbAPI = createApi({
	reducerPath: 'tmdbAPI',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_TMDB_API_URL }),
	tagTypes: ['Movie', 'TV'],
	endpoints: (builder) => ({
		// movie endpoints
		getNowPlayingMovies: builder.query({
			query: (page: number) => ({
				url: `movie/now_playing`,
				params: {
					'page': page,
					'api_key': import.meta.env.VITE_TMDB_API_KEY,
				},
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			// Always merge incoming data to the cache entry
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			// Refetch when the page arg changes
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getPopularMovies: builder.query({
			query: (page: number) => ({
				url: `movie/popular`,
				params: {
					'page': page,
					'api_key': import.meta.env.VITE_TMDB_API_KEY,
				},
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getTopRatedMovies: builder.query({
			query: (page: number) => ({
				url: `movie/top_rated`,
				params: {
					'page': page,
					'api_key': import.meta.env.VITE_TMDB_API_KEY,
				},
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getUpcomingMovies: builder.query({
			query: (page: number) => ({
				url: `movie/upcoming`,
				params: {
					'page': page,
					'api_key': import.meta.env.VITE_TMDB_API_KEY,
				},
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getLatestMovies: builder.query<IMovie, string>({
			query: () => ({
				url: `movie/latest`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieDetail: builder.query({
			query: (id: number) => ({
				url: `movie/${id}`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieCredits: builder.query({
			query: (id) => ({
				url: `movie/${id}/credits`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieImages: builder.query({
			query: (id) => ({
				url: `movie/${id}/images`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieRecommendations: builder.query({
			query: (id) => ({
				url: `movie/${id}/recommendations`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieReviews: builder.query({
			query: (id) => ({
				url: `movie/${id}/reviews`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieSimilar: builder.query({
			query: (id) => ({
				url: `movie/${id}/similar`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieVideos: builder.query({
			query: (id) => ({
				url: `movie/${id}/videos`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getMovieWatchProviders: builder.query({
			query: (id) => ({
				url: `movie/${id}/watch/providers`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		// tv show endpoints
		getLatestTVShow: builder.query({
			query: () => ({
				url: `tv/latest`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getNowPlayingTVShow: builder.query({
			query: () => ({
				url: `tv/now_playing`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getPopularTVShow: builder.query({
			query: () => ({
				url: `tv/popular`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTopRatedTVShow: builder.query({
			query: () => ({
				url: `tv/top_rated`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getUpcomingTVShow: builder.query({
			query: () => ({
				url: `tv/upcoming`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowDetail: builder.query({
			query: (id) => ({
				url: `tv/${id}`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowCredits: builder.query({
			query: (id) => ({
				url: `tv/${id}/credits`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowImages: builder.query({
			query: (id) => ({
				url: `tv/${id}/images`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowRecommendations: builder.query({
			query: (id) => ({
				url: `tv/${id}/recommendations`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowReviews: builder.query({
			query: (id) => ({
				url: `tv/${id}/reviews`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowSimilar: builder.query({
			query: (id) => ({
				url: `tv/${id}/similar`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowVideos: builder.query({
			query: (id) => ({
				url: `tv/${id}/videos`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
		getTVShowWatchProviders: builder.query({
			query: (id) => ({
				url: `tv/${id}/watch/providers`,
				params: { 'api_key': import.meta.env.VITE_TMDB_API_KEY },
			}),
		}),
	}),
});

export const {
	useGetLatestMoviesQuery,
	useGetNowPlayingMoviesQuery,
	useGetPopularMoviesQuery,
	useGetTopRatedMoviesQuery,
	useGetUpcomingMoviesQuery,
	useGetMovieDetailQuery,
	useGetMovieCreditsQuery,
	useGetMovieImagesQuery,
	useGetMovieRecommendationsQuery,
	useGetMovieReviewsQuery,
	useGetMovieSimilarQuery,
	useGetMovieVideosQuery,
	useGetMovieWatchProvidersQuery,
	useGetLatestTVShowQuery,
	useGetNowPlayingTVShowQuery,
	useGetPopularTVShowQuery,
	useGetTopRatedTVShowQuery,
	useGetUpcomingTVShowQuery,
	useGetTVShowDetailQuery,
	useGetTVShowCreditsQuery,
	useGetTVShowImagesQuery,
	useGetTVShowRecommendationsQuery,
	useGetTVShowReviewsQuery,
	useGetTVShowSimilarQuery,
	useGetTVShowVideosQuery,
	useGetTVShowWatchProvidersQuery,
} = tmdbAPI;
