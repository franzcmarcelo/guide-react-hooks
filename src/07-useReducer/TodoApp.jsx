import { useTodos } from '../hooks';
import { TodoAdd, TodoList, TodoListManagement } from './components';

const TodoApp = () => {

  const {
    todos, todosCompleted, todosPending,
    onAddTodo, onDeleteTodo, onToggleTodo, onClearTodos, onCompleteAllTodos, onPendingAllTodos
  } = useTodos();

  return (
    <div className='mb-4'>

      <div className="mt-4 mb-5 d-flex align-items-start justify-content-between" >
        <h3 className='text-decoration-underline'>TODO App</h3>
        <div>
          <h6 className='text-end fst-italic fw-normal'>Pending: {todosPending}</h6>
          <h6 className='text-end fst-italic fw-normal'>Completed: {todosCompleted}</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
          {
            (todos.length > 0) && (
              <TodoListManagement
                onClearTodos={onClearTodos}
                onCompleteAllTodos={onCompleteAllTodos}
                onPendingAllTodos={onPendingAllTodos}
              />
            )
          }
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={onAddTodo} />
        </div>
      </div>

    </div>
  )
}

export default TodoApp;