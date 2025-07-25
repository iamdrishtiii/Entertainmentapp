import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Bookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTVseries, setbookmarkedTVseries] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedMovies');
    if (saved) {
      setBookmarkedMovies(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    const saved = localStorage.getItem('bookmarkedTVseries');
    if (saved) {
      setbookmarkedTVseries(JSON.parse(saved));
    }
  }, []);


  const removeMovieBookmark = (id) => {
    const updated = bookmarkedMovies.filter(movie => movie.id !== id);
    setBookmarkedMovies(updated);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(updated));
  };

  const removeTVBookmark = (id) => {
    const updated = bookmarkedTVseries.filter(tv => tv.id !== id);
    setbookmarkedTVseries(updated);
    localStorage.setItem('bookmarkedTVseries', JSON.stringify(updated));
  };

  return (
    <div className='sm:flex sm:flex-row min-h-screen max-h-auto'>
      <div><Navbar /></div>
      <div>
        {token ? (
          <div>
            <div className="px-4 py-4 sm:px-8 w-full">
              <h1 className="text-3xl mb-6">Bookmarked Movies</h1>

              {bookmarkedMovies.length === 0 ? (
                <p>No bookmarked movies found.</p>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bookmarkedMovies.map((movie) => (
                    <div key={movie.id} className="relative hover:bg-slate-600 px-4 py-4">
                      {/* Remove button top-right */}
                      <button
                        onClick={() => removeMovieBookmark(movie.id)}
                        className="absolute top-4 right-4 text-red-500 text-xl font-bold"
                        title="Remove from bookmarks"
                      >
                        ✖
                      </button>

                      <Link to={`/movies/${movie.id}/${movie.primaryTitle}`}>
                        <img src={movie.primaryImage} alt="" height="200px" width="200px" />
                        <div className='flex flex-row gap-2'>{movie.releaseDate} {movie.contentRating} {movie.type}</div>
                        <p className="text-2xl text-left">{movie.primaryTitle}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="px-4 py-4 sm:px-8 w-full">
              <h1 className="text-3xl mb-6">Bookmarked Tvseries</h1>

              {bookmarkedTVseries.length === 0 ? (
                <p>No bookmarked tvseries found.</p>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bookmarkedTVseries.map((tvserie) => (
                    <div key={tvserie.id} className="relative hover:bg-slate-600 px-4 py-4">
                      {/* Remove button top-right */}
                      <button
                        onClick={() => removeTVBookmark(tvserie.id)}
                        className="absolute top-4 right-4 text-red-500 text-xl font-bold"
                        title="Remove from bookmarks"
                      >
                        ✖
                      </button>

                      <Link to={`/tvseries/${tvserie.id}/${tvserie.primaryTitle}`}>
                        <img src={tvserie.primaryImage} alt="" height="200px" width="200px" />
                        <div className='flex flex-row gap-2'>{tvserie.releaseDate} {tvserie.contentRating} {tvserie.type}</div>
                        <p className="text-2xl text-left">{tvserie.primaryTitle}</p>
                      </Link>
                    </div>
                  ))}

                </div>
              )}
            </div>
          </div>) : (
          <div className="text-[35px] text-gray-400 p-6 max-md:text-[22px] max-md:p-2">
            You need to login first , to enjoy bookmark functionality . . .
          </div>
        )}
      </div></div>
  )
}

export default Bookmarks
