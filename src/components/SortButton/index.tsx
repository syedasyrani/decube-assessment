import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';

import { snakeCaseToTitleCase } from '../../utils';

type Props = {
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

const SortButton = ({ sortBy, setSortBy }: Props) => {
	let [searchParams] = useSearchParams();

	return (
		<button
			type="button"
			onClick={() => setSortBy(sortBy)}
			disabled={searchParams.get('sort') === sortBy}
			className={clsx(
				'rounded-full py-1 px-2 text-sm shadow-md',
				{
					'bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black':
						searchParams.get('sort') !== sortBy,
				},
				{
					'bg-black text-white dark:bg-white dark:text-black':
						searchParams.get('sort') === sortBy,
				}
			)}
		>
			{snakeCaseToTitleCase(sortBy)}
		</button>
	);
};

export default SortButton;
