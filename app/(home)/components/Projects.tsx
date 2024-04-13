import React from 'react'
import { SiJsonwebtokens, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

const Projects = () => {

     const projects = [
          {
               title: "Belindo: AI Image Platform",
               tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiStripe],
               link: "https://belindo.vercel.app/",
               cover: "/belindo-cover.png",
               background: "bg-indigo-500"
          },
          {
               title: "Blog Application",
               tech: [SiReact, , SiTailwindcss, SiMongodb, SiNodedotjs, SiJsonwebtokens],
               link: "https://blog-application-fullstack.vercel.app/",
               cover: "/blog-cover.png",
               background: "bg-green-500"
          }
     ]
     return (
          <div className='py-10 p-5 sm:p-0'>
               <Title text='Projects 🏢' className='flex flex-col items-center justify-center hover:-rotate-12 transition-all duration-500 ease-in-out text-4xl mt-20' />

               <div className='grid  grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                    {projects.map((project, index) => {
                         return <Link key={index} href={project.link} target="_blank">
                              <div className={cn("p-3 rounded-2xl", project.background)}>
                                   <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                                        <div className='space-y-5'>
                                             <h1 className='text-2xl font-bold'>{project.title}</h1>
                                             <div className='flex items-center gap-5'>
                                                  {project.tech.map((Icon: any, index) => {
                                                       return <Icon key={index} className="w-8 h-8" />
                                                  })}
                                             </div>
                                        </div>

                                   </DirectionAwareHover>
                              </div>
                         </Link>
                    })}
               </div>
          </div>
     )
}

export default Projects