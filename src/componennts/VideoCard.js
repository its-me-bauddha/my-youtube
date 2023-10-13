import React from 'react'

const VideoCard = ({info}) => {
   const {title ,thumbnails,channelTitle} = info.snippet;
   const {viewCount} = info.statistics;
  return (
    <div className='p-3 mx-4  ml-5  shadow-lg w-[250px]'>
     <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
   
    <ul>
        <li className='font-bold py-2'> {title}</li>
        <li> {channelTitle} </li>
        <li>{viewCount} Views</li>
       
    </ul> 
    </div>
  )
}

export default VideoCard
