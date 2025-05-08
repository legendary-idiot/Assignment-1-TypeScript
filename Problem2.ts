type MovieItem = {
  title: string;
  rating: number;
};

function filterByRating(items: MovieItem[]): MovieItem[] {
  return items.filter((item: MovieItem) => item.rating >= 4);
}
