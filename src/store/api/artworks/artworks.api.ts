import { baseApi } from '..';
import {
  GetArtworkResponse,
  GetArtworksPayload,
  GetArtworksResponse,
} from './artwork.api.types';

export const artworksApi = baseApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getArtworks: build.query<GetArtworksResponse, GetArtworksPayload>({
      query: (props) => {
        const parameters = new URLSearchParams();
        parameters.append(
          'fields',
          'id,title,image_id,artist_title,artwork_type_title',
        );
        parameters.append('page', `${props.page}`);
        parameters.append('limit', '3');

        if (props.query) {
          parameters.append('query[match][title]', `${props.query}`);
        }

        if (props.sortField) {
          parameters.append(`sort[${props.sortField}][order]`, `desc`);
        }

        return {
          url: `artworks/search`,
          params: parameters,
        };
      },
    }),
    getArtworksByIds: build.query<GetArtworksResponse, number[]>({
      query: (ids) => {
        const parameters = new URLSearchParams();
        parameters.append('ids', String(ids));
        parameters.append(
          'fields',
          'id,title,image_id,artist_title,artwork_type_title',
        );
        return {
          url: `artworks`,
          params: parameters,
        };
      },
    }),
    getArtwork: build.query<GetArtworkResponse, string>({
      query: (id) => ({
        url: `artworks/${id}`,
      }),
    }),
  }),
});

export const {
  useGetArtworksQuery,
  useGetArtworksByIdsQuery,
  useGetArtworkQuery,
} = artworksApi;
