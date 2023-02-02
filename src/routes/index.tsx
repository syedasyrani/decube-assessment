import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/Layout';
import { Error404, Home, Movie, MovieList, TVShow, TVShowList } from '../pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error404 />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/movie',
				element: <MovieList />,
			},
			{
				path: '/movie/:movie_id',
				element: <Movie />,
			},
			{
				path: '/tv',
				element: <TVShowList />,
			},
			{
				path: '/tv/:tv_id',
				element: <TVShow />,
			},
		],
	},
]);

const AppRoutes = () => {
	return <RouterProvider router={router} />;
};

export default AppRoutes;
