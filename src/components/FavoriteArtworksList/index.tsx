import { Artwork } from '@/types/artwork';

import { ArtworkCard } from '../ArtworkCard';
import { ArtworkCardAppearance } from '../ArtworkCard/ArtworkCard.types';
import { EmptyList, FavoriteArtworksWrap } from './styled';

type FavoriteArtworksListProps = {
  favoriteArtworksId: number[];
  data: Artwork[];
};

export const FavoriteArtworksList = ({
  data,
  favoriteArtworksId,
}: FavoriteArtworksListProps) => {
  return favoriteArtworksId.length ? (
    <FavoriteArtworksWrap>
      {data.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          appearance={ArtworkCardAppearance.small}
        />
      ))}
    </FavoriteArtworksWrap>
  ) : (
    <EmptyList>
      <h2>There is nothing in your list of favorite artworks yet</h2>
    </EmptyList>
  );
};
