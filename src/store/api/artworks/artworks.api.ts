import { baseApi } from '..';

export const artworksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getArtworks: build.query({
      query: () => ({
        url: 'artworks',
      }),
    }),
  }),
});

export const { useGetArtworksQuery } = artworksApi;
