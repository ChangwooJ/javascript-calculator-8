import { isNumber } from "./validators.js";

export function sumElements(elements) {
  const numbers = elements.map((element) => isNumber(element));
  const result = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  return `결과 : ${result}`;
}
