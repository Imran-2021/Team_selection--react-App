import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Players from './Components/Players/Players';
import FakeData from './Components/FakeData/FakeData';
function App() {
  const [player,setPlayer]=useState(FakeData)
  const [plyer,setPlyer]= useState([]);
  const handleEvent=(dt)=>{
    setPlyer([...plyer,dt])
  }
  return (
    <div>
    <h3 style={{textAlign: 'center'}}>Total player - {player.length}</h3>
     <div className="grid">
            <div className="inner-grid">
              {
                  player.map((x,idx)=> <Players key={idx} handleEvent={handleEvent}  player={x}/>)
              }
            </div>
          <div>
                <Cart plyer={plyer}/>
          </div>

     </div>
    </div>
  );
}

export default App;
