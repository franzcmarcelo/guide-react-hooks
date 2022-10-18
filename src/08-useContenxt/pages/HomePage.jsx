import { or, isEmpty, not, isNil } from 'ramda'
import { useUserContext } from '../context';

const HomePage = () => {

  const { user } = useUserContext();
  const { username, email } = user;

  const isUserEmpty = or(isEmpty(username), isEmpty(email));
  const isUserNil = or(isNil(username), isNil(email));
  const hasUserData = not(isUserEmpty) && not(isUserNil);

  return (
    <div>
      <h3>HomePage</h3>
      <hr />
      {
        hasUserData ? (
          <div className='alert alert-info d-flex flex-column gap-2'>
            <p className='font-monospace' aria-label='username-label'><b>Username: </b>{username}</p>
            <p className='font-monospace' data-testid='email-label'><b>email: </b>{email}</p>
          </div>
        ) : (
          <div className='alert alert-danger'>
            <p className='font-monospace'>No user data</p>
          </div>
        )
      }
    </div>
  )
}

export default HomePage;