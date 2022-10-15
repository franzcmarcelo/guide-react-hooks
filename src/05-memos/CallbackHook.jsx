import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './components';

const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  // Component ShowIncrement should not be re-rendered, because the function increment is the same.
  // We use memo to memorize the function.
  // However, how the function is being redefined in each render of the father component.
  // the function already has a different reference.
  // So, we use useCallback to memorize the function in father component.

  // Problem: useCallback also memorized the parameters of the function, so if the parameters change,
  // the function is not affected.
  // Solution:
  // For set of useState, we can use callback as parameter to recover the previous state.
  const _increment = useCallback(
    () => {
      setCounter((counter) => counter + 1);
    },
    [],
  );
  // For functions that recieve parameter, we can use the callback parameters of the useCallback.
  const increment = useCallback(
    ( factor ) => {
      setCounter((counter) => counter + factor);
    },
    [],
  );

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3"> Callback Hook </h3>
        <div>
          <span className="me-2 badge rounded-pill text-bg-danger fs-6"> useCallback </span>
          <span className="badge rounded-pill text-bg-danger fs-6"> memo </span>
        </div>
      </div>
      <div>
        <h4> Counter: { counter } </h4>
        <ShowIncrement increment={ increment } />
        <p className='mt-3'> memorizeComponent & memorizeCallback </p>
      </div>
    </div>
  )
}

export default CallbackHook