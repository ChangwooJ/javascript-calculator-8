import { isNotNumberSeparator } from "./validators.js";

export function extractCustomSeparator(userInput) {
  const defaultSeparators = [",", ":"];
  let inputBody = userInput;

  if (userInput.startsWith("//")) {
    const lastSeparatorIndex = userInput.indexOf("\\n");

    // \n 마침 표현이 누락된 경우
    if (lastSeparatorIndex === -1) {
      throw new Error(
        "[ERROR] 커스텀 구분자 정의 시 '\\n'을 이용한 마침 표현을 사용해야 합니다."
      );
    }

    const customSeparatorArray = userInput
      .slice(2, lastSeparatorIndex)
      .split("")
      .filter((c) => c.trim() !== "");

    defaultSeparators.push(...customSeparatorArray);

    inputBody = userInput.slice(lastSeparatorIndex + 2);
  }

  const validSeparators = isNotNumberSeparator(defaultSeparators);

  return { separators: validSeparators, inputBody };
}

export function splitBySeparators(separators, inputBody) {
  let result = inputBody;

  separators.forEach((separator) => {
    result = result.split(separator).join(" ");
  });

  return result.split(" ").map((s) => s.trim());
}
