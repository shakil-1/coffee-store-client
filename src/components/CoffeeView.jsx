import { Link, useLoaderData } from "react-router-dom";
import bg from "../assets/images/more/11.png";

const CoffeeView = () => {
    const coffee = useLoaderData();
    const {  name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
     <div className="w-3/4 mx-auto  ">
        <Link to="/">
        <button className="py-10 font-bold">Back to home</button>
        </Link>
     <div className="bg-[#F4F3F0] rounded-md flex py-24 justify-center items-center gap-x-12  ">
        <div>
        <img className="h-[350px]" src={photo} alt="" />
        </div>
        <div>
            <h1 className="font-bold text-3xl mb-3">Niceties</h1>
            <div className="leading-7">
                <p><span className="font-bold">Name: </span>{name}</p>
                <p><span className="font-bold">Chef: </span>{chef}</p>
                <p><span className="font-bold">Supplier: </span>{supplier}</p>
                <p><span className="font-bold">Teste: </span>{taste}</p>
                <p><span className="font-bold">Category: </span>{category}</p>
                <p><span className="font-bold">Details: </span>{details}</p>
            </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default CoffeeView;
