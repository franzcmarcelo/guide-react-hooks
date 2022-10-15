import { useState, useEffect } from 'react';
import Message from './Message';

const SimpleForm = () => {

  const [ formState, setFormState ] = useState({
    username: 'franz',
    email: 'franzcmarcelo@gmail.com'
  });

  const { username, email } = formState;

  const [ showMessage, setShowMessage ] = useState(false);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  }

  useEffect(() => {
    // console.log('first render');
  }, []);

  useEffect(() => {
    const validateName = (username === 'franz');
    const validateEmail = (email === 'franz@gmail.com');
    setShowMessage(validateName && validateEmail);
  }, [formState.username, formState.email]);

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3">Simple Form</h3>
        <div className='d-flex flex-wrap gap-1'>
          <span className="me-2 badge rounded-pill text-bg-primary fs-6">useState</span>
          <span className="badge rounded-pill text-bg-success fs-6">useEffect</span>
        </div>
      </div>
      <input
        className="form-control"
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-3"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={onInputChange}
      />
      {
       showMessage && <Message username={username} />
      }
    </div>
  )
}

export default SimpleForm