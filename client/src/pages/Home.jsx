import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className=' sm:flex sm:flex-row'>
      <div><Navbar/></div>
      <div className="mx-4 my-4 sm:mx-8">Home</div>
      </div>
  )
}

export default Home