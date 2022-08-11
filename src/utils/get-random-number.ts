export const getRandomNumberUpTo = (maxNumber: number) => {
  return Math.floor(Math.random() * maxNumber);
} 

export const getRandomNumberBetween = (minNumber: number, maxNumber: number) => {
  return Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
}