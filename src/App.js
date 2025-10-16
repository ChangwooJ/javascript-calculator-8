import { Console } from "@woowacourse/mission-utils";

function isNotNumberSeparator(separator) {
  if (/\d/.test(separator)) {
    throw new Error("[ERROR] 숫자는 구분자에 포함될 수 없습니다.");
  }
  return separator;
}

function extractCustomSeparator(userInput) {
  const defaultSeparators = [",", ":"];

  if (userInput.startsWith("//")) {
    const lastSeparatorIndex = userInput.indexOf("\n");

    if (lastSeparatorIndex === -1) {
      throw new Error(
        `[ERROR] 커스텀 구분자 정의 시 '\n'을 이용한 마침 표현을 사용해야 합니다.`
      );
    }

    const customSeparatorArray = userInput.slice(2, lastSeparatorIndex);
    defaultSeparators.push(...customSeparatorArray);

    return defaultSeparators;
  }
}

class App {
  async run() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    const userInput = Console.readLineAsync();

    // 빈 문자열 예외 처리
    if (userInput === "") {
      Console.print("결과 : 0");
      return;
    }
  }
}

export default App;
