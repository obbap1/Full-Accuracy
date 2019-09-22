// This code is inspired by Nikita Tiwari.

const factorial = num => {
  /*
    @param{Number} num The number we want to calculate the factorial for.
    @return {Number} answer The result of the factorial.
  */
  if (num === 1 || num === 0) return num;
  const fact = factorial(num - 1);
  // return BigInt for only unsafe_integers or large number
  if (!Number.isSafeInteger(fact)) return BigInt(num) * BigInt(fact);
  return num * fact;
};

module.exports = factorial;
