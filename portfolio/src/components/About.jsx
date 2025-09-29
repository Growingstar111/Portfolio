import React from "react";
import mernstack from "../assets/mernstack.png"
import Html from "../assets/Html.png"
import JS from "../assets/JS.png"
import CSS from "../assets/CSS.png"
import NodeLogo from "../assets/NodeLogo.png"
import React1 from "../assets/React1.png"
import Redux from "../assets/Redux.png"
import Tailwind from "../assets/Tailwind.png"
import mongodb from "../assets/mongodb.svg"
import Bootstrap from "../assets/Bootstrap.png"
import Express from "../assets/Express.png"
const About=()=>{
    return(
      <div className='relative' id='about'>
      <div className='bg-[#f8fafc] py-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='text-center'>
                  <h2 className='text-base text-[#2563eb] font-semibold tracking-wide uppercase'>About Me</h2>
                  <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#0f172a] sm:text-4xl'>Hi, I'm Vivek Sharma</p>
                  <p className='mt-4 max-w-2xl text-xl text-[#475569] lg:mx-auto'>
                      A Full-Stack Developer with expertise in the MERN stack.
                  </p>
              </div>
              <div className='mt-10'>
                  <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                      <div>
                          <h3 className='text-2xl font-semibold text-[#0f172a]'>My Journey</h3>
                          <p className='mt-4 text-lg text-[#334155]'>
                              My journey into web development began with a curiosity about how websites and applications are built. To pursue this passion, I completed 6 months of  MERN stack training, gaining hands-on experience with MongoDB, Express.js, React, and Node.js. During this time, I built several projects that helped me develop problem-solving skills and understanding of full-stack development.
                          </p>
                          <img src={mernstack} alt="" className='p-2 rounded-lg w-52 mt-4' />
                      </div>
                      <div className='border border-[#bfdbfe] rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-[#93c5fd]'>
                          <h3 className='text-2xl font-semibold text-[#2563eb]'>Skills & Expertise</h3>
                          <div className='flex items-center justify-center flex-wrap gap-3'>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={Html} alt="" className='w-10' />
                                  <span className='font-semibold'>HTML</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={CSS} alt="" className='w-8' />
                                  <span className='font-semibold'>CSS</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={JS} alt="" className='w-10' />
                                  <span className='font-semibold'>Javascript</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={React1} alt="" className='w-8 rounded-full' />
                                  <span className='font-semibold'>React</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={Redux} alt="" className='w-8' />
                                  <span className='font-semibold'>Redux</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={Tailwind} alt="" className='w-8 rounded-full' />
                                  <span className='font-semibold'>Tailwind Css</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={Bootstrap} alt="" className='w-10' />
                                  <span className='font-semibold'>Bootstrap</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={NodeLogo} alt="" className='w-10' />
                                  <span className='font-semibold'>Node Js</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={mongodb} alt="" className='w-10' />
                                  <span className='font-semibold'>Mongodb</span>
                              </div>
                              <div className='border border-[#93c5fd] flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-[#93c5fd]'>
                                  <img src={Express} alt="" className='w-10' />
                                  <span className='font-semibold'>Express Js</span>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
              <div className='mt-12'>
                  <h3 className='text-2xl font-semibold text-[#0f172a]'>More About Me</h3>
                  <p className='mt-4 text-lg text-[#334155]'>
                      Apart from coding, I’m passionate about building user-friendly web applications. I love learning new technologies, solving problems, and turning ideas into real projects.
                  </p>
              </div>
          </div>
      </div>
  </div>
    )
}
export default About;