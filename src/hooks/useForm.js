import { useState } from 'react';

/**
 * 
 * @param {*} initialForm object with nameInput as key and valueInput as value to each input
 * @example
 * {
 *   todo: 'Go to...'
 * }
 * nameInput: todo
 * valueInput: Go to...
 */
const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm );

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState( curFormState => ({ ...curFormState, [name]: value }));
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return {
    formState,
    onInputChange,
    onResetForm,
  }
}

export default useForm