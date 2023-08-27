import React from 'react'

const FrontPage = () => {
  return (
    <div className='fp-bg bg bg-dark p-5 pt-24 pl-10 pr-10 overflow-hidden'>
        <div className='bg-transparent md:w-[520px] md:pl-12'>
            <h1 className='bg-inherit font-bold text-5xl' data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p data-aos="fade-up" data-aos-delay="200" className='bg-inherit mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui nulla iusto debitis tenetur necessitatibus?</p>
            <button data-aos="fade-down-right" data-aos-delay="300" className='btn-primary mt-6 hover:bg-blue-300'>
                Join Us
            </button>
        </div>
    </div>
  )
}

export default FrontPage