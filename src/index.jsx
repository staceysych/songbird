import React from 'react';
import ReactDOM from 'react-dom';
import img from './assets/images/example.jpg';

function App() {
  return (
    <>
      <div className="red-text">Hello Stacey</div>
      <img src={img} alt="img" />
    </>
  );
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Stacey" />, mountNode);
