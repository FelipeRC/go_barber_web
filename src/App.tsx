import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

function App() {
  return (
    <>
      <GlobalStyle />
      <SignIn />
    </>
  );
}

export default App;
