import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from '../../src/07-useReducer/components';

describe('Test in <TodoItem />', () => {

  const mockTodo = {
    id: 1,
    desc: 'Learn React',
    done: false
  };
  const mockDeleteTodo = jest.fn();
  const mockToggleTodo = jest.fn();

  const props = {
    todo: mockTodo,
    onDeleteTodo: mockDeleteTodo,
    onToggleTodo: mockToggleTodo
  }

  const classToDone = 'text-decoration-line-through fw-light';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should default component', () => {

    render( <TodoItem {...props} /> );

    const input = screen.getByRole('checkbox');
    const { checked } = input;
    const descText = screen.getByText(mockTodo.desc);
    const deleteButton = screen.getByRole('button');

    expect(checked).toEqual(mockTodo.done);
    expect(descText).toBeTruthy();
    if (mockTodo.done) expect(descText.className).toContain(classToDone);
    else expect(descText.className).not.toContain(classToDone);
    expect(deleteButton).toBeTruthy();

  });

  test('should call onToggleTodo', () => {

    render( <TodoItem {...props} /> );

    const input = screen.getByRole('checkbox');
    fireEvent.click(input);

    expect(mockToggleTodo).toHaveBeenCalledTimes(1);
    expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo.id);

  });

  test('should call onDeleteTodo', () => {

    render( <TodoItem {...props} /> );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(mockDeleteTodo).toHaveBeenCalledTimes(1);
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo.id);

  });

})