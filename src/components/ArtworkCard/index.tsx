import { Link } from 'react-router-dom';

import { useFavoriteArtworks } from '@/hooks/useFavoriteArtworks/useFavoriteArtworks';
import { getImageProps } from '@/utils/utils';

import { AddToFavoritesButton } from '../AddToFavoritesButton';
import { ArtworkCardAppearance, ArtworkCardProps } from './ArtworkCard.types';
import {
  ArtworkCardWrap,
  ArtworkDescription,
  ArtworkType,
  ImageWrap,
  TitleWrap,
} from './styled';

export const ArtworkCard = ({
  appearance = ArtworkCardAppearance.big,
  artwork: { id, title, image_id, artist_title, artwork_type_title },
}: ArtworkCardProps) => {
  const { isFavorite, addToFavorites } = useFavoriteArtworks(id);

  return (
    <ArtworkCardWrap $appearance={appearance}>
      <ImageWrap $appearance={appearance} href={`/artwork/${id}`}>
        <img
          {...getImageProps({
            image_id: image_id,
            imageSize: appearance === ArtworkCardAppearance.big ? '387' : '200',
            title: title,
            loading: 'lazy',
          })}
        ></img>
      </ImageWrap>
      <ArtworkDescription $appearance={appearance}>
        <TitleWrap>
          <div>
            <Link to={`/artwork/${id}`}>{title}</Link>
            <span>{artist_title}</span>
          </div>
          <ArtworkType>{artwork_type_title}</ArtworkType>
        </TitleWrap>
        <AddToFavoritesButton
          isFavorite={isFavorite}
          onClick={addToFavorites}
        />
      </ArtworkDescription>
    </ArtworkCardWrap>
  );
};
