import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center overflow-hidden' id="About">
    <div className="p-2 pt-20 md:pr-20 pb-10">
      <div>
        <h1 className="text-main">Lorem ipsum dolor sit amet.</h1>
        <p className="text-secondary mt-4 md:mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          minus necessitatibus voluptatum...
        </p>
      </div>
      <div className="cards mt-8 md:flex md:gap-7">
        <div className="one flex md:block gap-2">
          <div className="card h-48 w-48 lg:w-72 rounded-lg relative bg bg-one bg-dark" data-aos="fade-right">
            <div className="top-0 absolute bg-transparent p-2 pt-6">
              <h2 className="bg-inherit">Lorem, ipsum.</h2>
            </div>
            <div className="bottom-0 right-0 absolute bg-transparent p-2 pb-4">
              <h2 className="bg-inherit">Lorem, ipsum.</h2>
              <p className="bg-inherit text-sm">Lorem, ipsum.</p>
            </div>
          </div>
          <div className="card h-48 w-48 lg:w-72 rounded-lg bg bg-four md:mt-5 bg-dark" data-aos="fade-right">
            <div className="top-0 absolute bg-transparent p-2 pt-6">
              <h2 className="bg-inherit text-xl font-semibold">Lorem, ipsum.</h2>
              <p className='bg-inherit text-sm'>Lorem ipsum dolor sit amet consectetur .qua</p>
            </div>
          </div>
        </div>
        <div className="two flex justify-center">
          <div className="card h-48 mt-3 md:mt-0 md:h-[395px] w-72 md:w-64 rounded-lg bg bg-two bg-dark" data-aos="fade-up">
            <div className="top-0 absolute bg-transparent p-2 pt-6">
              <h2 className="bg-inherit text-2xl">Lorem, ipsum.</h2>
              <p className='bg-inherit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet. Nesciunt qua</p>
            </div>
          </div>
        </div>
        <div className="three flex md:block gap-2">
          <div className="card h-48 w-48 lg:w-72 rounded-lg bg bg-three mt-3 md:mt-0 bg-dark" data-aos="fade-left">
            <div className="top-0 absolute bg-transparent p-2 pt-6">
              <h2 className="bg-inherit text-xl font-semibold">Lorem, ipsum.</h2>
              <p className='bg-inherit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet. Nesciunt qua</p>
            </div>
          </div>
          <div className="card h-48 w-48 md:w-64 rounded-lg bg bg-five md:mt-4 mt-3 bg-dark" data-aos="fade-left">
            <div className="top-0 absolute bg-transparent p-2 pt-6">
              <h2 className="bg-inherit text-xl font-semibold">Lorem, ipsum.</h2>
              <p className='bg-inherit text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, amet. Nesciunt qua Lorem ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About