import React, {useRef} from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);

  return (
    <div style={{textAlign:"center" , marginTop: "40px"}}>
      <h2>Real-Time Canvas</h2>
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        style={{border:"1px solid black"}}
      />
    </div>
  );
}

export default App;
