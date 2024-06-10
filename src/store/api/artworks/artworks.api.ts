import { baseApi } from '..';
import { GetArtworksResponse } from './artwork.api.types';

export const artworksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getArtworks: build.query<GetArtworksResponse, number>({
      query: (page) => {
        return {
          url: `artworks`,
          params: {
            page: page,
            limit: 3,
          },
        };
      },
    }),
  }),
});

export const { useGetArtworksQuery } = artworksApi;
