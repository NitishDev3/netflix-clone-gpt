import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { BG_IMG_URL } from '../utils/constant'

const GptPage = () => {
    return (
        <div>
            <div
                className="fixed opacity-100 -z-10"
            ><img src={BG_IMG_URL} alt="" /></div>
            <GptSearchBar />
            <GptSuggestions />
        </div>
    )
}

export default GptPage