import React from 'react'
import Github from '../assets/Github.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Cards = ({ item }) => {
    return (
        <div className='border border-[#3b82f6] rounded-lg w-[350px] lg:w-[400px] bg-[#eff6ff] '>
            {Array.isArray(item.image) && item.image.length > 1 ? (
              <div className="relative">
                <Swiper
                modules={[ Pagination]}
                spaceBetween={8}
                slidesPerView={1}
                pagination={{ clickable: true }}
               
                loop={true}
                className="rounded-t-xl my-swiper"
              >
                {item.image.map((imgSrc, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={imgSrc}
                      alt={`Project Image ${idx + 1}`}
                      className="w-full h-56 object-contain rounded-t-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
             
              </div>
            ) : (
              <img src={Array.isArray(item.image) ? item.image[0] : item.image} alt="" className='w-full h-56 object-contain rounded-t-xl' />
            )}
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex justify-between mt-4 px-4'>
                    <button className='bg-[#3b82f6] text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button>
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
