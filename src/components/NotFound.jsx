
import { Link } from 'react-router-dom';
import not from '../assets/images/404/404.gif'
const NotFound = () => {
    return (
        <div className=''>
          
            <img className='mx-auto' src={not} alt="" />
            <div className='text-center'>
            <Link to="/">
            <button className='btn btn-primary'>Back to home</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFound;