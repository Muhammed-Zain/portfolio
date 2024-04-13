import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const HeroSection = () => {
     return (
          <div className='min-h-[50vh] md:min-h-[60vh] gap-14 flex flex-col-reverse items-center justify-between lg:flex-row lg:gap-0 animate-move-up' >
               <div className='space-y-10 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-7xl font-bold mt-10 md:mt-0'>
                         Nice to meet you! <span className='hidden md:inline-block'>👋</span><br /> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Muhammed Zain."}</span>
                    </h1>
                    <p className='md:w-96 text-lg text-gray-300'>
                         {"Based in Bangalore, I'm a Fullstack developer passionate about building modern web applications that clients love."}
                    </p>
                    <div className='md:flex gap-5'>
                         <Link href={"mailto:mohdzain2002@gmail.com"} target="_blank" className='inline-block group mb-12 md:mb-0'>
                              <Title text='Contact Me! 📫' className='text-3xl' />
                         </Link>
                         <MovingBorderBtn
                              borderRadius="0.5rem"
                              className="p-3 font-semibold group-hover:bg-[#0f172a]/15 transition-all duration-500 ease-in-out group-hover:backdrop-blur-lg"
                         >
                              <Link href={"https://drive.google.com/file/d/1yEiN4QOuIaMVxNkhKO_7GksyzBghr8sh/view"} target="_blank">
                                   ⬇️ Download Resume
                              </Link>
                         </MovingBorderBtn>
                    </div>

               </div>

               <div className='relative hidden md:flex'>
                    <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                         <div className='flex gap-3 translate-x-8'>
                              <div className='w-32 h-32 rounded-2xl bg-green-500'>

                              </div>
                              <div className='w-32 h-32 rounded-full bg-indigo-500'>

                              </div>
                         </div>
                         <div className='flex gap-3 -translate-x-8'>
                              <div className='w-32 h-32 rounded-2xl bg-indigo-500'>

                              </div>
                              <div className='w-32 h-32 rounded-full bg-green-500'>

                              </div>
                         </div>
                         <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                    </div>

               </div>

          </div>
     )
}

export default HeroSection