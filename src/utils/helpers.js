export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
