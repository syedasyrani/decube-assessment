import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import DarkModeSwitch from './DarkModeSwitch';
import Navigation from './Navigation';

const Header = () => {
	return (
		<div className="sticky top-0 flex items-center justify-between p-4 bg-white dark:bg-black z-50 shadow-lg transition-colors">
			<Link to="/" className="text-4xl font-bold">
				{/* MovieDB */}📺🍿🔥
			</Link>
			<div className="flex flex-row items-center gap-8">
				<Navigation />
				<div className="flex flex-row items-center gap-4">
					<DarkModeSwitch />
					{/* <button className="p-2 transition-colors bg-white rounded-full dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
						<HiMenuAlt3 />
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Header;
