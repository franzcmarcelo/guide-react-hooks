import { render, screen, fireEvent } from '@testing-library/react';
import { BreakingBad } from '../../../src/00-customHooks';
import { useFetch, useCounter } from '../../../src/hooks';

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter');

describe('Test in <BreakingBad />', () => {

  const mockReturnValueUseFetch = [{
    quote_id: 1,
    author: 'Walter White',
    quote: 'I am the one who knocks!',
    series: 'Breaking Bad'
  }];

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    count: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show default component', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null
    });

    render(<BreakingBad />);

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeTruthy();

  })

  test('should show quote', () => {

    useFetch.mockReturnValue({
      data: [...mockReturnValueUseFetch],
      isLoading: false,
      error: null
    });

    render(<BreakingBad />);

    const { quote_id, author, quote, series } = mockReturnValueUseFetch[0];

    const quoteTitleText = screen.getByText(`Quote ${quote_id}`);
    const quoteText = screen.getByText(quote);
    const authorText = screen.getByText(author);
    const seriesText = screen.getByText(series);
    const btnNextQuote = screen.getByRole('button', { name: 'Next Quote' });

    expect(quoteTitleText).toBeTruthy();
    expect(quoteText).toBeTruthy();
    expect(authorText).toBeTruthy();
    expect(seriesText).toBeTruthy();
    expect(btnNextQuote).toBeTruthy();

  })

  test('should get next quote, call incremet', () => {

    useFetch.mockReturnValue({
      data: [...mockReturnValueUseFetch],
      isLoading: false,
      error: null
    });

    render(<BreakingBad />);

    const btnNextQuote = screen.getByRole('button', { name: 'Next Quote' });

    fireEvent.click(btnNextQuote);

    expect(mockIncrement).toHaveBeenCalled();

  })
})