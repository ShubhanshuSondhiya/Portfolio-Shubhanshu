import homepage_img from "../assets/homepage_img.png";
import "../App.css";

const Homepage = () => {
  return (
    <div className="div_edge">
      <div
        className="w-full h-full flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${homepage_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          sapiente molestiae, accusantium, non voluptatem iusto quisquam atque
          dignissimos beatae, perferendis similique. Sint recusandae, veritatis
          velit dignissimos dolor ex modi perferendis!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
