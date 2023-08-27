import React from 'react'

const Footer = () => {
  return (
    <div className="md:mt-10">
      <div className="footer">
        <div className="mb-5">
          <marquee>
            <div className='marq'>
                <div className="p-7 center">
                <h2 className="text-main">Project Name</h2>
                <p className="mb-5">A platform that works for you !</p>
                <a
                    href="mailto:alexzormelo9@gmail.com"
                    className="btn-primary mb-4"
                >
                    Send Us a message
                </a>
                </div>
                <div className="logo bg-transparent">
                <img
                    src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-foxy-logo-template-animal-animals-png-image_5611651.png"
                    alt="logo"
                    className="bg-transparent"
                />
                </div>
                <div className="p-7 center">
                <h2 className="text-main">Project Name</h2>
                <p className="mb-5">A platform that works for you !</p>
                <a
                    href="mailto:alexzormelo9@gmail.com"
                    className="btn-primary mb-4"
                >
                    Send Us a message
                </a>
                </div>
                <div className="logo bg-transparent">
                <img
                    src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-foxy-logo-template-animal-animals-png-image_5611651.png"
                    alt="logo"
                    className="bg-transparent"
                />
                </div>
            </div>
          </marquee>
        </div>
        <div className="p-5 bg-zinc-900 w-full">
          <div className="contactDetails bg-inherit">
            <div className="header bg-inherit">
              <h2 className="bg-inherit capitalize underline">useful links</h2>
            </div>
            <div className="bg-inherit">
              <ul className="bg-inherit md:flex items-center justify-around">
                <li className="bg-inherit mb-2 mt-2 md:m-0">
                  <a href="tel:+233 26 116 7890" className="bg-inherit">
                    Contact Us
                  </a>
                </li>
                <li className="bg-inherit mb-2 md:m-0">
                  <a href="#About" className="bg-inherit">
                    About Us
                  </a>
                </li>
                <li className="bg-inherit mb-4 md:m-0">
                  <a className="bg-inherit" href="#services">
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gray-950">
          <p className="bg-inherit">
            copyright &copy; 2023 DOM | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer