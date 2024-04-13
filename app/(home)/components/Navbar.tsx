import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";


const Navbar = ({ className }: { className?: string }) => {

     const socials = [
          {
               link: "https://www.linkedin.com/in/muhammedzainjambagi/",
               label: "Linkedin",
               Icon: SiLinkedin
          },
          {
               link: "https://github.com/muhammed-Zain",
               label: "Github",
               Icon: SiGithub
          },
     ]
     return (
          <nav className={cn('pt-5 md:py-10  flex justify-between items-center pb-6 md:pb-20 lg:pb-0 animate-move-down', className)}>
               <h1 className='text-xl md:text-3xl  font-bold underline underline-offset-8 decoration-[#914d76] hover:-rotate-6 transition-all duration-300 ease-in-out'>Muhammed Zain 👨🏼‍💻</h1>
               <div className='flex items-center gap-5'>
                    {socials.map((social, index) => {
                         const Icon = social.Icon
                         return (
                              <Link href={social.link} key={index} aria-label={social.label} target="_blank">
                                   <Icon className='w-8 h-8 hover:scale-125 transition-all' />
                              </Link>
                         )
                    })}
               </div>
          </nav>
     )
}

export default Navbar