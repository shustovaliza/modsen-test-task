export type GetCurrentPageProps = {
  searchParameters: URLSearchParams;
  totalPages: number;
};

export type GetImageProps = {
  image_id: string | null;
  imageSize: string;
  title: string;
};

export type GetTotalNumberOfPagesProps = {
  totalNumberOfPages: number | undefined;
  maxNumberOfPages: number;
};
