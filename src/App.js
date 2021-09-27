import Button from "./components/button";
import React, { useState } from 'react';

const bodyStyle = {
  backgroundColor: '#00008b',
  height: '100%',
  textAlign: 'center'
}

const pStyle = {
  marginTop: '5%',
  marginBottom: '5%',
  fontSize: '3em',
  fontWeight: 'bold'
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Close');

  const incrementCount = () => setCount(count + 1)
  const decrementCount = () => setCount(count - 1)

  const toggle = () => {
    if (name === 'Close') {
      setCount(' ');
      setName('Open');
    } else {
      setCount(0);
      setName('Close');
    }
  }

  return (
    <div className="App" style={bodyStyle}>
      <p style={pStyle}>{count}</p>
      <Button onClick={incrementCount} name='Add Cont' />
      <Button onClick={decrementCount} name='Remove Count' />
      <Button onClick={toggle} name={name} />
    </div>
  );
}

export default App;