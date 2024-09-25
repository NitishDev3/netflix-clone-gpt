import React from 'react'
import { MOVIETILEURL } from '../utils/constant'

const MovieTile = ({posterPath}) => {
  return (
    <div className='w-48 mx-[3px] my-2'>
        <img
        className='' 
        src={MOVIETILEURL + posterPath} alt="" />
    </div>
  )
}

export default MovieTile