function Card() {
  return (
    <div className="flex w-[500px] bg-amber-300 gap-1 h-80 p-10 justify-around flex-wrap">
      <div className="bg-yellow-900 w-[0px] h-[40px]"></div>
      <div className="bg-blue-400 w-[40px] h-[40px]"></div>
      <div className="bg-green-400 w-[40px] h-[40px]"></div>
      <div className="bg-red-400 w-[40px] h-[40px]"></div>
    </div>
  )
}

export default Card