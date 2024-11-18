import ParticlesContainer from '../components/ParticlesContainer';

import { Button, Divider } from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Fa4, Fa6, Fa8, Fa1, Fa0 } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiThrownKnife } from "react-icons/gi";
import { GiDwarfFace } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";
import { useState } from 'react';


function NameInput({ lable }) {

  return (
    <>
      <div class="flex flex-row gap-1 w-1/4 bg-white/80 rounded-md py-1 px-1">

        <input id="" placeholder={lable} name="" type="text" class="bg-inherit w-full focus:outline-none pl-1" />
      </div>

    </>
  )
}

function FourPlayer({ }) {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8'>
        <NameInput lable={'Player A'} />
        <div className='flex flex-row justify-between items-center'>
          <NameInput lable={'Player B'} />
          <GiCrossedSwords size={50} className="icon" />
          <NameInput lable={'Player B'} />
        </div>
        <NameInput lable={'Player A'} />
      </div>

    </>
  )
}

function SixPlayer({ }) {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-row justify-around -space-x-16 items-center '>
          <NameInput lable={'Player A'} />

          <NameInput lable={'Player B'} />
        </div>
        <div className='flex flex-row justify-between items-center'>
          <NameInput lable={'Player C'} />
          <GiCrossedSwords size={50} className="icon" />
          <NameInput lable={'Player C'} />
        </div>
        <div className='flex flex-row justify-around -space-x-16 items-center '>
          <NameInput lable={'Player B'} />

          <NameInput lable={'Player A'} />
        </div>
      </div>

    </>
  )
}

function EightPlayer({ }) {

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-row justify-between items-center '>
          <NameInput lable={'Player A'} />
          <NameInput lable={'Player D'} />
          <NameInput lable={'Player B'} />
        </div>
        <div className='flex flex-row justify-between items-center'>
          <NameInput lable={'Player C'} />
          <GiCrossedSwords size={50} className="icon" />
          <NameInput lable={'Player C'} />
        </div>
        <div className='flex flex-row justify-between items-center '>
          <NameInput lable={'Player B'} />
          <NameInput lable={'Player D'} />
          <NameInput lable={'Player A'} />
        </div>
      </div>

    </>
  )
}



function PlayGame({ isOpen, onOpenChange }) {

  const [mode , setMode] = useState(4);

  const modeHandler = (mode) => {

    setMode(mode)

  }

  return (
    <Modal
      isOpen={isOpen}
      backdrop='blur'
      onOpenChange={onOpenChange}
      placement="center"
      className='bg-gradient-to-tr from-transparent rounded-3xl via-[rgba(120,87,87,1.6)] to-transparent'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Game Settings</ModalHeader>
            <hr className='bg-green-800 w-11/12 mx-auto' />
            <ModalBody>

              <div className='flex flex-row text-gray-900 items-center gap-2 '>
                <BsFillPersonPlusFill size={25} />
                <h3 className=''>Players :</h3>
              </div>

              <div className='circle-container flex justify-center items-center mt-10 mb-16'>

                {
                  mode === 4 ?
                  <FourPlayer />
                  : mode === 6 ?
                  <SixPlayer /> :
                  <EightPlayer />
                }

              </div>

              <div className='flex flex-row gap-6 justify-center mb-8'>
                <Button onClick={() => modeHandler(4)} isIconOnly className={` rounded-full border ${mode === 4 ? 'bg-slate-400 bg-opacity-35' : null} border-success`} aria-label="Like">
                  <div className={`${mode === 4 ? 'text-gray-200' : 'text-gray-900'}`}>
                    <Fa4 />
                  </div>
                </Button>
                <Button  onClick={() => modeHandler(6)} isIconOnly className={` rounded-full border ${mode === 6 ? 'bg-slate-400 bg-opacity-35' : null} border-success`} aria-label="Like">
                <div className={`${mode === 6 ? 'text-gray-200' : 'text-gray-900'}`}>
                    <Fa6 />
                  </div>
                </Button>
                <Button  onClick={() => modeHandler(8)} isIconOnly className={` rounded-full border ${mode === 8 ? 'bg-slate-400 bg-opacity-35' : null} border-success`} aria-label="Like">
                <div className={`${mode === 8 ? 'text-gray-200' : 'text-gray-900'}`}>
                    <Fa8 />
                  </div>
                </Button>
              
              </div>




              {/* <div className="flex py-2 px-1 justify-between">
                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Remember me
                </Checkbox>

              </div> */}
            </ModalBody>
            <ModalFooter>
              <Button color="accent" variant="flat" onPress={onClose}>
                Close
              </Button>
              <Button className=' rounded-xl' color="secondary" onPress={onClose}>
                Play
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>

  );
}


const Home = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='bg-primary/60 h-full relative'> {/* Set 'relative' here */}
      <div className='w-full h-full -mt-0  bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='text-center flex flex-col justify-center xl:pt-40  xl:text-left h-full container mx-auto'>
          {/* Uncomment the title and paragraph if needed */}
          {/* <motion.h1 variants={fadeIn('down' , 0.2)} initial='hidden' animate='show' exit='hidden' className='h1  '> Time For Migration <br /> Into <span className=' text-blue-500'>Digital Reality :)</span></motion.h1>
          <motion.p variants={fadeIn('down' , 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl pb-[50px] mx-auto xl:mx-0 mb-10 xl:mb-16'>
          </motion.p > */}

          <div className='flex flex-col gap-8 w-3/4 mx-auto '>
            <button onClick={onOpen}
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10" // Added z-index
            >
              Play Game
            </button>
            <button
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10" // Added z-index
            >
              Settings
            </button>
            <button
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10" // Added z-index
            >
              Exit
            </button>


            <div className='z-10 bg-red-700'>

              <PlayGame isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>

          </div>
        </div>
      </div>



      <div className='w-full h-full absolute right-0 bottom-0 pointer-events-none'> {/* Add 'pointer-events-none' to disable interaction */}
        <div className='bg-none xl:bg-explosion animate-pulse xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;