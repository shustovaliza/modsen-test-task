import { SearchBar } from '@/components/SearchBar';
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
import { H2Wrap, PageBlock } from '@/styles/sharedStyles';
import { Sorting } from '@/components/Sorting';

export const MainPage = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const { data: artworksResonse, status: getArtworksStatus } =
    useGetArtworksQuery({
      page: searchParameters.get('page') || '1',
      query: searchParameters.get('query') || undefined,
      sortField: searchParameters.get('sort') || undefined,
    });
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
              {artworksResonse.data.length ? (
                <>
                  <ArtworkCardsWrap>
                    {artworksResonse.data.map((artwork) => (
                      <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                  </ArtworkCardsWrap>
                  <PaginationWrap>
                    <Pagination
                      pages={10}
                      currentPage={page}
                      totalNumberOfPages={
                        artworksResonse.pagination.total_pages >= 100
                          ? 100
                          : artworksResonse.pagination.total_pages
                      }
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
              {extraArtworksResonse.data.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  appearance="small"
                />
              ))}
            </ArtworksWrapExtra>
          </PageBlock>
        </BlocksWrap>
      </MainPageContainer>
    )
  );
};
