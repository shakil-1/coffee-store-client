import hbg from "../assets/header.png";
import logo from "../assets/images/more/logo1.png";
import pg1 from "../assets/images/icons/1.png";
import pg2 from "../assets/images/icons/2.png";
import pg3 from "../assets/images/icons/3.png";
import pg4 from "../assets/images/icons/4.png";
import banner from "../assets/images/more/3.png";

const Home = () => {
  return (
    <div>
        {/* header section  */}
      <div
        className="h-[100px] mx-auto"
        style={{ backgroundImage: `url(${hbg})` }}
      >
        <h2 className="  flex justify-center items-center  text-[#FFF] text-5xl  font-normal">
          {" "}
          <img className=" h-[80px] " src={logo} alt="" /> Espresso Emporium
        </h2>
      </div>

{/* banner section  */}
<section>
<div className="hero min-h-screen" style={{backgroundImage: `url(${banner})` }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-left text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[21px] font-bold text-[#FFF]">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5 text-md font-bold">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn bg-[#E3B577]">Learn More</button>
    </div>
  </div>
</div>
</section>




{/* icon section  */}
      <div className=" bg-[#ECEAE3] ">
        <div className="grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 md:w-auto lg:max-w-[1280px] mx-auto py-12  ">
          <div className="w-[300px] mx-auto">
            <img className="mb-4" src={pg1} alt="" />
            <div>
              <h3 className=" font-normal text-3xl text-[#331A15] mb-2">Awesome Aroma</h3>
              <p className="font-noraml text-lg text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="w-[300px] mx-auto">
            <img className="mb-4" src={pg2} alt="" />
            <div>
              <h3 className=" font-normal text-3xl text-[#331A15] mb-2">Awesome Aroma</h3>
              <p className="font-noraml text-lg text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="w-[300px] mx-auto">
            <img className="mb-4" src={pg3} alt="" />
            <div>
              <h3 className=" font-normal text-3xl text-[#331A15] mb-2">Awesome Aroma</h3>
              <p className="font-noraml text-lg text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div className="w-[300px] mx-auto">
            <img className="mb-4" src={pg4} alt="" />
            <div>
              <h3 className=" font-normal text-3xl text-[#331A15] mb-2">Awesome Aroma</h3>
              <p className="font-noraml text-lg text-[#1B1A1A]">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
