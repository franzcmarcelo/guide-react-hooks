import {
    CounterCustomHook
} from './00-customHooks'
import { CounterApp } from './01-useState'
function App() {

  return (
    <div className='container d-flex flex-column gap-5'>
      <div>
        <h1 className='text-center'>React Hooks</h1>
        <hr/>
      </div>

      <div className='d-flex flex-column-reverse gap-5'>
        <CounterApp />
        <hr/>
        <CounterCustomHook />
      </div>

    </div>
  )
}

export default App
