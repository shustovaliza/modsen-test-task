import { Link } from 'react-router-dom';

import notFoundImage from '@/assets/pictures/notFoundImage.jpeg';
import { artworksActions } from '@/store/slices/artworks.slice';
import { useAppDispatch, useAppSelector } from '@/store/store.types';
import { Artwork } from '@/types/artwork';

import { AddToFavoritesButton } from '../AddToFavoritesButton';
import { ArtworkCardAppearance } from './ArtworkCard.types';
import {
  ArtworkCardWrap,
  ArtworkDescription,
  ArtworkType,
  ImageWrap,
  TitleWrap,
} from './styled';

export const ArtworkCard = ({
  appearance = ArtworkCardAppearance.big,
  artwork,
}: {
  appearance?: ArtworkCardAppearance;
  artwork: Artwork;
}) => {
  const isFavorite = useAppSelector((state) =>
    state.artworks.favoriteArtworks.includes(artwork.id),
  );
  const dispatch = useAppDispatch();
  return (
    <ArtworkCardWrap $appearance={appearance}>
      <ImageWrap $appearance={appearance} href={`/artwork/${artwork.id}`}>
        <img
          alt={`${artwork.title} picture`}
          loading="lazy"
          src={
            artwork.image_id === null
              ? notFoundImage
              : `https://www.artic.edu/iiif/2/${artwork.image_id}/full/${appearance === ArtworkCardAppearance.big ? '387' : '200'},/0/default.jpg`
          }
        ></img>
      </ImageWrap>
      <ArtworkDescription $appearance={appearance}>
        <TitleWrap>
          <div>
            <Link to={`/artwork/${artwork.id}`}>{artwork.title}</Link>
            <span>{artwork.artist_title}</span>
          </div>
          <ArtworkType>{artwork.artwork_type_title}</ArtworkType>
        </TitleWrap>
        <AddToFavoritesButton
          isFavorite={isFavorite}
          onClick={() => {
            dispatch(artworksActions.addArtworkToFavorites(artwork.id));
          }}
        />
      </ArtworkDescription>
    </ArtworkCardWrap>
  );
};
