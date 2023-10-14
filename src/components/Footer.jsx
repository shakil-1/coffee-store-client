import logo from '../assets/images/more/logo1.png';
import bg from '../assets/images/more/13.jpg';
import { BsFillTelephoneFill,BsFacebook , BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='mt-16 pt-16 pb-4' style={{backgroundImage:`url(${bg})`}}>
      <div className="w-4/5 mx-auto md:flex gap-2">
        <div className="w-1/2 mx-auto">
          <img className='h-[90px]' src={logo} alt="" />
          <h2 className='font-bold text-3xl text-[#331A15]'>Espresso Emporium</h2>
          <p className='my-5 text-[#1B1A1A]'>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className='flex gap-4 text-[#331A15]'>
            <BsFacebook className='text-3xl cursor-pointer'></BsFacebook>
            <BsTwitter className='text-3xl cursor-pointer'></BsTwitter>
            <BsInstagram className='text-3xl cursor-pointer'></BsInstagram>
            <BsLinkedin className='text-3xl cursor-pointer'></BsLinkedin>
          </div>
          <h3 className='font-bold text-3xl text-[#331A15] my-4'>Get in Touch</h3>
         <div className=' text-[#1B1A1A]'>
         <p className='text-lg font-normal flex gap-2 items-center'><BsFillTelephoneFill></BsFillTelephoneFill> +88 01533 333 333</p>
          <p className='text-lg font-normal my-2 flex gap-2 items-center'><MdEmail></MdEmail> info@gmail.com</p>
          <p className='text-lg font-normal flex gap-2 items-center'><FaLocationDot></FaLocationDot> 72, Wall street, King Road, Dhaka</p>
         </div>
        </div>
        <div className="w-1/2 mt-24 mx-auto">
            <h2 className='font-bold text-3xl text-[#331A15]'>Connect with Us</h2>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-4 border-none" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-4 border-none" />
            <textarea name="" id="" cols="20" placeholder='Message' rows="10" className=' h-20 input input-bordered w-full max-w-xs border-none'></textarea> <br />
            <button className='border-2 border-[#331A15] px-2 py-2 text-[#331A15] rounded-xl mt-2'>Send Message</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
