import {BarColor, appColor, checkUserDetails} from './src/function';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthNav from './src/navigation/AuthNav';
import UserNav from './src/navigation/UserNav';
import {RootState} from './src/redux/store';

const App = () => {
  const dispatch = useDispatch();

  const {user, token} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    BarColor();
    appColor();
    checkUserDetails();
  }, []);

  return <>{user && token ? <UserNav /> : <AuthNav />}</>;
};

export default App;
