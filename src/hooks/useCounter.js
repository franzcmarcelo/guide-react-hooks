import { useState } from 'react';

const useCounter = (data = {
  initialValue: 0,
  factor: 1,
}) => {
  const { initialValue, factor } = data;
  const [count, setCount] = useState(initialValue);

  const increment = (customFactor) => {
    setCount(curVal => curVal + (customFactor ?? factor));
  };

  const decrement = (customFactor) => {
    if ((count - (customFactor ?? factor)) < 0) return;
    setCount(curVal => curVal - (customFactor ?? factor));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;