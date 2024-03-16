import React, { useEffect } from 'react';
import Auth from './Auth';
import Main from './Main';
import { useUserStore } from '../zustand/userStore';

const Root = () => {
  const { isSignedIn } = useUserStore();
  return isSignedIn ? <Main /> : <Auth />;
};

export default Root;
