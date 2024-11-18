// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Roya',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Hanie',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'AmirReza',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];





// data

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';

 import { pagination} from 'swiper';

 import { FaQuoteLeft} from 'react-icons/fa'

import Image from 'next/image';
const TestmonialSlider = () => {
 return (
   <Swiper
       
       pagination={{
         clickable: true,
       }}
      //  modules={[ pagination]}
       className='h-[480px] xl:h-[480px]  mt-[100px] lg:mt-20'
       >
         {
           testimonialData.map((person,index)=> {

             return (
             <SwiperSlide key={index}>
               <div className=' flex flex-col items-center md:flex-row gap-x-8 h-full px-16 -mt-[150px] '>
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto 
                 xl:mx-0 '>
                  <div className=' flex flex-col justify-center text-center'>
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    <div className='text-lg'>{person.name}</div>
                    <div className='text-[12px] uppercase font-extralight tracking-widest '>
                      {person.position}
                    </div>
                  </div>
                </div>

                <div className=' flex-1 flex flex-col justify-center before:w-[1px]
                 xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                xl:before:h-[200px] relative xl:pl-20 '> 
                  <div className='mb-4'><FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                  md:mx-0'/>
                  </div>
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                   </div>
               </div>
             </SwiperSlide>
             );
           })
         }     
   </Swiper>
 );
};

export default TestmonialSlider;

