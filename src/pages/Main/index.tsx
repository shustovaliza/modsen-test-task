import { SearchBar } from '@/components/SearchBar';
import { MainPageContainer } from './styled';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <h1>
        Let's Find Some <span>Art</span> Here!
      </h1>
      <SearchBar />
    </MainPageContainer>
  );
};
