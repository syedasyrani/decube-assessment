import React from 'react';
import { Link } from 'react-router-dom';
import { IMedia } from '../../types';
import Tooltip from '../Tooltip';

type Props = {
	type: 'movie' | 'tv';
	media: IMedia;
};

const MediaCard = ({ type, media }: Props) => {
	return (
		<Link to={`/${type}/${media.id}`}>
			<Tooltip message={media.title ?? media.name}>
				<div className="group w-[123.12px] h-[184.68px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-0 hover:p-1 hover:cursor-pointer">
					<div
						className="h-full w-full bg-center bg-contain"
						style={{
							backgroundImage: media.poster_path
								? `url(https://image.tmdb.org/t/p/w342${media.poster_path})`
								: '',
						}}
					>
						<div className="h-full w-full bg-black/30 flex justify-center items-center group-hover:hidden"></div>
					</div>
				</div>
			</Tooltip>
		</Link>
	);
};

export default MediaCard;
