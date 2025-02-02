import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [date,setDate] = useState('');
  const [num,setNum] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const time = new Date();
      setDate(time.toLocaleTimeString());
      setNum(num + 1);
    },1000);

    return () => {
      clearInterval(id);
    }
  },[]);
  console.log("hhh",num);
  return (
    <>
    <h1>{date}</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, accusantium perferendis nemo eius quia atque voluptas voluptate delectus? Enim soluta voluptatem explicabo, eum autem repellat deleniti tempore? Ullam, placeat corporis!
    </p>
    </>
  )
}

export default App