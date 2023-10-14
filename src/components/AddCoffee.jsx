import { Link } from "react-router-dom";
import addBg from "../assets/images/more/11.png";
import Swal from "sweetalert2";
const AddCoffee = () => {

    const handelAddCoffees = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffees = {name, chef, supplier,taste, category, details, photo}
        console.log(coffees);
        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffees)
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
                if (result.insertedId ) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        })
    }
    // insertedId

  return (
    <div className="" style={{ backgroundImage: `url(${addBg})` }}>
      <div className="w-3/4 mx-auto ">
        <Link to="/">
          <button>Back to home</button>
        </Link>
        <div className=" bg-[#F4F3F0] rounded-md p-10  ">
          <div className="mx-auto md:w-3/4">
            <h1 className="text-[#374151] text-center text-5xl font-bold">Add New Coffee</h1>
            <p className=" text-start mt-4">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at  its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form onSubmit={handelAddCoffees}>
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
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>

              <input
                className=" btn btn-block mt-4 bg-[#D2B48C] border-2 border-[#331A15] outline-none  hover:bg-[#ce9141]"
                type="submit"
                value="Add Coffee"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
