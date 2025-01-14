import homepage_img from "../assets/homepage_img.png";
import "../App.css";

const Homepage = () => {
  return (
    <div className="div_edge_img">
      <div
        className="w-[60vw] h-[80vh] flex flex-col justify-start items-center p-8"
        style={{
          backgroundImage: `url(${homepage_img})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-white uppercase text-sm w-[40vw]">swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe
        </p>
        <p className="text-slate-300 text-xs">Artwork generated with midjourney</p>
      </div>
    </div>
  );
};

export default Homepage;
