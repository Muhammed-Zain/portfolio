import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
     let date = new Date();

     return (
          <div className='border-t mt-10'>
               <Navbar className='flex-col gap-10 pb-10 md:pb-5 lg:pb-5' />
               <div className='text-center  text-xl md:my-8 lg:my-8 pb-10'>
                    &#169; {date.getFullYear()}
               </div>
          </div>
     )
}

export default Footer