import MemorizeChild from './MemorizeChild'
import { useState, useCallback } from 'react';

const MemorizeFather = () => {

  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);
  const [stateComponentFather, setStateComponentFather] = useState(true);

  const increment = useCallback(
    (factor) => {
      setValue((value) => value + factor)
    },
    [],
  );

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3"> MemorizeFather </h3>
        <div>
          <span className="badge rounded-pill text-bg-danger fs-6"> useMemo </span>
        </div>
      </div>
      <div>
        <h4 className='mb-4'> Total: {value} </h4>
        {
          numbers.map(factor => (
            <MemorizeChild
              key={factor}
              factor={factor}
              increment={increment}
            />
          ))
        }

      <h5 className='mt-4'> State component Father: { JSON.stringify(stateComponentFather) } </h5>
      <button
        className="btn btn-outline-primary"
        onClick={() => setStateComponentFather(!stateComponentFather)}
      > Change State Component Father
      </button>

      </div>
    </div>
  )
};

export default MemorizeFather;
