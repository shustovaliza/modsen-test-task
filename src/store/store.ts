import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api';
import { artworksSlice } from './slices/artworks.slice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [artworksSlice.name]: artworksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(baseApi.middleware),
  devTools: import.meta.env.DEV,
});
