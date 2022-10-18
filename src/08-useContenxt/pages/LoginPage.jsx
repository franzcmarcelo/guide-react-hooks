import { useForm } from '../../hooks';
import { useUserContext } from '../context';

const INPUTS = {
  USERNAME: 'username',
  EMAIL: 'email',
}

const initialForm = {
  [INPUTS.USERNAME]: '',
  [INPUTS.EMAIL]: '',
};

const LoginPage = () => {

  const { setUser } = useUserContext();
  const { formState, onInputChange } = useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    setUser(formState);
  }

  return (
    <div className='container'>
      <h3>LoginPage</h3>
      <hr />

      <form onSubmit={onSubmit} aria-label="form">
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            name={INPUTS.USERNAME}
            value={formState[INPUTS.USERNAME]}
            onChange={onInputChange}
            placeholder='username...'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name={INPUTS.EMAIL}
            value={formState[INPUTS.EMAIL]}
            onChange={onInputChange}
            placeholder='email...'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>

    </div>
  )
}

export default LoginPage;