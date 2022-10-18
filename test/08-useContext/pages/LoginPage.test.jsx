import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage, useUserContext } from '../../../src/08-useContenxt';
import { useForm } from '../../../src/hooks'

// mocking useUserContext hook
jest.mock('../../../src/08-useContenxt/context/UserContext', () => ({
  ...jest.requireActual('../../../src/08-useContenxt/context/UserContext'),
  useUserContext: jest.fn(),
}));
// mocking useForm hook
jest.mock('../../../src/hooks/useForm');

describe('Test in <LoginPage />', () => {

  const mockFormStateEmpty = {
    username: '',
    email: '',
  }

  const mockFormStateFilled = {
    username: 'franz',
    email: 'franz@gmail.com',
  }

  beforeEach(() => {
    jest.clearAllMocks();
  })

  test('should show default component', () => {

    useUserContext.mockReturnValue({});

    useForm.mockReturnValue({
      formState: mockFormStateEmpty,
      onInputChange: jest.fn(),
    });

    render(<LoginPage />)

    const inputUsername = screen.getByPlaceholderText('username...')
    const { value: inputUsernameValue } = inputUsername;
    expect(inputUsernameValue).toBe(mockFormStateEmpty.username);

    const inputEmail = screen.getByPlaceholderText('email...')
    const { value: inputEmailValue } = inputEmail;
    expect(inputEmailValue).toBe(mockFormStateEmpty.email);

  })

  test('should do submit of the form with user data', () => {

    const mockSetUser = jest.fn();
    const mockOnInputChange = jest.fn();

    useUserContext.mockReturnValue({
      setUser: mockSetUser,
    });

    useForm.mockReturnValue({
      formState: mockFormStateFilled,
      onInputChange: mockOnInputChange,
    });

    render(<LoginPage />)

    const form = screen.getByRole('form'); // setting aria-label
    fireEvent.submit(form);

    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledWith(mockFormStateFilled);

  })

})