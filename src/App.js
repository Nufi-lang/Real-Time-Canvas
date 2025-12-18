import React, {useEffect, useRef, useState} from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  const lastPoint = useRef(null);
  const [drawing,setDrawing] = useState(false);

  function getMousePos(e){
    const rect = canvasRef.current.getBoundingClientRect();
    return{
      x:e.clientX - rect.left,
      y:e.clientY - rect.top
    };
  }

  function drawLine(x0, y0, x1, y1) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
  }

  function handleMouseDown(e) {
    setDrawing(true);
    lastPoint.current = getMousePos(e);
  }

  function handleMouseMove(e) {
    if (!drawing) return;

    const current = getMousePos(e);
    drawLine(
      lastPoint.current.x,
      lastPoint.current.y,
      current.x,
      current.y
    );
    lastPoint.current = current;
  }

  function handleMouseUp() {
    setDrawing(false);
  }

  return (
    <div style={{textAlign:"center" , marginTop: "40px"}}>
      <h2>Real-Time Canvas</h2>
      <canvas
      ref={canvasRef}
      width={800}
      height={500}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ border: "1px solid black", marginTop: "40px" }}
    />
    </div>
  );
}

export default App;
