import React from 'react';

import './App.css';

import data from './data';
import Card from './components/card';

function App() {

  return (
    <div className="App">
      {
        data.map((item,index) => (
          <Card key={index} title={item.title} author={item.author.name} />
        ))
      }
    </div>
  );
}

export default App;
