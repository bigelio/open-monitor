import React from "react";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
        <div className="text-4xl pt-10">Open Monitor</div>
        <div className="block">
          <button className="bg-slate-100 shadow-md px-4 py-3">
            {" "}
            Coming soon!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
