import badge_1 from "../assets/badge_1.png";
import badge_2 from "../assets/badge_2.png";

const ActiveProjects = () => {
  return (
    <div className="w-[10vw] h-[80vh] flex flex-col justify-between">
      <div className="border-l-2 border-solid border-[#E84A4A]">
        <div>
          <p className="big-shoulders-display-bShoulder text-white bg-[#E84A4A] p-[1px] pl-2">
            ACTIVE QUEST
          </p>
          <p className="iceland-regular h-7 flex items-center text-xs text-white bg-[#e84a4a27] p-[1px] pl-2">
            BACKEND MASTERY
          </p>
        </div>
        <div className="py-1 pl-2">
          <p className="iceland-regular text-white text-xs">QUEST NAME</p>
          <p className="big-shoulders-display-bShoulder text-[#E84A4A] text-sm">
            REACT WEBSITE
          </p>
        </div>
        <div className="py-1 pl-2">
          <p className="iceland-regular text-white text-xs">GOAL</p>
          <p className="iceland-regular text-slate-500 text-xs">
            Build this website. Implement a full react website with multiple
            routers, UI elements and tricky styling. Make it all work great!
          </p>
        </div>
        <div className="py-1 pl-2">
          <p className="iceland-regular text-white text-xs">REWARDS</p>
          <div className="flex gap-2">
            <img className="w-8 h-8" src={badge_1} alt="" />
            <img className="w-8 h-8" src={badge_2} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="big-shoulders-display-bShoulder text-[#E84A4A] text-xl">
            MUSIC
          </p>
          <button className="text-[#E84A4A] text-xs border-[1px] border-solid border-[#E84A4A] p-1">ON</button>
        </div>
        <div className="flex justify-between">
          <p className="big-shoulders-display-bShoulder text-[#E84A4A] text-xl">
            SOUND EFFECTS
          </p>
          <button className="text-[#E84A4A] text-xs border-[1px] border-solid border-[#E84A4A] p-1">ON</button>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
