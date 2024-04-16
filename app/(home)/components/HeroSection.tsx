import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import { TextGenerateEffect } from '@/components/ui/text-generate-effext'

const HeroSection = () => {

     const textGenerateWord = " Based in Bangalore, I am a Fullstack developer passionate about building modern web applications that clients love."

     return (
          <div className='min-h-[50vh] md:min-h-[60vh] gap-14 flex flex-col-reverse items-center justify-between lg:flex-row lg:gap-0 animate-move-up' >
               <div className='space-y-10 text-center lg:text-left'>
                    <div className='text-4xl lg:text-7xl font-bold mt-10 md:mt-0'>
                         Nice to meet you! <span className='hidden md:inline-block'>👋</span><br /> <span className='underline underline-offset-8 decoration-[#914d76]'>{"I'm Muhammed Zain."}</span>
                    </div>
                    <div className='lg:w-[75%] font-bold md:text-3xl text-lg text-gray-600'>
                         <TextGenerateEffect words={textGenerateWord} />
                    </div>
                    <div className='flex gap-5 flex-col md:flex-row justify-center lg:justify-start items-center md:items-start'>
                         <Link href={"mailto:mohdzain2002@gmail.com"} target="_blank" className='inline-block group mb-12 md:mb-0'>
                              <Title text='Contact Me! 📫' className='text-3xl flex flex-col sm:items-center md:items-start' />
                         </Link>
                         <MovingBorderBtn
                              borderRadius="1rem"
                              className="p-3 font-semibold group-hover:bg-[#0f172a]/15 transition-all duration-500 ease-in-out group-hover:backdrop-blur-lg"
                         >
                              <Link href={"https://drive.google.com/file/d/1yEiN4QOuIaMVxNkhKO_7GksyzBghr8sh/view"} target="_blank">
                                   <h1 className='text-xl flex justify-center items-center gap-5 '>
                                        <svg width="10%" height="10%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                             <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                             <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                             <g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#f3ffbd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#f3ffbd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </g>

                                        </svg> <div>Download Resume</div></h1>
                              </Link>
                         </MovingBorderBtn>
                    </div>

               </div>

               <div className='relative hidden md:flex'>
                    <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                         <div className='flex gap-3 translate-x-8'>
                              <div className='w-32 h-32 rounded-2xl bg-[#f3ffbd]'>

                              </div>
                              <div className='w-32 h-32 rounded-full bg-[#914d76]'>

                              </div>
                         </div>
                         <div className='flex gap-3 -translate-x-8'>
                              <div className='w-32 h-32 rounded-2xl bg-[#914d76]'>

                              </div>
                              <div className='w-32 h-32 rounded-full bg-[#f3ffbd]'>

                              </div>
                         </div>
                         <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                    </div>

               </div>

          </div>
     )
}

export default HeroSection