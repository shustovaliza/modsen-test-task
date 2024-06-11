import { Artwork } from '@/types/artwork';
import {
  ArtworkCardWrap,
  ArtworkDescription,
  ArtworkType,
  ImageWrap,
  TitleWrap,
} from './styled';
import { AddToFavoritesButton } from '../AddToFavoritesButon';
import notFoundImage from '@/assets/pictures/notFoundImage.jpeg';

export const ArtworkCard = ({
  appearance = 'big',
  artwork,
}: {
  appearance?: 'big' | 'small';
  artwork: Artwork;
}) => {
  return (
    <ArtworkCardWrap appearance={appearance} href={`/artwork/${artwork.id}`}>
      <ImageWrap appearance={appearance}>
        <img
          alt={`${artwork.title} picture`}
          loading="lazy"
          src={
            artwork.image_id === null
              ? notFoundImage
              : `https://www.artic.edu/iiif/2/${artwork.image_id}/full/${appearance === 'big' ? '387' : '200'},/0/default.jpg`
          }
        ></img>
      </ImageWrap>
      <ArtworkDescription appearance={appearance}>
        <TitleWrap>
          <div>
            <span>{artwork.title}</span>
            <span>{artwork.artist_title}</span>
          </div>
          <ArtworkType>{artwork.artwork_type_title}</ArtworkType>
        </TitleWrap>
        <AddToFavoritesButton onClick={() => {}} />
      </ArtworkDescription>
    </ArtworkCardWrap>
  );
};
