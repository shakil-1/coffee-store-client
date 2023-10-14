import c1 from '../assets/images/cups/Rectangle 9.png';
import c2 from '../assets/images/cups/Rectangle 10.png';
import c3 from '../assets/images/cups/Rectangle 11.png';
import c4 from '../assets/images/cups/Rectangle 12.png';
import c5 from '../assets/images/cups/Rectangle 13.png';
import c6 from '../assets/images/cups/Rectangle 14.png';
import c7 from '../assets/images/cups/Rectangle 15.png';
import c8 from '../assets/images/cups/Rectangle 16.png';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Aos from 'aos';
const FollowInstagram = () => {
    
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div>
      <div className='w-4/5 mx-auto'>
      <div className='text-center py-8'>
        <p>Follow Us Now</p>
        <h1 className='font-bold text-2xl drop-shadow-2xl text-[#331A15]'>Follow on Instagram</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        <img data-aos="zoom-in-right" className='mx-auto' src={c1} alt="" />
        <img data-aos="zoom-in-right" className='mx-auto' src={c2} alt="" />
        <img data-aos="zoom-in-left" className='mx-auto' src={c3} alt="" />
        <img data-aos="zoom-in-left" className='mx-auto' src={c4} alt="" />
        <img data-aos="zoom-in" className='mx-auto' src={c5} alt="" />
        <img data-aos="zoom-in" className='mx-auto' src={c6} alt="" />
        <img data-aos="zoom-in" className='mx-auto' src={c7} alt="" />
        <img data-aos="zoom-in" className='mx-auto' src={c8} alt="" />
      </div>
      </div>
    </div>
  );
};

export default FollowInstagram;
