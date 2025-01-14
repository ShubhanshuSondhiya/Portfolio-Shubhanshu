
const Header = () => {
  return (
    <div className="w-10/12 flex justify-between bg-transparent text-white absolute mx-16 mt-4">
      <div className="big-shoulders-display-bShoulder flex gap-5 justify-center items-center px-16">
        <p><span className="text-[#7DFF68] text-2xl">48</span>Level</p>
        <button className="text-2xl flex justify-center items-center p-3 border-[1px] w-4 h-4 border-slate-600 text-[#E84A4A]">+</button>
        <p><span className="text-[#7DFF68] text-2xl">4656</span> COINS AWARDED</p>
      </div>
      <div className="flex gap-5 justify-center items-center iceland-regular">
        <p>CREDITS</p>
        <p>SERVER TIME <span>5:22</span></p>
        <p>LOCAL TIME <span>17:20</span></p>
      </div>
    </div>
  )
}

export default Header
