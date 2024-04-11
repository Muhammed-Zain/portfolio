"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode } from 'react-icons/si'

const Skills = () => {

     const skills = [
          {
               text: "NextJs",
               icon: SiNextdotjs,
          },
          {
               text: "React",
               icon: SiReact,
          },
          {
               text: "Tailwind",
               icon: SiTailwindcss
          },
          {
               text: "NodeJs",
               icon: SiNodedotjs,
          },
          {
               text: "MongoDB",
               icon: SiMongodb,
          },
          {
               text: "Python",
               icon: SiPython,
          },
          {
               text: "JavaScript",
               icon: SiJavascript,
          },
          {
               text: "TypeScript",
               icon: SiTypescript,
          },
          {
               text: "VsCode",
               icon: SiVisualstudiocode
          }
     ]
     return (
          <div className='max-w-5xl mx-auto px-8'>
               <Title text="Skills 💯" className='flex flex-col items-center justify-center -rotate-6 text-4xl' />
               <HoverEffect items={skills} />
          </div>
     )
}

export default Skills