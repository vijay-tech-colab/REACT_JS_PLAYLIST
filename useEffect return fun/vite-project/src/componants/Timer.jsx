import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(false);
  const [countDown, setCountDown] = useState(0);
  useEffect(() => {
    let id;
      if (timer) {
        id = setInterval(() => {
          console.log("useEffect Call")
        setCountDown(prev => prev + 1);
      }, 1000);
    }
    return () => {
        clearInterval(id);
        console.log("hello");
    };
  }, [timer]);
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-4xl font-bold">{countDown}</div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setTimer((prev) => !prev)}
        >
          {timer ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
