
import { MdDelete } from 'react-icons/md';
import { BiSolidShow,BiSolidEditAlt } from 'react-icons/bi';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from 'aos';


const Coffee = ({ coffee ,coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handelCoffeesDelete = _id =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffees/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                      Swal.fire(
                            'Deleted!',
                            'Your Coffees has been deleted.',
                            'success'
                            
                          )
                          const remaining = coffees.filter(cof => cof._id  !== _id);{
                            setCoffees(remaining)
                           }   
                }
                 
            })

        }
      })
  }
  
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div>
      <div className="">
        <div className="flex card card-side  bg-[#F5F4F1] p-4" data-aos="zoom-in">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <p className="">
              <span className="font-bold">Name</span> : {name}
            </p>
            <p className="">
              <span className="font-bold">Chef</span> : {chef}
            </p>
            <p className="">
              <span className="font-bold">Chef</span> : 890Taka
            </p>
          </div>
          <div className="flex  items-center">
          <div>
        <Link to={`/view/${_id}`}>
        <div className="grid  cursor-pointer w-10 h-10 mb-2 rounded-md bg-[#D2B48C] text-primary-content place-content-center">
             <BiSolidShow  className='text-white text-2xl'></BiSolidShow>
            </div>
        </Link>
            <Link to={`/updatecoffee/${_id}`}>
            <div className="grid  cursor-pointer w-10 h-10 mb-2  rounded-md bg-[#3C393B] text-accent-content place-content-center">
            <BiSolidEditAlt className='text-white text-2xl'></BiSolidEditAlt>
            </div>
            </Link>
            <div onClick={() => handelCoffeesDelete(_id)} className="grid  cursor-pointer w-10 h-10   rounded-md bg-[#EA4744] text-secondary-content place-content-center">
            <MdDelete  className='text-white text-2xl'></MdDelete>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
