import ParticlesContainer from '../components/ParticlesContainer';

import { Button, Divider } from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { Fa4, Fa6, Fa8, Fa1, Fa0 } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiThrownKnife } from "react-icons/gi";
import { GiDwarfFace } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";

function NameInput() {

  return (
    <>
      <div class="flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
        <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
          <path
            d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
            fill="#000000"
          ></path>
        </svg>
        <input id="" name="" type="text" class="bg-inherit focus:outline-none pl-1" />
      </div>

      <div class="flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
        <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
          <path
            d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
            fill="#000000"
          ></path>
        </svg>
        <input id="" name="" type="text" class="bg-inherit focus:outline-none pl-1" />
      </div>

      <div class="flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
        <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
          <path
            d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
            fill="#000000"
          ></path>
        </svg>
        <input id="" name="" type="text" class="bg-inherit focus:outline-none pl-1" />
      </div>

      <div class="flex flex-row gap-1 bg-white/80 rounded-md py-1 px-1">
        <svg viewBox="0 0 344 384" height="26.72093023255814" width="24">
          <path
            d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
            fill="#000000"
          ></path>
        </svg>
        <input id="" name="" type="text" class="bg-inherit focus:outline-none pl-1" />
      </div>
    </>
  )
}

function PlayGame({ isOpen, onOpenChange }) {
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

              <div className='flex justify-center items-center mt-10 mb-16'>
                <GiCrossedSwords size={50} color='' />


              </div>

              <div className='flex flex-row gap-6 justify-center mb-8'>
                <Button isIconOnly className=' rounded-full border border-zinc-200' aria-label="Like">
                  <div className='text-gray-200'>
                    <Fa4 />
                  </div>
                </Button>
                <Button isIconOnly className=' rounded-full border border-success' aria-label="Like">
                  <div className='text-gray-900'>
                    <Fa6 />
                  </div>
                </Button>
                <Button isIconOnly className=' rounded-full border border-success' aria-label="Like">
                  <div className='text-gray-900'>
                    <Fa8 />
                  </div>
                </Button>
                <Button isIconOnly className=' rounded-full border border-success' aria-label="Like">
                  <div className='text-gray-900 flex -space-x-1 '>
                    <Fa1 />
                    <Fa0 />
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