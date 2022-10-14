import { useState } from 'react'

const CounterApp = () => {

  const [{counter1, counter2, counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  return (
    <div>
      <div className='mb-4'>
        <h3 className='mb-3'>Simple Counter</h3>
        <div>
          <span className="badge rounded-pill text-bg-primary fs-6">useState</span>
        </div>
      </div>
      <h4 className='mt-2'>Counter1: {counter1}</h4>
      <h4 className='mt-2'>Counter2: {counter2}</h4>
      <h4 className='mt-2'>Counter3: {counter3}</h4>
      <button
        className='btn btn-danger me-3 mt-3'
        onClick={() => setCounter((state) => ({ ...state, counter1: counter1 - 1 }))}
        >-1
      </button>
      <button
        className='btn btn-success mt-3'
        onClick={() => setCounter((state) => ({ ...state, counter1: counter1 + 1 }))}
        >+1
      </button>
    </div>
  )
}

export default CounterApp