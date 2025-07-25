import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getMovies } from '../action'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaSearch, FaRegBookmark, FaBookmark } from 'react-icons/fa'  // 📌 Import Bookmark icons

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const moviesPerPage = 12
  const movies = useSelector((state) => state.movies) || []
  const dispatch = useDispatch();

  // 📌 Bookmarked movies state with localStorage initialization
  const [bookmarkedMovies, setBookmarkedMovies] = useState(() => {
    const saved = localStorage.getItem('bookmarkedMovies');
    return saved ? JSON.parse(saved) : [];
  });

  // 📌 Bookmark toggle function

  const toggleBookmark = (movie) => {
    let updatedBookmarks;

    const existing = bookmarkedMovies.find((m) => m.id === movie.id);
    if (existing) {
      updatedBookmarks = bookmarkedMovies.filter((m) => m.id !== movie.id);
    } else {
      updatedBookmarks = [...bookmarkedMovies, movie];
    }

    setBookmarkedMovies(updatedBookmarks);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(updatedBookmarks));
  };

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  return (
    <div>
      <div className=' sm:flex sm:flex-row'>
        <div><Navbar /></div>

        <div className="px-4 py-4 sm:px-8 ">
          <div className='py-4 sm:py-12 sm:px-16 text-lg sm:text-3xl flex flex-row gap-6 '>
            <label htmlFor=""><FaSearch /></label>
            <input placeholder='Search for movies' className='bg-black' value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)} />
          </div>
          <h1 className=' sm:px-20 text-4xl'>Movies page</h1>
          <div>
            {currentMovies.length > 0 ? (
              <div className="px-4 py-4 sm:px-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
                {currentMovies
                  .filter((movie) => movie.primaryTitle.toLowerCase().includes(searchMovie.toLowerCase()))
                  .map((movie) => (
                    <div key={movie.id} className="relative hover:bg-slate-600 px-10 py-4 h-fit flex justify-center text-center">

                      {/* 📌 Bookmark Icon */}
                      <button
                        onClick={() => toggleBookmark(movie)}
                        className="absolute top-2 right-2 text-white text-2xl"
                      >
                        {bookmarkedMovies.find((m) => m.id === movie.id) ? <FaBookmark /> : <FaRegBookmark />}
                      </button>


                      <Link to={`/movies/${movie.id}/${movie.primaryTitle}`}>
                        <img src={movie.primaryImage} alt="" height="320px" width="320px" />
                        <div className='flex flex-row gap-2'>{movie.releaseDate} {movie.contentRating} {movie.type}</div>
                        <p className="text-3xl text-left">{movie.primaryTitle}</p>
                      </Link>
                    </div>
                  ))}
              </div>
            ) : (
              <p>NO Movies found</p>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center text-xl lg:text-3xl space-x-2 mt-6 pb-12">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 border rounded ${currentPage === 1 ? "bg-black cursor-not-allowed" : "bg-black"}`}
          >
            <MdKeyboardArrowRight className="rotate-180" />
          </button>

          <button className="px-3 py-2 border rounded bg-black">{currentPage}</button>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 border rounded ${currentPage === totalPages ? "bg-black cursor-not-allowed" : "bg-black"}`}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default Movies