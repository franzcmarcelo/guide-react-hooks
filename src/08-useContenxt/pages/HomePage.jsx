import { useUserContext } from '../context';

const HomePage = () => {

  const { user } = useUserContext();
  const { username, email } = user;

  return (
    <div>
      <h3>HomePage</h3>
      <hr />
      <div className='alert alert-info d-flex flex-column gap-2'>
        <p className='font-monospace'><b>Username: </b>{username}</p>
        <p className='font-monospace'><b>email: </b>{email}</p>
      </div>
    </div>
  )
}

export default HomePage;