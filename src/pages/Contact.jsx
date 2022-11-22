import React from 'react'

const Contact = () => {
  return (
    <section className='flex w-[84vw]  h-screen justify-center items-center'>
      <div>
        <h2 className='text-[20px] text-color-brand  flex justify-center'>CONTACT</h2>
        <h2 className='text-[30px] flex justify-center'>Let's talk</h2>
        <div className=' w-[800px] h-[500px]'>
        <form>
          <div className='m-8'>
            <input className='p-4 mx-4 w-[42%] bg-color-base' type="text" placeholder='Enter your name'/>
            <input className='p-4 mx-4 w-[42%] bg-color-base' type="email" placeholder='Enter your Email'/>
          </div>
          <div className='m-8'>
            <input  className='p-4 mx-4 w-[88%] bg-color-base' type="text" placeholder='Enter your Subject'/>
          </div>
          <div className='m-8'>
              <textarea className='p-4 mx-4 w-[88%] bg-color-base'  cols="10" rows="3"></textarea>
          </div>
          <div className='m-8'>
             <button className='p-4 mx-4 w-[88%] bg-color-brand2 text-color-base2 font-bold'>Contact me</button>
          </div>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact