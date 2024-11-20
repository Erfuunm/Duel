//  data
import React, { useEffect, useState } from 'react';

import Circles from '../../components/Circles';
import Image from 'next/image';
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { FaRegHandScissors } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { PiHandGrabbingThin } from "react-icons/pi";
import { FaSnapchat } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa6";
import { PiPerson } from "react-icons/pi";

function PlayerCard({ playerName }) {
  return (
    <div className="card2">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {
              playerName ?
                <div className='flex items-center justify-start ml-10 w-full gap-6'>
                  <Avatar isBordered color="default" />
                  <span className=' text-2xl pb-2 border-b-2 border-zinc-800 '>{playerName}</span>
                </div> :
                null
            }
          </div>
        </div>
      </div>
    </div>
  );
}


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
  return (
    <>
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}><RiInformationLine size={40} className='text-yellow-200' /></Button>
      <div className='flex flex-col items-center justify-center gap-8'>
        <Avatar isBordered className='w-16 h-16' icon={< PiHandGrabbingThin className='text-gray-300 ' size={35} />} />
        <HintModal text={'in this game you should chose one player (not from your team) and play Guees Wich Hand. If you beat her then your team will catch the point'} isOpen={isOpen} onOpenChange={onOpenChange} />
        <span className='text-white text-xl'>Guess Wich Hand</span>
      </div>
    </>
  );
}

function Dower() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}><RiInformationLine size={40} className='text-yellow-200' /></Button>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-col items-center gap-3'>
        <Avatar isBordered className='w-16 h-16' icon={< FaSnapchat className='text-gray-300 ' size={35} />} />
        <span className='text-yellow-200 text-lg'>Dowr : </span>
        </div>
        <HintModal text={'in this game your team mate have to find the word . do not talk about the word directly'} isOpen={isOpen} onOpenChange={onOpenChange} />
        <span className='text-white text-xl '>نیروگاه هسته ای توس</span>
      </div>
    </>
  );
}


function Panto() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}><RiInformationLine size={40} className='text-yellow-200' /></Button>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-col items-center gap-3'>
        <Avatar isBordered className='w-16 h-16' icon={< PiPerson className='text-gray-300 ' size={35} />} />
        <span className='text-yellow-200 text-lg'>Pantomime : </span>
        </div>
        <HintModal text={'in this game your team mate have to find the word . do not talk about the word directly'} isOpen={isOpen} onOpenChange={onOpenChange} />
        <span className='text-white text-xl '>از منظراین بادیه</span>
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


function MyButton({ Mode, label, color, round, setRound, changeComponent }) {
  const handleClick = () => {
    if (Mode === 4) {
      setRound((prevRound) => (prevRound === 0 ? 1 : 0));
    }
    changeComponent(); // Change component on button click
  };

  return (
    <button onClick={handleClick} className="button">
      <span className={`button_lg ${color}`}>
        <span class="button_sl"></span>
        <span class="button_text">{label}</span>
      </span>
    </button>
  );
}




function ScoreBoread2({ teams, scores }) {


  return (
    <div class="card" >
      <div data-status="inprogress" class="teams">
        <span class="team-info team-home">
          <span class="team-info-container">
            <span class="team-name-info">{teams[0]?.PlayerA + ' - ' + teams[0]?.PlayerB}</span>
          </span>
        </span>
        <span class="event-scoreboard">
          <span class="event-score-container">
            <span class="current-time-container">
              <span class="progress-dots" data-progress="1S">
                <span class="load"></span>
              </span>
            </span>
            <span class="score-container">
              <span class="score-home">{scores[0]}</span>
              <span class="custom-sep">-</span>
              <span class="score-away">{scores[1]}</span>
            </span>
          </span>
        </span>
        <span class="team-info team-away">
          <span class="team-info-container">
            <span class="team-icon-container"></span>
            <span class="team-name-info">{teams[1]?.PlayerA + ' - ' + teams[1]?.PlayerB}</span>
          </span>
        </span>
      </div>
    </div>
  );
}


function ScoreBoard({ teams, scores }) {


  return (
    <>
      {
        teams ?
          <ScoreBoread2 teams={teams} scores={scores} />
          :
          null
      }
    </>
  );
}

const Game = () => {
  const [index, setIndex] = useState(0);
  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState(['0', '0', '0', '0']);
  const [round, setRound] = useState(1);
  const [mode, setMode] = useState();
  const [currentComponent, setCurrentComponent] = useState(null);

  const components = [
    <Panto key="panto" />,
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
      <div className='mt-0 px-1'>
        <ScoreBoard scores={scores} teams={teams} />
      </div>
      <Circles />
      <div className='container mx-auto h-full flex flex-col justify-center items-center gap-x-6'>
        <div className='-mt-[30%] flex flex-col justify-center gap-16'>
          <div className='flex justify-center items-center'>
            <PlayerCard playerName={teams[round]?.PlayerA} />
          </div>
          <Card currentComponent={currentComponent} />
          <div className='flex justify-center items-center'>
            <PlayerCard playerName={teams[round]?.PlayerB} />
          </div>
        </div>
        <div className='flex items-center mt-16 gap-9'>
          <MyButton Mode={mode} label={'Failed'} color={'bg-red-600'} round={round} setRound={setRound} changeComponent={changeComponent} />
          <MyButton Mode={mode} label={'Done'} color={'bg-green-600'} round={round} setRound={setRound} changeComponent={changeComponent} />
        </div>
      </div>
    </div>
  );
};

export default Game;
