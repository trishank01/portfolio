import React from 'react'


const Hero = () => {
  return (
         <section id="home">
        <div className='flex h-screen w-[calc(100vw-300px)]'>
          <div className='my-auto ml-10 '>
            <h1 className='text-[42px] leading-[45px] mb-4 '>
              I'M A <span className="text-color-brand">FRONTEND WEB <br/> DEVELOPER</span> FROM <br/>
              DELHI INDIA
            </h1>
            <p className='text-[16px] mb-6'>
              I'm Trishank , and I craft high-performing  <br/> frontend products and deligtful
              experiences   <br/> tailored and conversion-focused
            </p>
            <div className='bg-color-brand inline-block px-3 py-4 rounded-md text-color-base2 font-base font-semibold cursor-pointer'>Explore My Work</div>       
          </div>
            <div className='w-[700px] ml-[50px] flex items-center'>
           
            </div>  
        </div>
      </section>
  
  )
}

export default Hero