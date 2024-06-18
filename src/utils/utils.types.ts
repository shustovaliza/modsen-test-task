export type GetCurrentPageProps = {
  searchParameters: URLSearchParams;
  totalPages: number;
};

export type GetImageProps = {
  image_id: string | null;
  imageSize: string;
  title: string;
};
