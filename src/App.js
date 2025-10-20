import { sumElements } from './model/calculator.js';
import {
  extractCustomSeparator,
  splitBySeparators,
} from './model/separators.js';
import { getInput, printMessage } from './view/console.js';

class App {
  async run() {
    const userInput = await this.getUserInput();
    const result = this.calculate(userInput);
    this.printResult(result);
  }

  async getUserInput() {
    return await getInput();
  }

  calculate(input) {
    // 빈 문자열 예외처리
    if (input === '') return '결과 : 0';

    const { separators, inputBody } = extractCustomSeparator(input);
    const filteredBody = splitBySeparators(separators, inputBody);
    return sumElements(filteredBody);
  }

  printResult(result) {
    printMessage(result);
  }
}

export default App;
