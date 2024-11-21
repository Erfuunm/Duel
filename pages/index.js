import ParticlesContainer from '../components/ParticlesContainer';
import { Button } from '@nextui-org/react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Fa4, Fa6, Fa8 } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GiCrossedSwords } from "react-icons/gi";
import { useState } from 'react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Nav from '../components/Nav';
import Header from '../components/Header';

// Name input component
function NameInput({ label, value, onChange }) {
  return (
    <div className="flex flex-row gap-1 w-1/4 bg-white/80 rounded-md py-1 px-1">
      <input
        placeholder={label}
        type="text"
        className="bg-inherit w-full focus:outline-none pl-1"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// Four player component
function FourPlayer({ playerNames, playerChangeHandlers }) {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <NameInput label={'Player A'} value={playerNames[0]} onChange={playerChangeHandlers[0]} />
      <div className='flex flex-row justify-between items-center'>
        <NameInput label={'Player B'} value={playerNames[1]} onChange={playerChangeHandlers[1]} />
        <GiCrossedSwords size={50} className="icon" />
        <NameInput label={'Player C'} value={playerNames[2]} onChange={playerChangeHandlers[2]} />
      </div>
      <NameInput label={'Player D'} value={playerNames[3]} onChange={playerChangeHandlers[3]} />
    </div>
  );
}

// Six player component
function SixPlayer({ playerNames, playerChangeHandlers }) {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-row justify-around -space-x-16 items-center'>
        <NameInput label={'Player A'} value={playerNames[0]} onChange={playerChangeHandlers[0]} />
        <NameInput label={'Player B'} value={playerNames[1]} onChange={playerChangeHandlers[1]} />
      </div>
      <div className='flex flex-row justify-between items-center'>
        <NameInput label={'Player C'} value={playerNames[2]} onChange={playerChangeHandlers[2]} />
        <GiCrossedSwords size={50} className="icon" />
        <NameInput label={'Player D'} value={playerNames[3]} onChange={playerChangeHandlers[3]} />
      </div>
      <div className='flex flex-row justify-around -space-x-16 items-center'>
        <NameInput label={'Player E'} value={playerNames[4]} onChange={playerChangeHandlers[4]} />
        <NameInput label={'Player F'} value={playerNames[5]} onChange={playerChangeHandlers[5]} />
      </div>
    </div>
  );
}

// Eight player component
function EightPlayer({ playerNames, playerChangeHandlers }) {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <div className='flex flex-row justify-between items-center'>
        <NameInput label={'Player A'} value={playerNames[0]} onChange={playerChangeHandlers[0]} />
        <NameInput label={'Player B'} value={playerNames[1]} onChange={playerChangeHandlers[1]} />
        <NameInput label={'Player C'} value={playerNames[2]} onChange={playerChangeHandlers[2]} />
      </div>
      <div className='flex flex-row justify-between items-center'>

        <NameInput label={'Player D'} value={playerNames[3]} onChange={playerChangeHandlers[3]} />
        <GiCrossedSwords size={50} className="icon" />
        <NameInput label={'Player E'} value={playerNames[4]} onChange={playerChangeHandlers[4]} />
      </div>
      <div className='flex flex-row justify-between items-center'>

        <NameInput label={'Player F'} value={playerNames[5]} onChange={playerChangeHandlers[5]} />
        <NameInput label={'Player G'} value={playerNames[6]} onChange={playerChangeHandlers[6]} />
        <NameInput label={'Player H'} value={playerNames[7]} onChange={playerChangeHandlers[7]} />
      </div>
    </div>
  );
}

function PlayGame({ isOpen, onOpenChange }) {
  const [mode, setMode] = useState(4);
  const [playerNames, setPlayerNames] = useState(['', '', '', '']);
  const router = useRouter();

  const modeHandler = (newMode) => {
    setMode(newMode);
    if (newMode === 4) {
      setPlayerNames(['', '', '', '']);
    } else if (newMode === 6) {
      setPlayerNames(['', '', '', '', '', '']);
    } else if (newMode === 8) {
      setPlayerNames(['', '', '', '', '', '', '', '']);
    }
  };

  const onClose = () => {
    const dataToStore = { mode, playerNames };
    localStorage.setItem('gameData', JSON.stringify(dataToStore));
    onOpenChange();
  };

  const playerChangeHandlers = playerNames.map((_, index) => (e) => {
    const newNames = [...playerNames];
    newNames[index] = e.target.value;
    setPlayerNames(newNames);
  });

  const allPlayersFilled = playerNames.every(name => name.trim() !== '');

  const handlePlay = () => {
    if (!allPlayersFilled) {
      toast.error('Please fill in all player names.')
      return;
    }

    onClose(); // Optionally call onClose if you want to close the modal first
    router.push('/game'); // Navigate to the game's page
  };

  return (
    <Modal
      isOpen={isOpen}
      backdrop='blur'
      onOpenChange={onOpenChange}
      placement="center"
      className='bg-gradient-to-tr from-transparent rounded-3xl via-[rgba(120,87,87,1.6)] to-transparent'
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Game Settings</ModalHeader>
          <hr className='bg-green-800 w-11/12 mx-auto' />
          <ModalBody>
            <div className='flex flex-row text-gray-900 items-center gap-2 '>
              <BsFillPersonPlusFill size={25} />
              <h3>Players :</h3>
            </div>
            <div className='circle-container flex justify-center items-center mt-10 mb-16'>
              {mode === 4 && <FourPlayer playerNames={playerNames} playerChangeHandlers={playerChangeHandlers} />}
              {mode === 6 && <SixPlayer playerNames={playerNames} playerChangeHandlers={playerChangeHandlers} />}
              {mode === 8 && <EightPlayer playerNames={playerNames} playerChangeHandlers={playerChangeHandlers} />}
            </div>
            <div className='flex flex-row gap-6 justify-center mb-8'>
              <Button onClick={() => modeHandler(4)} isIconOnly className={`rounded-full border ${mode === 4 ? 'bg-slate-400 bg-opacity-35' : ''} border-success`} aria-label="4 Players">
                <Fa4 className={`${mode === 4 ? 'text-gray-200' : 'text-gray-900'}`} />
              </Button>
              <Button onClick={() => modeHandler(6)} isIconOnly className={`rounded-full border ${mode === 6 ? 'bg-slate-400 bg-opacity-35' : ''} border-success`} aria-label="6 Players">
                <Fa6 className={`${mode === 6 ? 'text-gray-200' : 'text-gray-900'}`} />
              </Button>
              <Button onClick={() => modeHandler(8)} isIconOnly className={`rounded-full border ${mode === 8 ? 'bg-slate-400 bg-opacity-35' : ''} border-success`} aria-label="8 Players">
                <Fa8 className={`${mode === 8 ? 'text-gray-200' : 'text-gray-900'}`} />
              </Button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="accent" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button onClick={handlePlay} className='rounded-xl' color="secondary">
               Play
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}

const Home = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='bg-primary/60 h-full relative'>
      <Toaster />
      <Header />
      <div className='w-full h-full -mt-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <div className='flex flex-col gap-8 w-3/4 mx-auto'>
            <button onClick={onOpen}
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10"
            >
              Play Game
            </button>
            <button
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10"
            >
              Settings
            </button>
            <button
              className="text-zinc-300 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(95,87,87,0.36)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-green-600 duration-700 z-10"
            >
              Exit
            </button>
            <div className='z-10 bg-red-700'>
              <PlayGame isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full absolute right-0 bottom-0 pointer-events-none'>
        <div className='bg-none xl:bg-explosion animate-pulse xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        <Nav />
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;