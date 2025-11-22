import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { WatchlistContext } from '../context/WatchlistContext'

const Navbar = () => {
  const {watchlist}= useContext(WatchlistContext);
  return (
    <>
    <nav className='bg-red-500 p-4 text-white flex justify-between fixed w-full top-0 z-10'>
        <Link to="/" className='text-xl font-bold'>Movie App</Link>
        <Link to="/Watchlist" className='text-xl'>Watchlist({watchlist.length})</Link>
        </nav>
        </>
  )
}

export default Navbar