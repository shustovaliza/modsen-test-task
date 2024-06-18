import { apiEndpoints } from '@/constants/api';
import { Artwork } from '@/types/artwork';

import { baseApi } from '..';
import {
  GetArtworkResponse,
  GetArtworksPayload,
  GetArtworksResponse,
  GetArtworksTransformedResponse,
} from './artwork.api.types';

export const artworksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getArtworks: build.query<
      GetArtworksTransformedResponse,
      GetArtworksPayload
    >({
      query: (props) => {
        const parameters = new URLSearchParams();
        parameters.append(
          'fields',
          'id,title,image_id,artist_title,artwork_type_title',
        );
        parameters.append('page', `${props.page}`);
        parameters.append('limit', `${props.limit}`);

        if (props.query) {
          parameters.append('query[match][title]', `${props.query}`);
        }

        if (props.sortField) {
          parameters.append(`sort[${props.sortField}][order]`, `desc`);
        }

        return {
          url: `${apiEndpoints.artworks}/search`,
          params: parameters,
        };
      },
      transformResponse: (response: GetArtworksResponse) => {
        return {
          artworks: response.data,
          pagination: response.pagination,
        };
      },
    }),
    getArtworksByIds: build.query<Artwork[], number[]>({
      query: (ids) => {
        const parameters = new URLSearchParams();
        parameters.append('ids', String(ids));
        parameters.append(
          'fields',
          'id,title,image_id,artist_title,artwork_type_title',
        );
        return {
          url: `${apiEndpoints.artworks}`,
          params: parameters,
        };
      },
      transformResponse: (response: GetArtworksResponse) => {
        return response.data;
      },
    }),
    getArtwork: build.query<Artwork, string>({
      query: (id) => ({
        url: `${apiEndpoints.artworks}/${id}`,
      }),
      transformResponse: (response: GetArtworkResponse) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetArtworksQuery,
  useGetArtworksByIdsQuery,
  useGetArtworkQuery,
} = artworksApi;
