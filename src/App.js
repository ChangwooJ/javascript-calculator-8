import { Console } from "@woowacourse/mission-utils";

function isNotNumberSeparator(separators) {
  if (separators.some((sep) => /\d/.test(sep))) {
    throw new Error("[ERROR] 숫자는 구분자에 포함될 수 없습니다.");
  }

  return separators;
}

function extractCustomSeparator(userInput) {
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

function splitBySeparators(separators, inputBody) {
  let result = inputBody;

  separators.forEach((sep) => {
    result = result.split(sep).join(" ");
  });

  return result.split(" ").map((s) => s.trim());
}

function printMessage(message) {
  Console.print(message);
}

async function getInput() {
  return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
}

class App {
  async run() {
    const userInput = await getInput();

    // 빈 문자열 예외 처리
    if (userInput === "") {
      printMessage("결과 : 0");
      return;
    }

    const { separators, inputBody } = extractCustomSeparator(userInput);
    const filteredBody = splitBySeparators(separators, inputBody);
  }
}

export default App;
