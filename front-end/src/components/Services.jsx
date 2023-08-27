import React from 'react'
import phones from '../assets/images/phones.png'

const Services = () => {
  return (
    <div className='p-5 pb-10 md:flex justify-center pt-10 md:mt-10 overflow-hidden'>
        <div>
            <div>
                <h1 className='text-main'>Lorem ipsum dolor sit consectetur. repellendus?</h1>
                <p className='text-secondary mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem molestiae, iure cupiditate vel laudantium ipsam.</p>
            </div>
            <div className='md:flex md:mt-6 items-center'>
                <div className='mt-6 w-full flex justify-center md:w-[400px]' data-aos="flip-left">
                    <img src={phones}  className='w-[300px] object-cover object-center' alt="" />
                </div>
                <div className='mt-4'>
                    <div>
                        <p className='md:w-[400px]' data-aos="fade-left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti perspiciatis officiis alias nostrum ducimus iste ullam sequi consequuntur impedit quaerat!
                        </p>
                    </div>
                    <div className='mt-4 bg-gray-900 p-7 rounded-lg w-full md:w-[400px]' data-aos="fade-left" data-aos-delay="200">
                        <div className='bg-inherit flex items-center gap-5'>
                            <div className='bg-inherit text-2xl'>4,9</div>
                            <div className='bg-inherit'>
                                <div className='bg-inherit'>⭐⭐⭐⭐</div>
                                <div className='bg-inherit'>Lorem ipsum</div>
                            </div>
                        </div>
                        <div className='bg-inherit mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services