import React from 'react'

const ChatMessage = ({name ,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2' >
       <img
          alt="user-icon"
          className="h-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28I-5H6sO1MTry1y5diYr9SBqiHBHFhPYM7TnaJOOfugjweDP"
        />
        <span className='font-bold px-2'>  {name} </span>
        <span> {message} </span>
    </div>
  )
}

export default ChatMessage
