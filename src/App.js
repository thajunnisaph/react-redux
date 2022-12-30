import Counter from './components/Counter';
import React,{Fragment} from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import {useSelector} from 'react-redux'
import UserProfile from './components/UserProfile';

function App() {
  const login = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
    <Header />
    {!login  && <Auth />}
    {login && <UserProfile />}
    <Counter />
    </Fragment>
  );
}

export default App;
