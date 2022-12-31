import React from 'react';
import Header from './components/Header';
import ParentWrapper from './components/ParentWrapper';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <ParentWrapper>
      <Header/>
      <Body/>
      <Footer/>
    </ParentWrapper>
  );
}

export default App;
