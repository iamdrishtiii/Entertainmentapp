import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getMovies } from '../action'
import { Link } from 'react-router-dom'

const Movies = () => {
  const movies = useSelector((state) => state.movies) || []
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])
  console.log(movies)

  return (
    <div className=' sm:flex sm:flex-row'>
      <div><Navbar /></div>
      <div className=" px-4 py-4 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
        {movies.map((movie) =>(
          <div key={movie.id} className=" hover:bg-slate-600 px-10 py-4 h-fit flex justify-center text-center">
            <Link to={`/movies/${movie.id}/${movie.primaryTitle}`}>
                      <img src={movie.primaryImage}  alt="" height="300px" width="300px" className="" /> 
                      <div className='flex flex-row gap-2'>{movie.releaseDate} {movie.contentRating} </div>
              <p className="text-3xl text-left">
                {movie.primaryTitle} 
              </p>
            </Link>
          </div>
        )
        )}

      </div>
    </div>
  )
}

export default Movies