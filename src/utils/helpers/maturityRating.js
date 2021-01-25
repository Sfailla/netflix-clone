export const maturityRating = rating => {
  let contentRating;
  if (rating <= 12) {
    contentRating = 'PG';
  } else if (rating === 15) {
    contentRating = 'PG-13';
  } else if (rating >= 18) {
    contentRating = 'TV-MA';
  }
  return contentRating;
};
