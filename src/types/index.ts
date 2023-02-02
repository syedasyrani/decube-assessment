export type ICountry = {
	iso_3166_1?: string;
	name?: string;
};

export type ILanguage = {
	english_name?: string;
	iso_639_1?: string;
	name?: string;
};

export type IGenre = {
	id?: number;
	name?: string;
};

export type IProductionCompany = {
	description?: string;
	headquarters?: string;
	homepage?: string;
	id?: number;
	logo_path?: string;
	name?: string;
	origin_country?: string;
	parent_company?: IProductionCompany | null;
};

export type ICollection = {
	id?: number;
	name?: string;
	overview?: string;
	poster_path?: string | null;
	backdrop_path?: string | null;
	parts?: ICollectionMovie[];
};

export type ICreatedBy = {
	id?: number;
	credit_id?: string;
	name?: string;
	gender?: number;
	profile_path?: string | null;
};

export type IEpisode = {
	air_date?: string;
	episode_number?: number;
	id?: number;
	name?: string;
	overview?: string;
	production_code?: string;
	season_number?: number;
	still_path?: string | null;
	vote_average?: number;
	vote_count?: number;
};

export type ISeason = {
	air_date?: string;
	episode_count?: number;
	id?: number;
	name?: string;
	overview?: string;
	poster_path?: string | null;
	season_number?: number;
};

export type INetwork = {
	name?: string;
	id?: number;
	logo_path?: string | null;
	origin_country?: string;
};

export type IMedia = IMovie & ITVShow;

export interface IMediaData {
	backdrop_path?: string | null;
	genres?: IGenre[];
	homepage?: string | null;
	id?: number;
	original_language?: string;
	overview?: string | null;
	popularity?: number;
	poster_path?: string | null;
	production_companies?: IProductionCompany[];
	production_countries?: ICountry[];
	spoken_languages?: ILanguage[];
	status?:
		| 'Rumored'
		| 'Planned'
		| 'In Production'
		| 'Post Production'
		| 'Cancelled';
	tagline?: string | null;
	vote_average?: number;
	vote_count?: number;
}

export interface IMovie extends IMediaData {
	adult?: boolean;
	belongs_to_collection?: ICollection | null;
	budget?: number;
	imdb_id?: string | null;
	original_title?: string;
	release_date?: string;
	revenue?: number;
	runtime?: number | null;
	title?: string;
	video?: boolean;
}

export interface ICollectionMovie extends IMovie {
	genre_ids?: number[];
}

export interface ITVShow extends IMediaData {
	created_by?: ICreatedBy[];
	episode_run_time?: number[];
	first_air_date?: string;
	in_production?: boolean;
	languages?: string[];
	last_air_date?: string;
	last_episode_to_air?: IEpisode;
	name?: string;
	next_episode?: IEpisode | null;
	networks?: INetwork[];
	number_of_episodes?: number;
	number_of_seasons?: number;
	origin_country?: string[];
	original_name?: string;
	seasons?: ISeason[];
	type?: string;
}

export interface IListResponse {
	page?: number;
	total_pages?: number;
	total_results?: number;
}

export interface IMovieListResponse extends IListResponse {
	results: IMovie[];
}

export interface ITVShowListResponse extends IListResponse {
	results: ITVShow[];
}
