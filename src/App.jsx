import {
    BreakingBad,
    FormCustomHook,
    CounterCustomHook
} from './00-customHooks'
import { CounterApp } from './01-useState'
import { SimpleForm } from './02-useEffect'
import { FocusScreen } from './03-useRef'

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
        <hr/>
        <SimpleForm />
        <hr/>
        <FormCustomHook />
        <hr/>
        <BreakingBad />
        <hr/>
        <FocusScreen />
      </div>

    </div>
  )
}

export default App
