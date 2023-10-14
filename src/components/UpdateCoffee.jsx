import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const  UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;



    const handelUpdateCoffees = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const udatedCoffee = {name, chef, supplier,taste, category, details, photo}
        console.log(udatedCoffee);
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(udatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.modifiedCount > 0 ) {
                  Swal.fire(
                    'success!',
                    'Coffee Updated Successfully',
                    'success'
                  )
                }
              })
        })
    }
    return (
        <div className="">
        <div className="w-3/4 mx-auto ">
          <Link to="/">
            <button>Back to home</button>
          </Link>
          <div className=" bg-[#F4F3F0] rounded-md p-10  ">
            <div className="mx-auto md:w-3/4">
              <h1 className="text-[#374151] text-center text-5xl font-bold">Update Existing Coffee Details</h1>
              <p className=" text-start mt-4">
                It is a long established fact that a reader will be distraceted by
                the readable content of a page when looking at  its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here.
              </p>
            </div>
  
            <form onSubmit={handelUpdateCoffees}>
              <div className="mt-4">
                {/* name cheef */}
                <div className="md:flex gap-4">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={coffee.name}
                      placeholder="Enter coffee name"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Chef</span>
                    </label>
                    <input
                      type="text"
                      name="chef"
                      defaultValue={coffee.chef}
                      placeholder="Enter coffee chef"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
                {/* Supplier Taste */}
  
                <div className="md:flex gap-4">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Supplier</span>
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={coffee.supplier}
                      placeholder="Enter coffee supplier"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Taste</span>
                    </label>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={coffee.taste}
                      placeholder="Enter coffee taste"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
  
                {/* Category and Details */}
                <div className="md:flex gap-4">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Category</span>
                    </label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={coffee.category}
                      placeholder="Enter coffee category"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Details</span>
                    </label>
                    <input
                      type="text"
                      name="details"
                      defaultValue={coffee.details}
                      placeholder="Enter coffee details"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
                <div className="">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      defaultValue={coffee.photo}
                      placeholder="Enter photo URL"
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
  
                <input
                  className=" btn btn-block mt-4 bg-[#D2B48C] border-2 border-[#331A15] outline-none  hover:bg-[#ce9141]"
                  type="submit"
                  value="Update Coffee Details"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateCoffee;