import React ,{useState} from 'react'
import { MdMovie } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { GiTv } from 'react-icons/gi';
import { FaBookmark } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token")
  const [active, setActive] = useState(0);
  const [blockVisible, setBlockVisible] = useState(false);
  const navigate = useNavigate();

    const handleHome = () => {
    setActive(1);
    navigate("/");
  };
  const handleMovie = () => {
    setActive(2);
    navigate("/movies");
  };
  const handleSeries = () => {
    setActive(3);
    navigate("/tvSeries");
  };
  const handleBookmark = () => {
    setActive(4);
    navigate("/bookmarks");
  };

  const handleProfileClick = () => {
    setBlockVisible(!blockVisible);
  };

  const handleEnjoy = () => {
    // Implement signin logic here
    navigate("/")
    setBlockVisible(false); // Hide the block after signin
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/auth")
    setBlockVisible(false); // Hide the block after logout
  };

  return (
    <div className='bg-slate-900 px-3 sm:px-6 py-2 sm:py-6 rounded-full mx-1 sm:mx-2 my-2 flex flex-row sm:flex sm:flex-col space-x-8 sm:space-x-0 sm:space-y-36 xl:space-y-40 sm:w-28 '>
      <div className='sm:w-1/2 flex flex-row sm:flex sm:flex-col space-x-6 sm:space-x-0 sm:space-y-12'>
        <div><MdMovie color='red' className='size-8 sm:size-12' /></div>
        <div className='flex flex-row sm:flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-6'>
          <FaHome className='size-6 sm:size-8' onClick={handleHome} color={active === 1 ? "red" : "white"}/>
          <MdLocalMovies className='size-6 sm:size-8' onClick={handleMovie} color={active === 2 ? "red" : "white"} />
          < GiTv className='size-6 sm:size-8' onClick={handleSeries} color={active === 3 ? "red" : "white"} />
          <FaBookmark className='size-6 sm:size-8' onClick={handleBookmark} color={active === 4 ? "red" : "white"}/>
        </div>
      </div>
      <div className='sm:w-1/2 flex flex-end pb-12 ' onClick={handleProfileClick} >
        <CgProfile className='size-8 sm:size-16' />
      </div>
      {blockVisible && (
      
        <div className="block absolute top-0 left-[20%]  rounded-md p-3 w-[50%] bg-gradient-to-tr from-[#161D2F] via-[#5A698F] to-[#161D2F] ">
          <button onClick={handleEnjoy} className="w-1/2 text-[20px] leading-relaxed tracking-wider font-semibold text-gray-200 hover:scale-110 transition-scale duration-300">Enjoy</button>
          <button onClick={handleLogout} className="w-1/2 text-[20px] leading-relaxed tracking-wider font-semibold text-gray-200 hover:scale-110 transition-scale duration-300">
            {token ? <div onClick={() => localStorage.removeItem("token")}>Logout</div> : <div onClick={() => navigate("/auth")}>SignIn</div>}
          </button>
          </div>
          )}
        </div>
      )
      }

      export default Navbar