import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import { RouterApp } from '../../src/08-useContenxt';

describe('Test in <RouterApp />', () => {

  test(`should render <HomePage /> for the default Route '/'`, () => {

    render(
      <MemoryRouter >
        <RouterApp />
      </MemoryRouter>
    );

    const titlePage = screen.getByText('HomePage');
    expect(titlePage).toBeTruthy();

  })

  test(`should render <HomePage /> for any unknow Route`, () => {

    render(
      <MemoryRouter initialEntries={['/unknowroute']}>
        <RouterApp />
      </MemoryRouter>
    );

    const titlePage = screen.getByText('HomePage');
    expect(titlePage).toBeTruthy();

  })

  test(`should render <LoginPage /> for '/login' Route`, () => {

    render(
      <MemoryRouter initialEntries={['/login']}>
        <RouterApp />
      </MemoryRouter>
    );

    const titlePage = screen.getByText('LoginPage');
    expect(titlePage).toBeTruthy();

  })

})