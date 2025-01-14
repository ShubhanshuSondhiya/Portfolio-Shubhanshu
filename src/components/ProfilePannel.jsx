import "../App.css";
import profile from "../assets/profileImage.png";

const ProfilePannel = () => {
  return (
    <div className="w-[10vw] h-[80vh] flex flex-col justify-between">
      <div>
        <div className="div_edge  flex justify-center items-center">
          <img src={profile} alt="" className="bg-[#2e1515]" />
        </div>
        <div className="py-1">
          <p className="iceland-regular text-white text-xs">NAME</p>
          <p className="big-shoulders-display-bShoulder text-lg text-[#E84A4A]">
            SHUBHANSHU
          </p>
          <p className="big-shoulders-display-bShoulder text-lg text-[#E84A4A]">
            SONDHIYA
          </p>
        </div>
        <div className="py-1">
          <p className="iceland-regular text-white text-xs">OCCUPATION</p>
          <p className="big-shoulders-display-bShoulder text-[#E84A4A]">
            WEB DEVELOPER
          </p>
        </div>
        <div className="py-1">
          <p className="iceland-regular text-white text-xs">CORPORATION</p>
          <p className="big-shoulders-display-bShoulder text-[#E84A4A]">
            LEGACY.AI
          </p>
        </div>
        <div className="py-1">
          <p className="iceland-regular text-white text-xs">AVALABILITY</p>
          <p className="big-shoulders-display-bShoulder text-black bg-[#E84A4A] p-[1px]">
            OPEN FOR HIRE
          </p>
        </div>
        <div className="py-1">
          <p className="iceland-regular text-white text-xs">SOCIAL</p>
          <p className="big-shoulders-display-bShoulder text-[#E84A4A] border-[1px] border-[#E84A4A] p-[1px]">OPEN CONNECTION</p>
        </div>
      </div>
      <div>
        <p className="iceland-regular text-[#E84A4A] text-xs">MOTTO</p>
        <p className="big-shoulders-display-bShoulder text-[#ffffff] text-xs uppercase">
          Code with clarity, design with purpose, and build to inspire.
        </p>
      </div>
    </div>
  );
};

export default ProfilePannel;
