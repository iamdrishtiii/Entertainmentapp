import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaLink } from 'react-icons/fa'
const DetailPage = () => {

  const movies = useSelector((state) => state.movies)
  const params = useParams()
  const movieData = movies.filter((movie) => {
    return movie.id === params.id
  })
  console.log(movieData)
  const tvseries = useSelector((state) => state.tvseries)
  const param = useParams()
  const tvData = tvseries.filter((tvserie) => {
    return tvserie.id === param.id
  })
  console.log(tvData)
  return (
    <div className=' sm:flex sm:flex-row'>
      <div className="px-4 sm:px-8 h-auto md:h-screen pb-[450px] 3xl:pb-48 md:pb-64">

        {/*Displaying Movie data */}
        {movieData.map((movie) => {
          return <div className='left  text-xl sm:text-2xl md:flex md:flex-row md:gap-6'>
            <div className=' font-bold flex flex-col '>
              <img src={movie.primaryImage} alt="" className='item-center pt-10 w-[300px] sm:w-[400px] lg:w-[500px]' /></div> <br />
            <div>
              <div>
                <p className='text-5xl lg:text-7xl'>{movie.primaryTitle}</p> <br />
                <p>{movie.averageRating}</p> <br />
                <p className="font-semibold">
                  Length: {movie.runtimeMinutes}  <br />Language: {movie.spokenLanguages} <br />Year: {movie.releaseDate}
                </p><br />
                <h2 className="font-semibold">Synopsis</h2>
                {movie.description} <br />  <br />
                <h2 className="font-semibold">Interest</h2>
                {movie.interests}
              </div> <br /> <br />

              <div className="space-x-16 flex flex-row">
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl flex flex-row gap-2"><a href={movie.externalLinks}> Website <FaLink /> </a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl gap-2"><a href={movie.url}>imDb</a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl"><a href={movie.trailer}>Trailer</a></button>
              </div>
            </div>

          </div>
        })}

        {/*Displaying tvserie data */}
        {tvData.map((tvserie) => {
          return <div className='left p-5  text-xl sm:text-2xl lg:flex lg:flex-row'>
            <div className=' font-bold lg:w-5/12 flex flex-col '>
              <img src={tvserie.primaryImage} alt="" className='w-10/12 item-center pt-10' /></div> <br />
            <div>
              <div>
                <p className='text-5xl lg:text-7xl'>{tvserie.primaryTitle}</p>  <br />
                <p>{tvserie.averageRating}</p> <br />
                <p className="flex flex-row gap-8 lg:gap-16 font-semibold">
                  Length:{tvserie.runtimeMinutes} <br />Language:{tvserie.spokenLanguages} <br />Year: {tvserie.releaseDate}
                </p>  <br />
                <h2 className="font-semibold">Synopsis</h2>
                {tvserie.description} <br />  <br />
                <h2 className="font-semibold">Interest</h2>
                {tvserie.interests}
              </div> <br /> <br />

              <div className="flex flex-row gap-4">
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl flex flex-row gap-2"><a href={tvserie.externalLinks}> Website <FaLink /> </a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl"><a href={tvserie.url}>imDb</a></button>
                <button className="bg-gray-700 px-4 py-2 font-semibold rounded-xl"><a href={tvserie.trailer}>Trailer</a></button>
              </div>
            </div>
          </div>
        })}

      </div>

    </div>
  )
}

export default DetailPage