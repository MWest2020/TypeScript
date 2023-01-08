export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

// lmfao bit too autistic to avoid parseInt in code
export const stringToNumber = (string: string): number => {
  return parseInt(string);
};
