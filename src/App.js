import React from 'react';

import './App.css';

import Header from "./components/heading";
import data from './data';
import Card from './components/card';

function App() {

  return (
    <div className="App">
      <Header  />
      <h1>Hello</h1>
      {
        data.map((item,index) => (
          <Card key={index} title={item.title} author={item.author.name} />
        ))
      }
    </div>
  );
}

export default App;
