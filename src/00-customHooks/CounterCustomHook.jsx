import { useCounter } from '../hooks'

const CounterCustomHook = () => {

  const factor = 4;
  const { count, increment, decrement, reset } = useCounter({ initialValue: 17, factor });

  return (
    <div>
      <div className='mb-4'>
        <h3 className='mb-3'>Custom Hook: useCounter</h3>
        <div>
          <span className="badge rounded-pill text-bg-primary fs-6">useState</span>
        </div>
      </div>
      <h4 className='mt-2'>Counter1: {count}</h4>
      <button
        className='btn btn-danger me-3 mt-3'
        onClick={decrement}
      >{`- ${factor}`}
      </button>
      <button
        className='btn btn-success me-3 mt-3'
        onClick={increment}
      >{`+ ${factor}`}
      </button>
      <button
        className='btn btn-primary mt-3'
        onClick={reset}
      >Reset
      </button>
    </div>
  )
}

export default CounterCustomHook