import { SearchBar } from '@/components/SearchBar';
import {
  ArtworkCardsWrap,
  ArtworksWrapExtra,
  BlocksWrap,
  GalleryBlockWrap,
  H2Wrap,
  MainPageBlock,
  MainPageContainer,
  PaginationWrap,
} from './styled';
import { useSearchParams } from 'react-router-dom';
import {
  useGetArtworksByIdsQuery,
  useGetArtworksQuery,
} from '@/store/api/artworks/artworks.api';
import { getCurrentPage } from '@/utils/utils';
import { Pagination } from '@/components/Pagination';
import { Loader } from '@/components/Loader';
import { FetchError } from '@/components/FetchError';
import { ArtworkCard } from '@/components/ArtworkCard';

export const MainPage = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const { data: artworksResonse, status: getArtworksStatus } =
    useGetArtworksQuery(+(searchParameters.get('page') || 1));
  const { data: extraArtworksResonse, status: getExtraArtworksStatus } =
    useGetArtworksByIdsQuery([
      184379, 184378, 184377, 184376, 109819, 84241, 80548, 59426, 249208,
    ]);

  const page = getCurrentPage(
    searchParameters,
    artworksResonse?.pagination.total_pages || 0,
  );

  if (getArtworksStatus === 'pending' || getExtraArtworksStatus === 'pending') {
    return <Loader />;
  }

  if (
    getArtworksStatus === 'rejected' ||
    getExtraArtworksStatus === 'rejected'
  ) {
    return <FetchError />;
  }

  return (
    artworksResonse &&
    extraArtworksResonse && (
      <MainPageContainer>
        <h1>
          Let's Find Some <span>Art</span> Here!
        </h1>
        <BlocksWrap>
          <SearchBar />
          <MainPageBlock>
            <H2Wrap>
              <span>Topics for you</span>
              <h2>Our special gallery</h2>
            </H2Wrap>
            <GalleryBlockWrap>
              <ArtworkCardsWrap>
                {artworksResonse.data.map((artwork) => (
                  <ArtworkCard key={artwork.id} artwork={artwork} />
                ))}
              </ArtworkCardsWrap>
              <PaginationWrap>
                <Pagination
                  pages={10}
                  currentPage={page}
                  totalNumberOfPages={100}
                  onPageChange={(nextPage) =>
                    setSearchParameters((old) => {
                      old.set('page', `${nextPage}`);

                      return old;
                    })
                  }
                />
              </PaginationWrap>
            </GalleryBlockWrap>
          </MainPageBlock>
          <MainPageBlock>
            <H2Wrap>
              <span>Here some more</span>
              <h2>Other works for you</h2>
            </H2Wrap>
            <ArtworksWrapExtra>
              {extraArtworksResonse.data.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  appearance="small"
                />
              ))}
            </ArtworksWrapExtra>
          </MainPageBlock>
        </BlocksWrap>
      </MainPageContainer>
    )
  );
};
