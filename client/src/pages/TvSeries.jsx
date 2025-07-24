import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { getTVseries } from '../action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const TvSeries = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const tvseriesPerPage = 12
  const tvseries = useSelector((state) => state.tvseries) || []
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTVseries())
  }, [dispatch])
  console.log(tvseries)

   const indexOfLastTVseries = currentPage * tvseriesPerPage;
  const indexOfFirstTVseries = indexOfLastTVseries - tvseriesPerPage;
  const currentTVseries = tvseries.slice(indexOfFirstTVseries, indexOfLastTVseries);

  const totalPages = Math.ceil(tvseries.length / tvseriesPerPage);

  return (
    <div>
      <div className=' sm:flex sm:flex-row'>
        <div><Navbar /></div>
        <div className=" px-4 py-4 sm:px-8 grid sm:grid-cols-3 lg:grid-cols-4 gap-12 lg:p-10">
        {currentTVseries.length > 0 ? (
          currentTVseries.map((tvserie) => (
            <div key={tvserie.id} className="hover:bg-slate-600 px-10 py-4 h-fit flex justify-center text-center">
              <Link to={`/tvseries/${tvserie.id}/${tvserie.primaryTitle}`}>
                <img src={tvserie.primaryImage} alt="" height="350px" width="350px" className="" />
                <p className="text-2xl flex flex-row gap-10 mt-4">
                  {tvserie.primaryTitle}
                </p>
              </Link>
            </div>
          ))
        ):(
          <p>NO Movies found</p>
        )}

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

export default TvSeries