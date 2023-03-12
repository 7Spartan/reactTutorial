import Header from './Header';
import Inputcolor from './Inputcolor';
import { useState } from 'react';

function App() {
  const [newColor, setNewColor] = useState();

  return (
    <div className="App">
      <Header 
        newColor = {newColor}
      />
      <Inputcolor 
        newColor = {newColor}
        setNewColor = {setNewColor}
      />
    </div>
  );
}

export default App;
