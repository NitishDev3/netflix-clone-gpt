import React from 'react'
import { useSelector } from 'react-redux'
import { gptPageLang } from '../utils/languageConstants'

const GptSearchBar = () => {
    const selectedLang = useSelector(store=>store.config.selectedLanguage)
    return (
        <div className='flex justify-center'>
            <div className='pt-[10%] w-1/2'>
                <form 
                action="" 
                className='bg-black grid grid-cols-12 px-8 py-[30px]'
                onSubmit={e=>e.preventDefault()}
                >
                    <input
                        type="text" placeholder= {gptPageLang[selectedLang].gptSearchBarPlaceholder}
                        className='col-span-10 mx-2 px-1'
                    />
                    <button
                        className='col-span-2 bg-red-600 text-white rounded-lg px-2 py-2 mx-2'
                    >{gptPageLang[selectedLang].gptSearchBtn}</button>
                </form>
            </div>
        </div>
    )
}

export default GptSearchBar