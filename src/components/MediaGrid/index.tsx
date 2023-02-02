import { IMedia } from '../../types';
import MediaCard from '../MediaCard';

type Props = {
	type: 'movie' | 'tv';
	medias: IMedia[];
};

const MediaGrid = ({ type, medias }: Props) => {
	return (
		<div
			className="grid justify-between gap-2 mb-4"
			style={{ 'gridTemplateColumns': 'repeat(auto-fill, 123.12px)' }}
		>
			{medias &&
				medias.length > 0 &&
				medias.map((media) => (
					<MediaCard key={media.id} type={type} media={media} />
				))}
		</div>
	);
};

export default MediaGrid;
