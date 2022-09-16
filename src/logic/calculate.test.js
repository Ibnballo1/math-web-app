import calculate from './calculate';

describe('Testing for calculate function', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  test('should return null if button name is AC', () => {
    const buttonName = 'AC';

    expect(calculate(obj, buttonName)).toStrictEqual(obj);
  });
  test('should return empty obj if button name is 0', () => {
    const buttonName = '0';

    if (buttonName === '0' && obj.next === '0') {
      expect(calculate(obj, buttonName)).toStrictEqual({});
    }
  });
  test('should return empty obj if button name is 0', () => {
    const buttonName = '0';

    if (obj.operation) {
      expect(calculate(obj, buttonName)).toBe({ ...obj, next: buttonName });
    }
  });
});
