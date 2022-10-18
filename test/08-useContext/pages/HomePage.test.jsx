import { render, screen } from '@testing-library/react';
import { UserProvider, HomePage } from '../../../src/08-useContenxt';

describe('Test in <HomePage />', () => {

  const mockUserDefault = {
    username: 'test',
    email: 'test@gmail.com'
  }

  test('should show component without user', () => {

    render(
      <UserProvider>
        <HomePage />
      </UserProvider>
    )

    const noUserAlert = screen.getByText('No user data');

    expect(noUserAlert).toBeTruthy()

  })

  test('should show component with user default', () => {

    render(
      <UserProvider user={mockUserDefault} >
        <HomePage />
      </UserProvider>
    );

    const userName = screen.getByLabelText('username-label'); // set by aria-label
    const userEmail = screen.getByTestId('email-label'); // set by data-test-id

    const {
      textContent: userNameTextContent, // -> 'Username: test'
      // innerHTML, // -> '<b>Username: </b>test'
    } = userName;

    const { textContent: userEmailTextContent } = userEmail;

    expect(userNameTextContent).toEqual(`Username: ${mockUserDefault.username}`);
    expect(userEmailTextContent).toEqual(`email: ${mockUserDefault.email}`);

  })

})