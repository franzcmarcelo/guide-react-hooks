import { useState } from 'react';

const useCounter = ({
  initialValue = 0,
  factor = 1,
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + factor);
  };

  const decrement = () => {
    if( (count - factor) < 0 ) return;
    setCount(count - factor);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {count, increment, decrement, reset};
};

export default useCounter;