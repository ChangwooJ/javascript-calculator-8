export function isNotNumberSeparator(separators) {
  if (separators.some((sep) => /\d/.test(sep))) {
    throw new Error('[ERROR] 숫자는 구분자에 포함될 수 없습니다.');
  }

  return separators;
}

export function isNumber(element) {
  const number = Number(element);

  if (isNaN(number)) {
    throw new Error(`[ERROR] '${element}'는 숫자가 아닙니다.`);
  }
  if (number < 0) {
    throw new Error('[ERROR] 음수는 입력할 수 없습니다.');
  }

  return number;
}
