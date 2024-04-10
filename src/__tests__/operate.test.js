import operate from '../components/logic/operate';

describe('Operate Tests', () => {
  test('It should add two numbers', () => {
    const number1 = '10';
    const number2 = '20';
    const operation = '+';
    const expected = '30';
    const result = operate(number1, number2, operation);
    expect(result).toEqual(expected);
  });

  test('It should subtract two numbers', () => {
    const number1 = '20';
    const number2 = '10';
    const operation = '-';

    const expected = '10';
    const result = operate(number1, number2, operation);
    expect(result).toEqual(expected);
  });

  test('It should multiply two numbers', () => {
    const number1 = '10';
    const number2 = '20';
    const operation = 'x';

    const expected = '200';
    const result = operate(number1, number2, operation);
    expect(result).toEqual(expected);
  });

  test('It should divide two numbers', () => {
    const number1 = '20';
    const number2 = '10';
    const operation = '÷';

    const expected = '2';
    const result = operate(number1, number2, operation);
    expect(result).toEqual(expected);
  });
});
