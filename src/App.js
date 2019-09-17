import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer'
import PizzaDeitalsContainer from './components/PizzaDetailsContainer'
import AddPizzaFormContainer from './components/AddPizzaFormContainer'

function App() {
  return (
    <div>
      <PizzaListContainer />
      <PizzaDeitalsContainer />
      <AddPizzaFormContainer />
    </div>
  );
}

export default App;
