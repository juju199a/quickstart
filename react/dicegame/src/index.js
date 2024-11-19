import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const product = 'MacBook'

function handleClick() {
  alert('곧 도착합니다.');
}

root.render(
<>
  <App />
</>
  
);

