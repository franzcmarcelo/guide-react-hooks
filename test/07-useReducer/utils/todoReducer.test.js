import { todoReducer } from '../../../src/07-useReducer/utils';

describe('Test in todoReducer', () => {

  const mockInitialState = [
    {
      id: 1,
      desc: 'Learn React',
      done: false
    },
    {
      id: 2,
      desc: 'Learn Mongo',
      done: true
    }
  ];

  const mockNewTodo = {
    id: 3,
    desc: 'Learn Redux',
    done: false
  };

  // toBe does match by reference, type and content
  // toEqual does match by content
  // toContain does match by content

  test('should return the default state', () => {

    const state = todoReducer(mockInitialState, {});

    expect(state).toBe(mockInitialState);
    // expect(state).toBe([...mockInitialState]); // this fails
    expect(state).toEqual(mockInitialState);
    expect(state).toEqual([...mockInitialState]); // this passe

  });

  test('should add a todo', () => {

    const actionAdd = {
      type: 'ADD_TODO',
      payload: mockNewTodo
    }

    const state = todoReducer(mockInitialState, actionAdd);

    expect(state).toContain(mockNewTodo);
    expect(state.length).toEqual(mockInitialState.length + 1);
    expect(state).toEqual([...mockInitialState, mockNewTodo]);

  });

  test('should toggle a todo', () => {

    const [firstTodo] = mockInitialState;
    const { id, done } = firstTodo;

    const actionToggle = {
      type: 'TOGGLE_TODO',
      payload: id
    }

    const state = todoReducer(mockInitialState, actionToggle);
    const [firstTodoAfterToggle] = state;
    const { done: doneAfterToggle } = firstTodoAfterToggle;

    expect(doneAfterToggle).toEqual(!done);

  });

  test('should delete a todo', () => {

    const [firstTodo] = mockInitialState;
    const { id } = firstTodo;

    const actionDelete = {
      type: 'DELETE_TODO',
      payload: id
    }

    const state = todoReducer(mockInitialState, actionDelete);

    expect(state.length).toEqual(mockInitialState.length - 1);

  });

  test('should clear all todos', () => {

    const actionClear = {
      type: 'CLEAR_TODOS'
    }

    const state = todoReducer(mockInitialState, actionClear);

    expect(state.length).toEqual(0);

  });

  test('should complete all todos', () => {

    const actionCompleteAll = {
      type: 'COMPLETE_ALL_TODOS'
    }

    const state = todoReducer(mockInitialState, actionCompleteAll);

    state.forEach(todo => {
      expect(todo.done).toEqual(true);
    });

  });

  test('should pending all todos', () => {

      const actionPendingAll = {
        type: 'PENDING_ALL_TODOS'
      }

      const state = todoReducer(mockInitialState, actionPendingAll);

      state.forEach(todo => {
        expect(todo.done).toEqual(false);
      });

    });

})