/** @jsx nativeEvents */
import {useState} from 'react';
import logo from './logo.svg';
import nativeEvents from 'jsx-native-events'
import './App.css';

function App() {
  const [ value, setValue ] = useState(12)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>el valor que llega desde el wc: {value}</p>
        <my-counter start={value} onEventMyCounterAdd={e => setValue(e.detail.counter)}></my-counter>
      </header>
    </div>
  );
}

export default App;
