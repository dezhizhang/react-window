import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FixedSizeList from './components/FixedSizeList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FixedSizeList />
  </React.StrictMode>
);
