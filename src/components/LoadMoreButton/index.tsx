import React from 'react';

type Props = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMoreButton = ({ page, setPage }: Props) => {
	return (
		<button
			onClick={() => setPage(page + 1)}
			className="bg-white text-black dark:bg-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-2 px-4 w-full text-center rounded-full shadow-md"
		>
			Load More
		</button>
	);
};

export default LoadMoreButton;
