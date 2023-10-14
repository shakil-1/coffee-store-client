import { Link, useLoaderData } from "react-router-dom";
import Home from "./components/Home";
import Coffee from "./components/Coffee";
import { useState } from "react";
import FollowInstagram from "./components/FollowInstagram";
import Footer from "./components/Footer";
import bg1 from './assets/images/more/4.png';
import bg2 from './assets/images/more/5.png';


function App() {
  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div className="bg-no-repeat " style={{ 
      backgroundImage: `url(${bg1}), url(${bg2})`, 
      backgroundPosition: 'left, right', 
      
    }} >
      <Home></Home>

      <div >
        <div className="py-12">
          <p className="text-center">--- Sip & Savor ---</p>
          <h1 className="text-5xl font-bold text-center text-[#331A15]">
            Our Popular Products{" "}
          </h1>
          <div className="text-center mt-8">
            <Link to="/addcoffee">
              <button className="btn bg-[#E3B577] text-[#FFF] border-2  border-[#331A15] hover:bg-[#dda65d]">
                Add Coffee
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* create coffee  */}

      <div className="grid crid-cols-1 md:grid-cols-2 gap-7 w-4/5 mx-auto">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></Coffee>
        ))}
      </div>
      <FollowInstagram></FollowInstagram>
      <Footer></Footer>
    </div>
  );
}

export default App;
