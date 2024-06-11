import { H2Wrap, PageBlock } from '@/styles/sharedStyles';
import { FavoriteArtworksWrap, FavoritesPageContainer } from './styled';
import FavoritesIcon from '@/assets/icons/bookmark.svg?react';
import { useGetArtworksByIdsQuery } from '@/store/api/artworks/artworks.api';
import { useAppSelector } from '@/store/store.types';
import { Loader } from '@/components/Loader';
import { FetchError } from '@/components/FetchError';
import { ArtworkCard } from '@/components/ArtworkCard';

export const FavoritesPage = () => {
  const favoriteArtworksId = useAppSelector(
    (state) => state.artworks.favoriteArtworks,
  );

  const { data, status } = useGetArtworksByIdsQuery(favoriteArtworksId);

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <FetchError />;
  }

  return (
    data && (
      <FavoritesPageContainer>
        <h1>
          Here Are Your
          <div>
            <FavoritesIcon />
            Favorites
          </div>
        </h1>
        <PageBlock>
          <H2Wrap>
            <span>Saved by you</span>
            <h2>Your favorites list</h2>
          </H2Wrap>
          <FavoriteArtworksWrap>
            {data.data.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                appearance="small"
              />
            ))}
          </FavoriteArtworksWrap>
        </PageBlock>
      </FavoritesPageContainer>
    )
  );
};
