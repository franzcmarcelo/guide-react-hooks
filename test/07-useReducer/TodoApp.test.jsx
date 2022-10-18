import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/07-useReducer';
import { useTodos } from '../../src/hooks';

jest.mock('../../src/hooks/useTodos');

describe('Test in <TodoApp />', () => {

  const mockInitialUseTodos = {
    todos: [],
    todosCompleted: 0,
    todosPending: 0,
    onAddTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    onClearTodos: jest.fn(),
    onCompleteAllTodos: jest.fn(),
    onPendingAllTodos: jest.fn()
  }

  const mockTodos = [
    { id: 1, desc: 'Learn React', done: false },
    { id: 2, desc: 'Learn Mongo', done: true },
  ];

  const todosCompleted = mockTodos.filter(todo => todo.done).length;
  const todosPending = mockTodos.length - todosCompleted;

  const mockDataUseTodos = {
    ...mockInitialUseTodos,
    todos: mockTodos,
    todosCompleted,
    todosPending
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should default component, without todos', () => {

    useTodos.mockReturnValue(mockInitialUseTodos);

    render(<TodoApp />);

    const completedText = screen.getByText(`Completed: ${mockInitialUseTodos.todosCompleted}`);
    const pendingText = screen.getByText(`Pending: ${mockInitialUseTodos.todosPending}`);
    const todoListBtnsManagement = screen.queryByTestId('todo-list-management');

    expect(completedText).toBeTruthy();
    expect(pendingText).toBeTruthy();
    expect(todoListBtnsManagement).toBeNull();

  })

  test('Should show todos list', () => {

    useTodos.mockReturnValue(mockDataUseTodos);

    render(<TodoApp />);

    screen.debug();
    const completedText = screen.getByText(`Completed: ${mockDataUseTodos.todosCompleted}`);
    const pendingText = screen.getByText(`Pending: ${mockDataUseTodos.todosPending}`);
    const todoListBtnsManagement = screen.getByTestId('todo-list-management');

    expect(completedText).toBeTruthy();
    expect(pendingText).toBeTruthy();
    expect(todoListBtnsManagement).toBeTruthy();

  });

})