import React from 'react'
import Linkedin from './images/linkedin.svg'
import Instagram from './images/instagram.svg'
import Github from './images/github.svg'
import HamedMoradi from './images/hamedmoradi.webp'
export default function ContactMe() {
  return (
        <div id="aboutMe" class="hidden lg:flex flex-wrap w-[200px] h-[250px] justify-center items-center fixed right-2 bottom-2 bg-[#2d2d2d] gap-2 p-5 rounded-2xl text-white animate-bounce cursor-pointer">
        <h2 class="w-full text-center text-2xl">Developed by Hamed Moradi</h2>
        <figure className='h-25 w-25 rounded-full overflow-hidden flex justify-center items-center'>
        <img src={HamedMoradi} alt="" />
        </figure>
        <div class="flex justify-evenly w-full">
            <a class="" href="https://www.linkedin.com/in/haamedmoradiidev/"><img class="h-6" src={Linkedin} alt="" /></a>
            <a class="" href="https://github.com/hamedmoradidev"><img class="h-6" src={Github} alt="" /></a>
            <a class="" href="https://instagram.com/hamed.moradi.dev"><img class="h-6" src={Instagram} alt="" /></a>    
        </div>
        </div>  
  )
}
