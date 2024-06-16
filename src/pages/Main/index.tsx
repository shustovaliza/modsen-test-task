import { QueryStatus } from '@reduxjs/toolkit/query';
import { useSearchParams } from 'react-router-dom';

import { ArtworkCard } from '@/components/ArtworkCard';
import { ArtworkCardAppearance } from '@/components/ArtworkCard/ArtworkCard.types';
import { FetchError } from '@/components/FetchError';
import { Loader } from '@/components/Loader';
import { Pagination } from '@/components/Pagination';
import { SearchBar } from '@/components/SearchBar';
import { Sorting } from '@/components/Sorting';
import {
  useGetArtworksByIdsQuery,
  useGetArtworksQuery,
} from '@/store/api/artworks/artworks.api';
import { H2Wrap, PageBlock } from '@/styles/sharedStyles';
import { getCurrentPage } from '@/utils/utils';

import {
  ArtworkCardsWrap,
  ArtworksWrapExtra,
  BlocksWrap,
  GalleryBlockWrap,
  MainPageContainer,
  NothingFoundMessage,
  PaginationWrap,
  SearchAndSortingWrap,
} from './styled';

const extraArtworksIds: number[] = [
  184379, 184378, 184377, 184376, 109819, 84241, 80548, 59426, 249208,
];
const maxNumberOfPages = 100;
const artworksPerPage = 3;

export const MainPage = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const { data: artworksResponse, status: getArtworksStatus } =
    useGetArtworksQuery({
      page: searchParameters.get('page') || '1',
      limit: `${artworksPerPage}`,
      query: searchParameters.get('query') || undefined,
      sortField: searchParameters.get('sort') || undefined,
    });
  const { data: extraArtworks, status: getExtraArtworksStatus } =
    useGetArtworksByIdsQuery(extraArtworksIds);

  const page = getCurrentPage(
    searchParameters,
    artworksResponse?.pagination.total_pages || 0,
  );

  const totalNumberOfPages = artworksResponse
    ? artworksResponse.pagination.total_pages >= maxNumberOfPages
      ? maxNumberOfPages
      : artworksResponse?.pagination.total_pages
    : 0;

  if (getExtraArtworksStatus === QueryStatus.pending) {
    return <Loader />;
  }

  if (
    getArtworksStatus === QueryStatus.rejected ||
    getExtraArtworksStatus === QueryStatus.rejected
  ) {
    return <FetchError />;
  }

  return (
    artworksResponse &&
    extraArtworks && (
      <MainPageContainer>
        <h1>
          Let's Find Some <span>Art</span> Here!
        </h1>
        <BlocksWrap>
          <SearchAndSortingWrap>
            <SearchBar
              initialValue={searchParameters.get('query') || ''}
              onSubmit={(values) =>
                setSearchParameters((old) => {
                  if (!values.search) {
                    old.delete('query');
                    old.delete('page');
                  } else {
                    old.set('query', `${values.search}`);
                    old.set('page', '1');
                  }
                  return old;
                })
              }
              onReset={() =>
                setSearchParameters((old) => {
                  old.delete('query');
                  old.delete('page');
                  return old;
                })
              }
            />
            <Sorting
              isChecked={searchParameters.get('sort') ? true : false}
              onChange={() => {
                if (searchParameters.get('sort')) {
                  setSearchParameters((old) => {
                    old.delete('sort');
                    return old;
                  });
                } else {
                  setSearchParameters((old) => {
                    old.set('sort', 'source_updated_at');
                    return old;
                  });
                }
              }}
            />
          </SearchAndSortingWrap>
          <PageBlock>
            <H2Wrap>
              <span>Topics for you</span>
              <h2>Our special gallery</h2>
            </H2Wrap>
            <GalleryBlockWrap>
              {getArtworksStatus === QueryStatus.pending ? (
                <Loader />
              ) : artworksResponse.artworks.length ? (
                <>
                  <ArtworkCardsWrap>
                    {artworksResponse.artworks.map((artwork) => (
                      <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                  </ArtworkCardsWrap>
                  <PaginationWrap>
                    <Pagination
                      currentPage={page}
                      totalNumberOfPages={totalNumberOfPages}
                      onPageChange={(nextPage) =>
                        setSearchParameters((old) => {
                          old.set('page', `${nextPage}`);
                          return old;
                        })
                      }
                    />
                  </PaginationWrap>
                </>
              ) : (
                <NothingFoundMessage>
                  <h2>{'Nothing was found for your request :('}</h2>
                </NothingFoundMessage>
              )}
            </GalleryBlockWrap>
          </PageBlock>
          <PageBlock>
            <H2Wrap>
              <span>Here some more</span>
              <h2>Other works for you</h2>
            </H2Wrap>
            <ArtworksWrapExtra>
              {extraArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  appearance={ArtworkCardAppearance.small}
                />
              ))}
            </ArtworksWrapExtra>
          </PageBlock>
        </BlocksWrap>
      </MainPageContainer>
    )
  );
};
