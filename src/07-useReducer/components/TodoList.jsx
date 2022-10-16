import { memo } from 'react';
import TodoItem from './TodoItem';

const TodoList = memo(({ todos, onDeleteTodo, onToggleTodo }) => {

  return (
    (todos.length > 0) ? (
      <div className="list-group">
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }
      </div>
    ) : (
      <div className="alert alert-info">No TODOs</div>
    )
  )
});

export default TodoList