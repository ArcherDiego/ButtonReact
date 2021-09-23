import Button from "./components/button";
import React, { useState } from 'react';

const bodyStyle = {
  backgroundColor: '#add8e6',
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

  function toggle(){
    if(name === 'Close'){
      setCount(' ');
      setName('Open');
    } else {
      setCount(0);
      setName('Close');
    }
  }

  return (
    <div className="App" style={ bodyStyle }>
      <p style={ pStyle }>{ count }</p>
      <Button onClick={() => setCount(count + 1)} name='Add Cont' />
      <Button onClick={() => setCount(count - 1)} name='Remove Count' />
      <Button onClick={ toggle }>{ name }</Button>
    </div>
  );
}

export default App;