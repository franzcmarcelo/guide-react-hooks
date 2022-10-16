import { useState } from 'react'
import { EnablerCheckbox } from '../components'
import { BreakingBad, FormCustomHook, CounterCustomHook } from './00-customHooks'
import { CounterApp } from './01-useState'
import { SimpleForm } from './02-useEffect'
import { FocusScreen } from './03-useRef'
import { Memorize, MemoHook, CallbackHook, MemorizeFather } from './05-memos'
import { TodoApp } from './07-useReducer'

function App() {

  const [enableOnlyTodoApp, setEnableOnlyTodoApp] = useState(false);

  return (
    <div className='container d-flex flex-column gap-5'>
      <div>
        <h1 className='text-center'>React Hooks</h1>
        <hr />
      </div>

      <div className='d-flex flex-column-reverse gap-5'>
        {
          !enableOnlyTodoApp && (
            <>
              <CounterApp />
              <hr />
              <CounterCustomHook />
              <hr />
              <SimpleForm />
              <hr />
              <FormCustomHook />
              <hr />
              <BreakingBad />
              <hr />
              <FocusScreen />
              <hr />
              <Memorize />
              <hr />
              <MemoHook />
              <hr />
              <CallbackHook />
              <hr />
              <MemorizeFather />
            </>
          )
        }
        <hr />
        <div>
          <EnablerCheckbox enableOnlyTodoApp={enableOnlyTodoApp} setEnableOnlyTodoApp={setEnableOnlyTodoApp} />
          <TodoApp />
        </div>
      </div>
    </div>
  )
}

export default App
