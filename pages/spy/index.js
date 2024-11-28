//  data
import React, { useEffect, useState } from 'react';
import sentences from './sentences.json';  // Adjust the path as necessary


import Image from 'next/image';
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import { FaRegHandScissors } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { PiHandGrabbingThin } from "react-icons/pi";
import { FaSnapchat } from "react-icons/fa6";

import { PiPerson } from "react-icons/pi";




function RSPGame() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}><RiInformationLine size={40} className='text-yellow-200' /></Button>
      <div className='flex flex-col items-center justify-center gap-8'>
        <Avatar isBordered className='w-16 h-16' icon={< FaRegHandScissors className='text-gray-300 ' size={35} />} />
        <HintModal text={'in this game you should chose one player (not from your team) and play Paper - Scissors - Rock.If you beat her then your team will catch the point'} isOpen={isOpen} onOpenChange={onOpenChange} />
        <span className='text-white text-xl'>Paper - Scissors - Rock</span>
      </div>
    </>
  );
}

function WichHand() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex]; // Get a random sentence
  
    return (
      <>
        <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}>
          <RiInformationLine size={40} className='text-yellow-200' />
        </Button>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col items-center gap-3'>
            <Avatar isBordered className='w-16 h-16' icon={<FaSnapchat className='text-gray-300 ' size={35} />} />
            <span className='text-yellow-200 text-lg'>Dower </span>
          </div>
          <HintModal text={'in this game your team mate have to find the word . do not talk about the word directly'} isOpen={isOpen} onOpenChange={onOpenChange} />
          <span className='text-white text-xl'>{randomSentence}</span>
        </div>
      </>
    );
}


function Dower() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex]; // Get a random sentence

  return (
    <>
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}>
        <RiInformationLine size={40} className='text-yellow-200' />
      </Button>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-col items-center gap-3'>
          <Avatar isBordered className='w-16 h-16' icon={<FaSnapchat className='text-gray-300 ' size={35} />} />
          <span className='text-yellow-200 text-lg'>Dower </span>
        </div>
        <HintModal text={'in this game your team mate have to find the word . do not talk about the word directly'} isOpen={isOpen} onOpenChange={onOpenChange} />
        
      </div>
    </>
  );
}



function Panto() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex]; // Get a random sentence
  
    return (
      <>
        <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}>
          <RiInformationLine size={40} className='text-yellow-200' />
        </Button>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex flex-col items-center gap-3'>
            <Avatar isBordered className='w-16 h-16' icon={<FaSnapchat className='text-gray-300 ' size={35} />} />
            
          </div>
          <HintModal text={'in this game your team mate have to find the word . do not talk about the word directly'} isOpen={isOpen} onOpenChange={onOpenChange} />
          <span className='text-white text-xl'>{randomSentence}</span>
        </div>
      </>
    );
}

function HintModal({ text, isOpen, onOpenChange }) {
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
          <ModalHeader className="flex flex-col gap-1">game Hint :</ModalHeader>
          <hr className='bg-green-800 w-11/12 mx-auto' />
          <ModalBody>
            <div className='flex flex-row text-gray-300 items-center gap-2  '>

              <h4 className='mt-2 mb-2'>
                {text}
              </h4>
            </div>

          </ModalBody>

        </>
      </ModalContent>
    </Modal>
  );
}



/* From Uiverse.io by sofiapetushok */

function Card({ currentComponent }) {
  return (
    <div className="book bg-primary/30">
      {currentComponent}
      <div className="cover">
        <Image src={'/logo-smal.png'} width={100} height={88} alt='' priority={true} />
      </div>
    </div>
  );
}


function MyButton({ Mode, label, color, round, scores, setScores, setRound, changeComponent }) {
  const handleClick = () => {
    // Update round if Mode is 4
    if (Mode === 4) {
      setRound((prevRound) => (prevRound === 0 ? 1 : 0));
    }
    else if(Mode === 8){
      if(round === 0) setRound(1)
        else if(round === 1) setRound(2)
        else if(round === 2) setRound(3)
          else if(round === 3) setRound(0)
    }

    // Change to the next component
    changeComponent();

    // Update scores if setScores is provided
    if (setScores) {
      setScores((prevScores) => {
        // Create a new array with the updated score
        const newScores = [...prevScores];  // Clone the previous scores array
        newScores[round] = parseInt(newScores[round]) + 1; // Increment the current round's score
        return newScores; // Return the new scores array
      });
      console.log(scores); // This will log the previous `scores` state value before the update
    }
  };

  return (
    <button onClick={handleClick} className="button">
      <span className={`button_lg ${color}`}>
        <span className="button_sl"></span>
        <span className="button_text">{label}</span>
      </span>
    </button>
  );
}





const Spy = () => {
  const [index, setIndex] = useState(0);
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState(['0', '0', '0', '0']);
  const [round, setRound] = useState(1);
  const [mode, setMode] = useState();
  const [currentComponent, setCurrentComponent] = useState(null);

  const components = [
    <Panto key="panto" />,
    <Dower key="dower" />,
    <Dower key="dower" />,
    <WichHand key="wichHand" />,
    <RSPGame key="rspGame" />
  ];

  const getRandomComponent = () => {
    const randomIndex = Math.floor(Math.random() * components.length);
    return components[randomIndex];
  };

  useEffect(() => {
    // Retrieve game data from localStorage
    const gameData = JSON.parse(localStorage.getItem('gameData'));
    const playerNames = gameData ? gameData.playerNames : [];
    setMode(gameData ? gameData.mode : null);

    // Create teams from player names
    const newTeams = [];
    for (let i = 0; i < playerNames.length / 2; i++) {
      const PlayerA = playerNames[i];
      const PlayerB = playerNames[playerNames.length - 1 - i];
      newTeams.push({ PlayerA, PlayerB });
    }

    setTeams(newTeams);
    setCurrentComponent(getRandomComponent()); // Initialize with a random component
  }, []);

  console.log(index);
  const changeComponent = () => {
    setCurrentComponent(getRandomComponent());
  };

  return (
    <div className='h-full bg-primary/30 text-center xl:text-left'>
     
      {/* <Circles /> */}
      <div className='container mx-auto h-full flex flex-col justify-center items-center gap-x-6'>
       
          <Card currentComponent={currentComponent} />
        
        <div className='flex items-center mt-16 gap-12'>
          <MyButton Mode={mode} label={'Seen'} color={'bg-green-600'} round={round} setScores={setScores} setRound={setRound} changeComponent={changeComponent} />
        </div>
      </div>
    </div>
  );
};

export default Spy;
