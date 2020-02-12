import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const arr = [{ firstName: "dhruv", lastName: "Joe", email: "sda@gmai.com", age: 24, onlineStatus: true }]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={arr} />
      </section>
    </div>
  );
}

export default App;
