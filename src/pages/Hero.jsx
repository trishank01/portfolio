import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
         <section id="home">
        <div className='flex h-screen '>
          <div className='my-auto  md:ml-[50px]'>
            <h1 className='text-[22px] pb-3 md:text-[42px] md:leading-[50px]'>
              I'M A <span className="text-color-brand">FRONTEND WEB <br/> DEVELOPER</span> FROM <br/>
              DELHI INDIA
            </h1>
            <p className='text-[14px] md:text-[16px] mb-6'>
              I'm Trishank , and I craft high-performing  <br/> frontend products and deligtful
              experiences   <br/> tailored and conversion-focused
            </p>
            <div className='bg-color-brand inline-block px-3 py-4 rounded-md text-color-base2 font-base font-semibold cursor-pointer'>
              <Link to="/work">Explore My Work</Link>
              </div>       
          </div>
            <div className='w-[700px] ml-[50px] flex items-center'>
            <iframe style={{width: "100%", height : "70%"}}  src="https://embed.lottiefiles.com/animation/70310"></iframe>
            </div>  
        </div>
      </section>
  
  )
}

export default Hero