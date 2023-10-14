import React from 'react'

const VideoCard = ({info}) => {
   const {title ,thumbnails,channelTitle} = info.snippet;
   const {viewCount} = info.statistics;
   const length = title.length;
   const substr = title.substring(0,40) + "...";
  return (
    <div className='p-0 mx-4  ml-5 mt-7  shadow-lg w-[250px]   h-[250px] '>
     <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
   
    <ul className='px-3'>
        <li className='font-bold py-2'> {(length < 40) ?  title :substr} </li>
        <li> {channelTitle} </li>
        <li>{viewCount} Views</li>
       
    </ul> 
    </div>
  )
}

export default VideoCard
