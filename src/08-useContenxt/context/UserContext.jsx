import { createContext, useContext, useState } from 'react';


const UserContext = createContext();


const UserProvider = (props) => {

  const [ user, setUser ] = useState({});

  const dataProvided = {
    user,
    setUser,
  };

  return <UserContext.Provider value={dataProvided} {...props} />;
};


const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserProvider must be used within a UserProvider');
  }
  return context;
};


export {
  UserProvider,
  useUserContext,
};