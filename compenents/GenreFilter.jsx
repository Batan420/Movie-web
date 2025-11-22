import React, { useContext } from 'react'


const GenreFilter = ({ genreList }) => {
    
  return (
    <select name='' id='' className='p-2 mb-4 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border rounded'>
        {genreList.map(genre=>
            <option key={genre.id} value={genre.id}>{genre.name}</option>
        )}
    </select>
  )
}

export default GenreFilter