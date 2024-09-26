import React from 'react'
import MovieRibbon from './MovieRibbon'
import { useSelector } from 'react-redux'

const GptSuggestions = () => {

  const recommendedMovies = useSelector(store => store?.gpt?.recommendedMovies)
  
  return (
    <div className='bg-black m-8 bg-opacity-90'>
      {
        recommendedMovies.map((item)=><MovieRibbon movieRibbonTitle={item.title} moviesTileList={item.data}/>)
      }

    </div>
  )
}

export default GptSuggestions