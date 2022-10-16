import { useForm } from '../hooks';

const FormCustomHook = () => {

  const initialForm = {
    username: '',
    email: '',
    password: ''
  }

  const {
    formState,
    onInputChange,
    onResetForm
  } = useForm(initialForm);
  
  const { username, email, password } = formState;

  const onReset = () => {
    onResetForm();
  }

  return (
    <div>
      <div className='mb-4'>
        <h3 className="mb-3">Custom Hook: useForm</h3>
        <div>
          <span className="badge rounded-pill text-bg-primary fs-6">useState</span>
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
      <input
        className="form-control mt-3"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={onInputChange}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  )
}

export default FormCustomHook