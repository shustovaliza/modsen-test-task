import { SearchBar } from '@/components/SearchBar';
import { MainPageContainer } from './styled';
import { useSearchParams } from 'react-router-dom';
import { useGetArtworksQuery } from '@/store/api/artworks/artworks.api';
import { getCurrentPage } from '@/utils/utils';
import { Pagination } from '@/components/Pagination';
import { Loader } from '@/components/Loader';
import { FetchError } from '@/components/FetchError';

export const MainPage = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { data, status } = useGetArtworksQuery(
    +(searchParameters.get('page') || 1),
  );

  const page = getCurrentPage(
    searchParameters,
    data?.pagination.total_pages || 0,
  );

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <FetchError />;
  }

  return (
    data && (
      <MainPageContainer>
        <h1>
          Let's Find Some <span>Art</span> Here!
        </h1>
        <SearchBar />
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
      </MainPageContainer>
    )
  );
};
