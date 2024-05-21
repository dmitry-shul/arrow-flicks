export const validateRatingInputs = (filters) => {
  let errorMassage = ""

  if(filters.ratingFrom !== "" && filters.ratingTo !== "" && +filters.ratingFrom > +filters.ratingTo) {
    errorMassage = '"From" rating must be less than "To" rating';
  }

  if(filters.ratingFrom < 0 || filters.ratingFrom > 10 || filters.ratingTo < 0 || filters.ratingTo > 10) {
    errorMassage = "Available values from 0 to 10";
  }

  if(filters.ratingFrom?.includes(",") || filters.ratingFrom?.includes(".") || filters.ratingTo?.includes(",") || filters.ratingTo?.includes(",")) {
    errorMassage = 'Only integers available';
  }

  return errorMassage;
}