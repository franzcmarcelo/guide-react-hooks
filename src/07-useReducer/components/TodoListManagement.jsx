import { memo } from 'react';

const TodoListManagement = memo(({onClearTodos, onCompleteAllTodos, onPendingAllTodos}) => {
  // console.log('TodoListManagement: Render');
  return (
    <div className='d-flex gap-2 mt-2' data-testid='todo-list-management'>
      <button className='btn btn-outline-danger mt-3' onClick={onClearTodos}>
        Clear All
      </button>
      <button className='btn btn-outline-primary mt-3' onClick={onCompleteAllTodos}>
        Complete All
      </button>
      <button className='btn btn-outline-warning mt-3' onClick={onPendingAllTodos}>
        Pending All
      </button>
    </div>
  )
});

export default TodoListManagement