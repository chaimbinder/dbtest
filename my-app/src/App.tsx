import React, { useState } from 'react';
import FormInsert from './components/FormInsert';
import './App.css';


function App() {
  const [showFormInsert, setShowFormInsert] = useState(false);
  
  const handleButtonClickInInsert: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowFormInsert(!showFormInsert);
  };


  return (
    <div className="App">
      <button onClick={handleButtonClickInInsert}>Add Insert</button>
      {showFormInsert && <FormInsert setShowFormInsert={setShowFormInsert} />}
    </div>
  );
}

export default App;

