import React from 'react'

const Title = ({title, overview}) => {
  return (
    <div className="pt-[22%] w-full aspect-video pl-8 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="w-1/3 mt-6 mb-10">{overview}</p>
        <div>
            <button className="bg-white text-black py-3 px-8 rounded-md font-semibold bg-opacity-60 hover:bg-opacity-85">▶️Play</button>
            <button className="bg-slate-500 py-3 px-6 rounded-md ml-3 font-medium bg-opacity-45 hover:bg-opacity-60">ℹ️More Info</button>
        </div>
    </div>
  )
}

export default Title