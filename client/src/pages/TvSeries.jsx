import React from 'react'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { getTVseries } from '../action';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const TvSeries = () => {

   const tvseries = useSelector((state) => state.tvseries) || []
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTVseries())
  }, [dispatch])
  console.log(tvseries)

  return (
    <div className=' sm:flex sm:flex-row'>
      <div><Navbar/></div>
       <div className=" px-4 py-4 sm:px-8 grid sm:grid-cols-3 lg:grid-cols-4 gap-12 lg:p-10">
        {tvseries.map((tvserie) =>(
          <div key={tvserie.id} className="rounded-xl hover:bg-slate-600 px-10 py-4 h-fit flex justify-center text-center">
            <Link to={`/tvseries/${tvserie.id}/${tvserie.primaryTitle}`}>
                      <img src={tvserie.primaryImage}  alt="" height="350px" width="350px" className="" /> 
              <p className="text-2xl flex flex-row gap-10 mt-4">
                {tvserie.primaryTitle} 

              </p>
            </Link>
          </div>
        )
        )}

      </div>
      </div>
  )
}

export default TvSeries