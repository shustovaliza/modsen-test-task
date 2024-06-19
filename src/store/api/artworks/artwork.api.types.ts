import { Artwork, ArtworkShort } from '@/types/artwork';

export type GetArtworksResponse = {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: ArtworkShort[];
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
};

export type GetArtworkResponse = {
  data: Artwork;
  info: GetArtworksResponse['info'];
  config: GetArtworksResponse['config'];
};

export type GetArtworksPayload = {
  page: string;
  limit: string;
  query?: string;
  sortField?: string;
};

export type GetArtworksTransformedResponse = {
  artworks: GetArtworksResponse['data'];
  pagination: GetArtworksResponse['pagination'];
};
