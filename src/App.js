import { getInput, printMessage } from './console';

class App {
  async run() {
    const userInput = await getInput();

    // 빈 문자열 예외 처리
    if (userInput === '') {
      printMessage('결과: 0');
      return;
    }

    const { separators, inputBody } = extractCustomSeparator(userInput);
    const filteredBody = splitBySeparators(separators, inputBody);
    const result = sumElements(filteredBody);

    printMessage(result);
  }
}

export default App;
