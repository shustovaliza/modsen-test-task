import {
  ErrorBoundaryContainer,
  ErrorContentWrap,
  ResetButton,
} from './styled';

type ErrorBoundaryFallbackProps = {
  resetErrorBoundary: () => void;
};

export const ErrorBoundaryFallback = ({
  resetErrorBoundary,
}: ErrorBoundaryFallbackProps) => {
  return (
    <ErrorBoundaryContainer>
      <ErrorContentWrap>
        <h1>Oops, something went wrong!</h1>
        <ResetButton onClick={resetErrorBoundary}>Try again</ResetButton>
      </ErrorContentWrap>
    </ErrorBoundaryContainer>
  );
};
