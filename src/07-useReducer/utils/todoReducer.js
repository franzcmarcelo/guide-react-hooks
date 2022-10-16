
/**
 * @param {*} action.type ADD_TODO -> action.payload: todoObject
 * @param {*} action.type TOGGLE_TODO -> action.payload: todoId
 * @param {*} action.type REMOVE_TODO -> action.payload: todoId
 */
const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO': {
      return [...state, payload];
    }
    case 'TOGGLE_TODO': {
      return state.map(todo =>
        (todo.id === payload)
          ? { ...todo, done: !todo.done }
          : todo
      );
    }
    case 'DELETE_TODO': {
      return state.filter(todo => (todo.id !== payload));
    }
    case 'CLEAR_TODOS': {
      return [];
    }
    case 'COMPLETE_ALL_TODOS': {
      return state.map(todo => todo.done ? todo : { ...todo, done: true });
    }
    case 'PENDING_ALL_TODOS': {
      return state.map(todo => !todo.done ? todo : { ...todo, done: false });
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;