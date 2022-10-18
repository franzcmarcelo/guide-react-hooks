import { memo } from 'react';

const TodoItem = memo(({ todo, onDeleteTodo, onToggleTodo }) => {

  // console.log('TodoItem Component Rendered', todo.desc);

  const { id, desc, done } = todo;

  const onToggleCheck = () => onToggleTodo(id);

  const onDelete = () => onDeleteTodo(id);

  return (
    <label className="list-group-item d-flex align-items-center">
      <input
        className="form-check-input me-1"
        type="checkbox"
        checked={done}
        onChange={onToggleCheck}
      />
      <span className={`ms-1 fst-italic ${done ? 'text-decoration-line-through fw-light' : ''}`}>{desc}</span>
      <button
        className="btn btn-sm btn-outline-danger ms-auto"
        onClick={onDelete}
      >X</button>
    </label>
  )
});

export default TodoItem;