import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks';

describe('Test in useCounter', () => {

  const COUNT_DEFAULT_VALUE = 0;
  const COUNT_CUSTOM_VALUE = 100;
  const FACTOR_CUSTOM_VALUE = 5;

  const counterDataMock = {
    initialValue: COUNT_CUSTOM_VALUE,
    factor: FACTOR_CUSTOM_VALUE,
  };

  test('should return default values', () => {
    const {
      result: { current: { count } }
    } = renderHook(() => useCounter({}));

    expect(count).toBe(COUNT_DEFAULT_VALUE);
  });

  test('should return COUNT_CUSTOM_VALUE as count', () => {
    const {
      result: { current: { count, increment, decrement } }
    } = renderHook(() => useCounter({...counterDataMock}));

    expect(count).toBe(COUNT_CUSTOM_VALUE);
    expect(increment).toBeInstanceOf(Function);
    expect(decrement).toEqual(expect.any(Function))
  });

  test('should return COUNT_CUSTOM_VALUE incremented by FACTOR_CUSTOM_VALUE twice', () => {
    const {
      result, result: { current: { count, increment } }
    } = renderHook(() => useCounter({...counterDataMock}));

    act(() => {
      increment();
      increment();
    });

    // expect(count).toBe(COUNT_CUSTOM_VALUE + FACTOR_CUSTOM_VALUE);
    // evaliuating the variable count dosnt work since, as it of primitive type, it is not updated
    // so we need to evaluate the result of the hook, to get the updated value
    // if the variable count was an object, it would be updated, since its value is a reference
    expect(result.current.count).toBe(COUNT_CUSTOM_VALUE + (FACTOR_CUSTOM_VALUE * 2));
  });

})