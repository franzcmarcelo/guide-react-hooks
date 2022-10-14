import { useFetch, useCounter } from '../hooks';
import { CardBlockquote, Title } from './components';

const BreakingBad = () => {

  const { count, increment } = useCounter({ initialValue: 1 });

  const url = `https://www.breakingbadapi.com/api/quotes/${count}`;

  const { data, isLoading } = useFetch(url);

  if (isLoading) return (
    <div>
      <Title />
      <h4 className='text-center'>Loading...</h4>
    </div>
  );

  const { quote_id, author, quote, series } = !!data && data[0];
  const dataBlockquote = { quote_id, author, quote, series };

  const onNextQuote = () => increment();

  return (
    <div>
      <Title />
      <CardBlockquote dataBlockquote={dataBlockquote} onNextQuote={onNextQuote} />
    </div>
  )
}

export default BreakingBad