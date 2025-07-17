import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries'
import DetailPage from './pages/DetailPage'
import Bookmarks from './pages/Bookmarks'
import Auth from './pages/Auth'

const App = () => {
  return (
    <div className='bg-black text-white min-h-[100vh] max-w-[screen] p-4 sm:py-4 sm:px-8 ' >
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/tvseries' element={<TvSeries/>}/>
        <Route path='/detailpage' element={<DetailPage/>}/>
        <Route path='/bookmarks' element={<Bookmarks/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  )
}
export default App