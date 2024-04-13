import React from 'react'

const Title = ({ text, className, }: { text: string, className?: string }) => {
     return (
          <div className={className}>
               <h1 className='font-bold group-hover:text-[#914d76] transition-all'>{text}</h1>
               <div className='w-40 h-2 bg-[#914d76] rounded-full '></div>
               <div className='w-40 h-2 bg-[#f3ffbd] rounded-full translate-x-2'></div>
          </div>
     )
}

export default Title