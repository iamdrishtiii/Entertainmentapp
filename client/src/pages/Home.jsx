import React from 'react'
import Navbar from '../components/Navbar'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getTVseries } from '../action'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TfiArrowCircleLeft } from "react-icons/tfi";

const Home = () => {
  const [searchterm, setSearchterm] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentslide , setcurrentslide] = useState(0)

  const movies = useSelector((state) => state.movies) || []
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])
  // console.log(movies)
  // Carousel Logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };
  const prevSlide = () => {
    if(currentSlide>0){
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length)};
  };


  const tvseries = useSelector((state) => state.tvseries) || []
  useEffect(() => {
    dispatch(getTVseries())
  }, [dispatch])
  // console.log(tvseries)
const nextslide = () => {
    setcurrentslide((prev) => (prev + 1) % tvseries.length);
  };
  const prevslide = () => {
    if(currentSlide>0){
    setcurrentslide((prev) => (prev - 1 + tvseries.length) % tvseries.length);
  }}


  return (
    <div className=' sm:flex sm:flex-row '>
      <div><Navbar /></div>
      <div className="px-4 py-4 sm:px-8 ">
        <div className='py-12 sm:px-16 text-lg sm:text-3xl flex flex-row gap-6 '>
          <label htmlFor=""><FaSearch /> </label>
          <input placeholder='Search movies or tvshows' className='bg-black' value={searchterm} onChange={(e) => setSearchterm(e.target.value)} />
        </div>

        {/* Trending movies carousel */}
        <div>
          <h1 className=' sm:px-20 text-4xl'>Trending movies</h1>
          <div >
            {/* Carousel */}
            {movies.length > 0 && (
              <div className="relative w-full flex justify-center items-center sm:p-6 mt-4 ">
                <button onClick={prevSlide} className="absolute left-0 md:left-4 p-4"><TfiArrowCircleLeft /></button>
                <Link to={`/movies/${movies[currentSlide].id}/${movies[currentSlide].primaryTitle}`}>
                  <div className=" px-12 flex justify-center items-center flex flex-row gap-4">
                    <div><img
                      src={movies[currentSlide].primaryImage}
                      alt={movies[currentSlide].primaryTitle}
                      className="w-[300px] h-[200px] rounded-lg"
                    />
                      <p className="text-lg">{movies[currentSlide].primaryTitle}</p>
                    </div>
                    <div className='hidden sm:block'>
                      <img
                        src={movies[currentSlide + 1].primaryImage}
                        alt={movies[currentSlide + 1].primaryTitle}
                        className="w-[300px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{movies[currentSlide + 1].primaryTitle}</p>
                    </div>
                    <div className='hidden md:block'>
                      <img
                        src={movies[currentSlide + 2].primaryImage}
                        alt={movies[currentSlide + 2].primaryTitle}
                        className="w-[300px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{movies[currentSlide + 2].primaryTitle}</p>
                    </div>
                     <div className='hidden lg:block'>
                      <img
                        src={movies[currentSlide + 3].primaryImage}
                        alt={movies[currentSlide + 3].primaryTitle}
                        className="w-[300px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{movies[currentSlide + 3].primaryTitle}</p>
                    </div>
                    <div className='hidden xl:block'>
                      <img
                        src={movies[currentSlide + 4].primaryImage}
                        alt={movies[currentSlide + 4].primaryTitle}
                        className="w-[300px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{movies[currentSlide + 4].primaryTitle}</p>
                    </div>
                    <div className='hidden 2xl:block'>
                      <img
                        src={movies[currentSlide + 5].primaryImage}
                        alt={movies[currentSlide + 5].primaryTitle}
                        className="w-[300px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{movies[currentSlide + 5].primaryTitle}</p>
                    </div>
                  </div>
                </Link>
                <button onClick={nextSlide} className="absolute right-0 md:right-4 p-4"><TfiArrowCircleLeft className="rotate-180"/></button>
              </div>
            )}
          </div>
        </div>

         {/* Recommended tvshows carousel */}

        <div className='h-screen'>
          <h1 className=' sm:px-20 text-4xl'>Recommended TvShows</h1>
          <div>
            {/* Carousel */}
            {tvseries.length > 0 && (
              <div className="relative w-full flex justify-center items-center sm:p-6 mt-4 ">
                <button onClick={prevslide} className="absolute left-0 md:left-4 p-4"><TfiArrowCircleLeft /></button>
                <Link to={`/tvseries/${tvseries[currentslide].id}/${tvseries[currentslide].primaryTitle}`}>
                  <div className=" px-12 flex justify-center items-center flex flex-row gap-4">
                    <div><img
                      src={tvseries[currentslide].primaryImage}
                      alt={tvseries[currentslide].primaryTitle}
                      className="w-[200px] h-[200px] rounded-lg"
                    />
                      <p className="text-lg">{tvseries[currentslide].primaryTitle}</p>
                    </div>
                    <div>
                      <img
                        src={tvseries[currentslide + 1].primaryImage}
                        alt={tvseries[currentslide + 1].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide + 1].primaryTitle}</p>
                    </div>
                    <div className='hidden sm:block'>
                      <img
                        src={tvseries[currentslide + 2].primaryImage}
                        alt={tvseries[currentslide + 2].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide + 2].primaryTitle}</p>
                    </div>
                     <div className='hidden sm:block'>
                      <img
                        src={tvseries[currentslide + 3].primaryImage}
                        alt={tvseries[currentslide + 3].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide + 3].primaryTitle}</p>
                    </div>
                    <div className='hidden md:block'>
                      <img
                        src={tvseries[currentslide + 4].primaryImage}
                        alt={tvseries[currentslide + 4].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide + 4].primaryTitle}</p>
                    </div>
                    <div className='hidden lg:block'>
                      <img
                        src={tvseries[currentslide + 5].primaryImage}
                        alt={tvseries[currentslide + 5].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide + 5].primaryTitle}</p>
                    </div>
                    <div className='hidden xl:block'>
                      <img
                        src={tvseries[currentslide + 6].primaryImage}
                        alt={tvseries[currentslide + 6].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide +6].primaryTitle}</p>
                    </div>
                    <div className='hidden 2xl:block'>
                      <img
                        src={tvseries[currentslide + 7].primaryImage}
                        alt={tvseries[currentslide + 7].primaryTitle}
                        className="w-[200px] h-[200px] rounded-lg"
                      />
                      <p className="text-lg">{tvseries[currentslide +7].primaryTitle}</p>
                    </div>
                  </div>
                </Link>
                <button onClick={nextslide} className="absolute right-0 md:right-4 p-4"><TfiArrowCircleLeft className="rotate-180"/></button>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home