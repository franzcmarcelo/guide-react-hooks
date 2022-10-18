import { memo } from 'react';
import { useForm } from '../../hooks';

const INPUTS = {
  TODO_DESCRIPTION: 'todoDescription'
}

const initialForm = {
  [INPUTS.TODO_DESCRIPTION]: ''
};

const TodoAdd = memo(({ onAddTodo }) => {

  // console.log('TodoAdd Component Rendered');

  const { formState, onInputChange, onResetForm } = useForm(initialForm);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      desc: formState[INPUTS.TODO_DESCRIPTION],
      done: false
    }
    onAddTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={ onFormSubmit } className="d-flex flex-column gap-3">
      <label className="form-label align-self-end text-decoration-underline fw-bold">New TODO</label>
      <input
        type="text"
        className="form-control form-control-sm"
        name={ INPUTS.TODO_DESCRIPTION }
        value={ formState[INPUTS.TODO_DESCRIPTION] }
        onChange={ onInputChange }
        placeholder="What do you need to do?"
      />
      <button
        type="submit"
        className="btn btn-success btn-sm"
      >Add
      </button>
    </form>
  )
});

export default TodoAdd;