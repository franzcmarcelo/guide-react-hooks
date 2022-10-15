import React, { useState } from 'react'
import Counter from './Counter';

const Memorize = () => {

  const [count, setCount] = useState(0);
  const [stateComponentFather, setStateComponentFather] = useState(true);

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3"> Memorize </h3>
        <div>
          <span className="badge rounded-pill text-bg-danger fs-6"> memo </span>
        </div>
      </div>
      <div>
        <h4> Counter:  <Counter count={ count }  /> <sup> memorizeComponent </sup > </h4>
        <button
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        > +1
        </button>
        <h4 className='mt-4'> Component Father: { JSON.stringify(stateComponentFather) } </h4>
        <button
          className="btn btn-outline-primary"
          onClick={() => setStateComponentFather(!stateComponentFather)}
        > Change State Component Father
        </button>
      </div>
    </div>
  )
}

export default Memorize