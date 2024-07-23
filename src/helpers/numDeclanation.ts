// Отзыв: 1 - "", 2-4 - "а", 0,5-20,30... - "ов" 

export const numDecl = (num: number, baseString: string, variants: [string, string, string]): string => {
  //----------variants[2/ 0/ 2/ 2/ 2/ 2]
  const resultCases = [2, 0, 2, 2, 2, 2]
  const result = baseString.concat(variants[(num % 100 > 4 && num % 100 < 20) ? 2 : resultCases[(num % 10 < 5 ? num % 10 : 5)]])
  return result;
}
