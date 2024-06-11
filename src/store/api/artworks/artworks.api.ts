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
    getArtworksByIds: build.query<GetArtworksResponse, number[]>({
      query: (ids) => {
        const parameters = new URLSearchParams();
        parameters.append('ids', String(ids));
        return {
          url: `artworks`,
          params: parameters,
        };
      },
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworksByIdsQuery } = artworksApi;
