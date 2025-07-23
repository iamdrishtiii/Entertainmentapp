import React from 'react'
import Navbar from '../components/Navbar'
const Bookmarks = () => {
  return (
     <div className='sm:flex sm:flex-row'>
      <div><Navbar /></div>
      <div className="px-4 py-4 sm:px-8">Bookmarks</div>
      </div>
  )
}

export default Bookmarks