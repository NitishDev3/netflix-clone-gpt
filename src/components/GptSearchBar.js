import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gptPageLang } from '../utils/languageConstants'
import model from '../utils/geminiAi'
import { addRecommendedMovies, removeRecommendedMovies } from '../utils/gptSlice'
import { MOVIES_OPTIONS } from '../utils/constant'

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config.selectedLanguage);
    const [searchText, setSearchText] = useState();
    const dispatch = useDispatch();

    const promptText = "Suggest me five " + searchText +
        " movies. Result should be comma separated movie names. Example Prompt: Suggest me five Indian Movies. Example Result: Don, Hera Pheri, Golmal, Koi Mil Gaya, Bahubali";


    const gptSearchClickHandle = async () => {
        dispatch(removeRecommendedMovies())
        const result = await model.generateContent(promptText);
        const resultArr = result.response.text().replace(/\s+/g,' ').trim().split(", ");
        resultArr.forEach(async(item)=>{
            const url = "https://api.themoviedb.org/3/search/movie?query="+ item +"&include_adult=false&language=en-US&page=1"
            const data = await fetch(url, MOVIES_OPTIONS);
            const res = await data.json();
            dispatch(addRecommendedMovies({title : item, data : res.results}))
        })
        // dispatch(addRecommendedMovies(resultArr))
    }

    return (
        <div className='flex justify-center'>
            <div className='pt-[10%] w-1/2'>
                <form
                    action=""
                    className='bg-black grid grid-cols-12 px-8 py-[30px]'
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text" placeholder={gptPageLang[selectedLang].gptSearchBarPlaceholder}
                        className='col-span-10 mx-2 px-1 bg-gray-300 bg-opacity-30 text-white'
                        onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                    <button
                        className='col-span-2 bg-red-600 text-white rounded-lg px-2 py-2 mx-2'
                        onClick={gptSearchClickHandle}
                    >{gptPageLang[selectedLang].gptSearchBtn}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar