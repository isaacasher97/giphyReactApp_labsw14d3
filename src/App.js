import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import Display from './components/Display';
import { useState } from 'react';

const App = () => {
  
  const [giphy, setGiphy] = useState({})


  return (
    <div className="App">
      <h1>Giphy</h1>
      <ControlledForm setGiphy={setGiphy}/>
      <Display giphy={giphy}/>
    </div>
  );
}

export default App;
