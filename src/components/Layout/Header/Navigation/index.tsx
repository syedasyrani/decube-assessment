import clsx from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

interface INavItem {
	label: string;
	location: string;
}

type NavigationProps = {
	navItems: INavItem[];
};

const defaultNavigationProps = {
	navItems: [
		{
			label: 'Home',
			location: '/',
		},
		{
			label: 'Movies',
			location: '/movie?sort=popular',
		},
		{
			label: 'TV Shows',
			location: '/tv?sort=popular',
		},
	],
};

const Navigation = ({ navItems }: NavigationProps): ReactElement => {
	return (
		<nav className="hidden md:flex-row md:gap-8 md:flex">
			{navItems.map((item: INavItem) => (
				<NavLink
					to={item.location}
					key={item.label}
					className={({ isActive }) =>
						clsx('hover:scale-110 hover:underline hover:underline-offset-4', {
							'scale-110 underline underline-offset-4': isActive,
						})
					}
				>
					{item.label}
				</NavLink>
			))}
		</nav>
	);
};

Navigation.defaultProps = defaultNavigationProps;

export default Navigation;
