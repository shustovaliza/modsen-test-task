import { Artwork } from '@/types/artwork';

import { ArtworkCard } from '../ArtworkCard';
import { Pagination } from '../Pagination';
import {
  ArtworkCardsWrap,
  NothingFoundMessage,
  PaginationWrap,
} from './styled';

type ArtworkCardsListProps = {
  artworks: Artwork[];
  currentPage: number;
  totalNumberOfPages: number;
  onPageChange: (nextPage: number) => void;
};

export const ArtworkCardsList = ({
  artworks,
  currentPage,
  totalNumberOfPages,
  onPageChange,
}: ArtworkCardsListProps) => {
  return artworks.length ? (
    <>
      <ArtworkCardsWrap>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </ArtworkCardsWrap>
      <PaginationWrap>
        <Pagination
          currentPage={currentPage}
          totalNumberOfPages={totalNumberOfPages}
          onPageChange={onPageChange}
        />
      </PaginationWrap>
    </>
  ) : (
    <NothingFoundMessage>
      <h2>{'Nothing was found for your request :('}</h2>
    </NothingFoundMessage>
  );
};
