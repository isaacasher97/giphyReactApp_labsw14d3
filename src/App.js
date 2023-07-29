import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledForm';
import { useState } from 'react';

const App = () => {
  
  const [giphy, setGiphy] = useState({})


  return (
    <div className="App">
      <h1>Giphy</h1>
      <ControlledForm setGiphy={setGiphy}/>
    </div>
  );
}

export default App;
