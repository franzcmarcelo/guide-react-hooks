import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('Test in useForm', () => {

  const NAME_INPUT = 'name';
  const NAME_INPUT_VALUE_INIT = 'Franz';
  const NAME_INPUT_VALUE_CHANGED = 'Joe';
  const EMAIL_INPUT = 'email';
  const EMAIL_INPUT_VALUE_INIT = 'franz@gmail.com';
  const EMAIL_INPUT_VALUE_CHANGED = 'joe@gmail.com'

  const initialFormMock = {
    [NAME_INPUT]: NAME_INPUT_VALUE_INIT,
    [EMAIL_INPUT]: EMAIL_INPUT_VALUE_INIT
  }

  test('should return initialForm data', () => {
    const { result } = renderHook(() => useForm({ ...initialFormMock }));

    expect(result.current).toEqual({
      formState: { ...initialFormMock },
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });

  })

  test('should change name of formState', () => {
    const { result } = renderHook(() => useForm({ ...initialFormMock }));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: NAME_INPUT,
          value: NAME_INPUT_VALUE_CHANGED
        }
      });
    });

    expect(result.current.formState[NAME_INPUT]).toEqual(NAME_INPUT_VALUE_CHANGED);
  })

  test('should change email and reset form', () => {
    const { result } = renderHook(() => useForm({ ...initialFormMock }));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({
        target: {
          name: EMAIL_INPUT,
          value: EMAIL_INPUT_VALUE_CHANGED
        }
      });
    })

    expect(result.current.formState[EMAIL_INPUT]).toEqual(EMAIL_INPUT_VALUE_CHANGED);

    act(() => {
      onResetForm();
    })

    expect(result.current.formState[EMAIL_INPUT]).toEqual(EMAIL_INPUT_VALUE_INIT);

  })

})