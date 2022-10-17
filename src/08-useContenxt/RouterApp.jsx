import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components';
import { UserProvider } from './context';
import { HomePage, AboutPage, LoginPage } from './pages';

const RouterApp = () => {
  return (
    <UserProvider>
      <h1 className='text-center'>Router App</h1>
      <hr />

      <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </UserProvider>
  )
}

export default RouterApp;