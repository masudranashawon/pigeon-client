import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='py-10 flex justify-between'>
      <div className='logo'>
        <Link
          to='/'
          className='text-xl font-semibold hover:text-violet-500 duration-300'
        >
          Pigeon
        </Link>
      </div>
      <nav>
        <div className='flex gap-5'>
          <Link
            to='/login'
            className='hover:text-violet-500 hover:underline underline-offset-2 duration-300 '
          >
            Login
          </Link>
          <Link
            to='/register'
            className='hover:text-violet-500 hover:underline underline-offset-2 duration-300 '
          >
            Register
          </Link>
        </div>
        {/* <div>
          <p>
            Logged in as:{" "}
            <span className='text-violet-500 font-semibold'>Masud</span>
          </p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
