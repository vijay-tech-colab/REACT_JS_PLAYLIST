import React, { useState } from "react";
import "./App.css";
import Timer from "./componants/Timer";
function App() {
  const [toggle , setToggle] = useState(true);
  return (
    <div className="w-full bg-emerald-500 flex justify-center h-screen items-center flex-col gap-1">
      <div className=" m-1">
      <button
        className="bg-blue-500 text-white px-14 py-4 rounded mt-4"
        onClick={() => setToggle((prev) => !prev)}
      >Toggle</button>
      </div>
      {toggle && <Timer />}
    </div>
  );
}

export default App;
