import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print('덧셈할 문자열을 입력해 주세요.');
    const userInput = Console.readLineAsync();

    // 빈 문자열 예외 처리
    if (userInput === '') {
      Console.print('결과 : 0');
      return;
    }
  }
}

export default App;
