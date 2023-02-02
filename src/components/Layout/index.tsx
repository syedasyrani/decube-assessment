import { ReactElement, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const Layout = (): ReactElement => {
	return (
		<div className="flex flex-col min-h-screen transition-colors dark:bg-[#121212] dark:text-gray-200">
			<Header />
			<main className="flex-grow">
				<Outlet />
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
