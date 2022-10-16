import { useReducer, useCallback, useEffect } from 'react';
import { todoReducer } from '../07-useReducer/utils';

const initialState = (localStorage.getItem('todos') && (JSON.parse(localStorage.getItem('todos')).length > 0))
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const onAddTodo = useCallback((newTodo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo
    });
  }, []);

  const onDeleteTodo = useCallback((todoId) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todoId
    });
  }, []);

  const onToggleTodo = useCallback((todoId) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todoId
    });
  }, []);

  const onClearTodos = useCallback(() => {
    dispatch({
      type: 'CLEAR_TODOS'
    });
  }, [])

  const onCompleteAllTodos = useCallback(() => {
    dispatch({
      type: 'COMPLETE_ALL_TODOS'
    });
  }, [])
  
  const onPendingAllTodos = useCallback(() => {
    dispatch({
      type: 'PENDING_ALL_TODOS'
    });
  }, [])

  const todosCompleted = todos.filter(todo => todo.done).length;
  const todosPending = todos.length - todosCompleted;

  return {
    todos,
    todosCompleted,
    todosPending,
    onAddTodo,
    onDeleteTodo,
    onToggleTodo,
    onClearTodos,
    onCompleteAllTodos,
    onPendingAllTodos
  }
}

export default useTodos;