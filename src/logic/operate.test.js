import operate from './operate';

describe('Tests for operations', () => {
  test('2 + 3 should return 5', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });
  test('2 - 3 should return -1', () => {
    expect(operate('2', '3', '-')).toBe('-1');
  });
  test('2 x 3 should return 6', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });
  test('6 ÷ 3 should return 2', () => {
    expect(operate('6', '3', '÷')).toBe('2');
  });
  test('6 ÷ 0 should return Can\'t divide by 0.', () => {
    expect(operate('6', '0', '÷')).toBe('Can\'t divide by 0.');
  });
  test('6 % 3 should return 0', () => {
    expect(operate('6', '3', '%')).toBe('0');
  });
});
