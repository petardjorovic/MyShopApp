export const handleTotalAmount = (cartArray) => {
  const initialValue = 0;
  const sumWithInitial = cartArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.cartTotal,
    initialValue
  );
  return sumWithInitial;
};
