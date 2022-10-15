import React, { useState, useMemo } from 'react';

const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++)
    console.log('Heavy stuff iteration,', iterations);
  return `${iterations} iterations done`;
}

const MemoHook = () => {

  const [iterations, setIterations] = useState(1000);
  const [stateComponentFather, setStateComponentFather] = useState(false);


  // when stateComponentFather changes, the component is re-rendered
  // and the value of iterations is passed to the heavyStuff function
  // but the value of iterations is the same, so the function is not executed

  const memorizeValue = useMemo(() => heavyStuff(iterations), [iterations]);

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3"> MemoHook </h3>
        <div>
          <span className="badge rounded-pill text-bg-danger fs-6"> useMemo </span>
        </div>
      </div>
      <div>


        <h5> Iterations: <small>{iterations}</small></h5>
        <button
          className="btn btn-primary"
          onClick={() => setIterations(iterations + 1)}
        > +1
        </button>

        <h5 className='mt-4'>{ memorizeValue } <sup> memorizeValue </sup > </h5>

        <h5 className='mt-4'> Component Father: { JSON.stringify(stateComponentFather) } </h5>
        <button
          className="btn btn-outline-primary"
          onClick={() => setStateComponentFather(!stateComponentFather)}
        > Change State Component Father
        </button>
      </div>
    </div>
  )
}

export default MemoHook