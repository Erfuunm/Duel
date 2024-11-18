// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb13.jpg',
        },
        {
          title: 'title',
          path: '/smart.jpg',
        },
        {
          title: 'title',
          path: '/smart2.jpg',
        },
        {
          title: 'title',
          path: '/thumb15555.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb42.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.png',
        },
        {
          title: 'title',
          path: '/thumb25.jpg',
        },
        {
          title: 'title',
          path: '/thumb44.jpg',
        },
      ],
    },
  ],
};







// data

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs'

import Image from 'next/image';
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      //  modules={[ pagination]}
      className='h-[480px] sm:h[480px]  mt-[400px] lg:mt-20'
    >
      {
        workSlides.slides.map((slide, index) => {

          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-row-2 mt-10 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return <div className='relative rounded-lg overflow-hidden flex items-center justify-center 
                  group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group '>
                      <div className='md:h-[150px] h-full'>
                        <Image src={image.path} width={500} height={100} alt='' />
                      </div>
                      <div className=' absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700'>
                      </div>
                      <div className=' absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 
                       transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className=' delay-100'>Live</div>
                          <div className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
