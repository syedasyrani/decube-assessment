import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tmdbAPI } from '../services/themoviedb';

export const store = configureStore({
	reducer: {
		[tmdbAPI.reducerPath]: tmdbAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tmdbAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
