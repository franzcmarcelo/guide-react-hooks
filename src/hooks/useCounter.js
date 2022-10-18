import { useState } from 'react';

const useCounter = ({
  initialValue = 0,
  factor = 1,
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = (e) => {
    setCount(curVal => curVal + factor);
  };

  const decrement = (e) => {
    if ((count - factor) < 0) return;
    setCount(curVal => curVal - factor);
  };

  const reset = (e) => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;