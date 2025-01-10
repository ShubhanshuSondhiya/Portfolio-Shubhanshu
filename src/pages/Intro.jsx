import Hi from "../assets/Hi.png";
import "../App.css";

const Intro = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[70vw] h-full flex justify-center items-center gap-14">
        <img src={Hi} alt="" className="w-64" />
        <div className="text-white uppercase flex flex-col justify-center items-start">
          <p className="text-2xl py-8 iceland-regular">Welcome to my personal website.</p>
          <p className="text iceland-regular">
            I have created this website to feel like a game/sci-fi interface.
            All text inside tries to reflect this.
          </p>
          <p className="text py-6 iceland-regular">
            You will find &apos;Achievements&apos; or &apos;Quests&apos; that
            show the progress in my professional life and are related to what i
            am working on.{" "}
          </p>
          <button className="big-shoulders-display-bShoulder border-solid border-[1px] border-[#E84A4A] text-[#E84A4A] px-6 py-1 mt-3 hover:border-red-700">
            ENTER THE SYSTEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
