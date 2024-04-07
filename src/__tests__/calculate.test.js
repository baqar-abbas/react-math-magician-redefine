import calculate from '../components/logic/calculate';

describe('Calculate Tests', () => {
  test('It should clear the values when click on AC', () => {
    const data = {
      total: '10',
      next: '20',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(data, buttonName);
    expect(result).toEqual(expected);
  });

  test('It should append a number after the operation', () => {
    const data = {
      total: '5',
      next: '1',
      operation: '+',
    };
    const buttonName = '1';
    const expected = {
      total: '5',
      next: '11',
      operation: '+',
    };
    const result = calculate(data, buttonName);
    expect(result).toEqual(expected);
  });

  test('It should calculate when clicking the equal sign', () => {
    const data = {
      total: '5',
      next: '1',
      operation: '+',
    };
    const buttonName = '=';
    const expected = {
      total: '6',
      next: null,
      operation: null,
    };
    const result = calculate(data, buttonName);
    expect(result).toEqual(expected);
  });
});
