import React from "react";
import "./App.css";
import Pattern from "./components/pattern/Pattern";

function App() {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <Pattern
        text="360 pi"
        pattern={/^\s*[3]\s*[6]\s*[0]\s*[\\]*\s*[p,P]\s*[i,I]\s*/}
      />
      <div style={{ marginTop: "50px" }}>
        <Pattern
          text="(3x+5)(2x-1)"
          pattern={
            /^\s*[({[]\s*[3]\s*[*]?\s*[x,X]\s*[+]\s*[5]*\s*[)}\]]\s*[({[]\s*[2]\s*[*]?\s*[x,X]\s*[-]\s*[1]\s*[)}\]]\s*/
          }
        />
      </div>
    </div>
  );
}

export default App;
