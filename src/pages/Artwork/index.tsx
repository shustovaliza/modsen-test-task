import { QueryStatus } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

import { AddToFavoritesButton } from '@/components/AddToFavoritesButton';
import { AddToFavoritesButtonAppearance } from '@/components/AddToFavoritesButton/AddToFavoritesButton.types';
import { FetchError } from '@/components/FetchError';
import { Loader } from '@/components/Loader';
import { useFavoriteArtworks } from '@/hooks/useFavoriteArtworks/useFavoriteArtworks';
import { useGetArtworkQuery } from '@/store/api/artworks/artworks.api';
import { getImageProps } from '@/utils/utils';

import {
  ArtworkContentContainer,
  ArtworkPageContainer,
  ImageWrap,
  MainInfoContainer,
  OverviewInfo,
  OverviewWrap,
} from './styled';

const ArtworkPage = () => {
  const { id } = useParams<'id'>();
  const { data, status } = useGetArtworkQuery(id || '');

  const { isFavorite, addToFavorites } = useFavoriteArtworks(id ? +id : 0);

  if (status === QueryStatus.pending) {
    return <Loader />;
  }

  if (status === QueryStatus.rejected) {
    return <FetchError />;
  }

  return (
    data && (
      <ArtworkPageContainer>
        <ImageWrap>
          <img
            {...getImageProps({
              image_id: data.image_id,
              imageSize: '497',
              title: data.title,
              loading: 'lazy',
            })}
          ></img>
          <AddToFavoritesButton
            onClick={addToFavorites}
            isFavorite={!!isFavorite}
            appearance={AddToFavoritesButtonAppearance.white}
          />
        </ImageWrap>
        <ArtworkContentContainer>
          <MainInfoContainer>
            <h1>{data.title}</h1>
            <div>
              <span>{data.artist_title}</span>
              <span>{data.date_end}</span>
            </div>
          </MainInfoContainer>
          <OverviewWrap>
            <h2>Overview</h2>
            <OverviewInfo>
              <div>
                <span>Artist:</span>
                <span>{data.artist_display}</span>
              </div>
              <div>
                <span>Description:</span>
                <span>{data.medium_display}</span>
              </div>
              <div>
                <span>Dimensions:</span>
                <span>{data.dimensions}</span>
              </div>
              <div>
                <span>Artwork type:</span>
                <span>{data.artwork_type_title}</span>
              </div>
            </OverviewInfo>
          </OverviewWrap>
        </ArtworkContentContainer>
      </ArtworkPageContainer>
    )
  );
};

export default ArtworkPage;
