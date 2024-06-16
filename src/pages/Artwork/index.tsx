import { useParams } from 'react-router-dom';

import notFoundImage from '@/assets/pictures/notFoundImage.jpeg';
import { AddToFavoritesButton } from '@/components/AddToFavoritesButon';
import { FetchError } from '@/components/FetchError';
import { Loader } from '@/components/Loader';
import { useGetArtworkQuery } from '@/store/api/artworks/artworks.api';
import { artworksActions } from '@/store/slices/artworks.slice';
import { useAppDispatch, useAppSelector } from '@/store/store.types';

import {
  ArtworkContentContainer,
  ArtworkPageContainer,
  ImageWrap,
  MainInfoContainer,
  OverviewInfo,
  OverviewWrap,
} from './styled';

export const ArtworkPage = () => {
  const { id } = useParams<'id'>();
  const { data, status } = useGetArtworkQuery(id || '');

  const isFavorite = useAppSelector(
    (state) => id && state.artworks.favoriteArtworks.includes(+id),
  );
  const dispatch = useAppDispatch();

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <FetchError />;
  }

  return (
    data && (
      <ArtworkPageContainer>
        <ImageWrap>
          <img
            alt={`${data.data.title} picture`}
            loading="lazy"
            src={
              data.data.image_id === null
                ? notFoundImage
                : `https://www.artic.edu/iiif/2/${data.data.image_id}/full/497,/0/default.jpg`
            }
          ></img>
          <AddToFavoritesButton
            onClick={() =>
              dispatch(artworksActions.addArtworkToFavorites(data.data.id))
            }
            isFavorite={!!isFavorite}
            appearance="white"
          />
        </ImageWrap>
        <ArtworkContentContainer>
          <MainInfoContainer>
            <h1>{data.data.title}</h1>
            <div>
              <span>{data.data.artist_title}</span>
              <span>{data.data.date_end}</span>
            </div>
          </MainInfoContainer>
          <OverviewWrap>
            <h2>Overview</h2>
            <OverviewInfo>
              <div>
                <span>Artist:</span>
                <span>{data.data.artist_display}</span>
              </div>
              <div>
                <span>Description:</span>
                <span>{data.data.medium_display}</span>
              </div>
              <div>
                <span>Dimensions:</span>
                <span>{data.data.dimensions}</span>
              </div>
              <div>
                <span>Artwork type:</span>
                <span>{data.data.artwork_type_title}</span>
              </div>
            </OverviewInfo>
          </OverviewWrap>
        </ArtworkContentContainer>
      </ArtworkPageContainer>
    )
  );
};
