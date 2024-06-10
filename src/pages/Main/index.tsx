import { SearchBar } from '@/components/SearchBar';
import { MainPageContainer } from './styled';
import { useSearchParams } from 'react-router-dom';
import { useGetArtworksQuery } from '@/store/api/artworks/artworks.api';
import { getCurrentPage } from '@/utils/utils';
import { Pagination } from '@/components/Pagination';

export const MainPage = () => {
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { data } = useGetArtworksQuery(+(searchParameters.get('page') || 1));

  const page = getCurrentPage(
    searchParameters,
    data?.pagination.total_pages || 0,
  );

  console.log(data);
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
