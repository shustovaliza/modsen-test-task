import { ArtworkShort } from '@/types/artwork';

export enum ArtworkCardAppearance {
  big = 'big',
  small = 'small',
}

export type ArtworkCardProps = {
  appearance?: ArtworkCardAppearance;
  artwork: ArtworkShort;
};
