import React from 'react';
import Header from './components/Header';
import ParentWrapper from './components/ParentWrapper';
import Body from './components/Body';

function App() {
  return (
    <ParentWrapper>
      <Header/>
      <Body/>
    </ParentWrapper>
  );
}

export default App;
