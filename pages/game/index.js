//  data
import React, { useState } from 'react';


import {

  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaMicrosoft,


} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiCsharp,
  SiCplusplus,
  SiMongodb,
  SiReactquery,
  SiMicrosoftsqlserver,
  SiRedux,
  SiLinux,
  SiDotnet,
  SiBlazor,
  SiFramer,
  SiAdobephotoshop,
  SiTailwindcss,

} from 'react-icons/si';


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'BackEnd Skills : ',
        icons: [
          <SiDotnet key={2} />,
          <SiCsharp key={2} />,
          <SiLinux key={2} />,
          <FaMicrosoft key={2} />,
          <FaJs key={2} />,
          <SiMicrosoftsqlserver key={2} />,
          <SiMongodb key={2} />,

          <SiCplusplus key={2} />,


        ],
      },
      {
        title: 'Front Skills :',
        icons: [
          <SiBlazor key={2} />,
          <FaReact key={2} />,
          
          <SiRedux key={2} />,
          <SiFramer key={2} />,
          <SiNextdotjs key={2} />,
          <SiTailwindcss key={2} />,
          <SiReactquery key={2} />,
          <FaFigma key={2} />,
          <SiAdobephotoshop key={2} />,
          <FaWordpress key={2} />],

      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={2} />, <SiAdobephotoshop key={2} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'ICPC of Ferdowsi university',
        stage: '',
      },
      {
        title: 'ICPC of Sajjad university',
        stage: '',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'fronted developer - Moein Software Group ',
        stage: '2024',
      },
      {
        title: 'Intern - Cycass Company',
        stage: '2023',
      },
      {
        title: 'Web Developer - Freelancing ',
        stage: '2021 - 2023',
      },
      {
        title: 'Teaching - Schools & State cultural centers',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Mathematics diploma - Mashhad, ZendeYadSadeghi HS, IR',
        stage: '2022',
      },
      {
        title: 'Computer Engineering - Mashhad, Ferdowsi University Of Mashhad',
        stage: '2023',
      },
      {
        title: 'Certified Graphic Designer And Teaching Programming - Mashhad , Fum',
        stage: '2023',
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles';


import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import { icons } from 'react-icons';

import CountUp from 'react-countup';

const Game = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-[800px] bg-primary/30  text-center xl:text-left  '>
      <Circles />
      <div className=' container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
        <div className='  mt-[150px] mb-[50px] xl:mt-[20px] flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className=' h2'>
            The Story Of <span className=' text-accent'>My Life</span>  how it started as Developer.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='  max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>
            4 years ago, I began freelancing as a Developer. Since then, i have
            done remote work for agencies, counsulted for startups, and
            collabrated on digital products for business and consumer use.
          </motion.p>
          <motion.div className=' hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 -mb-[100px]  '>
            <div className='flex flex-1 xl:gap-x-6'>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={4} duration={5} /> +

              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years Of Experience</div>


              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={25} duration={5} /> +

              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>



              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                <CountUp start={0} end={10} duration={5} /> +

              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Language & FrameWorks</div>


            </div>

          </motion.div>
        </div>
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col items-center w-full  -mt-12 xl:max-w-[48%] h-[480px] '>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 lg:mt-[150px]  '>
            {aboutData.map((item, itemIndex) => {
              return <div key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}>{item.title}</div>;
            })}
          </div>
          <div className=' xl:py-10 flex flex-col place-items-center gap-y-2 xl:gap-y-4 
        '>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 '>
                  <div className='font-light mb-2 mr-2 md:mb-0'>{item.title}</div>
                  <div className=' hidden md:flex'></div>
                  <div>{item.stage}</div>
                  <div className=' flex gap-x-4 '>

                    {item.icons?.map((icon, itemIndex) => {
                      return <div className='text-2xl text-white' key={itemIndex}>{icon}</div>
                    })}


                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>



      </div>
    </div>
  );
};

export default Game;
