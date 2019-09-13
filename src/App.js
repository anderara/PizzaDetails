import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaFormContainer from './components/PizzaFormContainer'

function App() {
  return (
    <div>
      <PizzaListContainer />
      <PizzaFormContainer />
    </div>
  );
}

export default App;
