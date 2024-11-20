//  data
import React, { useEffect, useState } from 'react';

import Circles from '../../components/Circles';
import Image from 'next/image';
import { Avatar, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import { FaRegHandScissors } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";

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

function HintModal({ isOpen, onOpenChange }) {
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

              <h4 className='mt-2 mb-2'>in this game you should chose one player (not from your team) and play Paper - Scissors - Rock.
                If you beat her then your team will catch the point .
              </h4>
            </div>

          </ModalBody>

        </>
      </ModalContent>
    </Modal>
  );
}



/* From Uiverse.io by sofiapetushok */

function Card() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (

    <div class="book bg-primary/30">
      <Button isIconOnly className='fixed top-4 left-4 ' onPress={onOpen}><RiInformationLine size={40} className='text-yellow-200' /></Button>
      <div className='flex flex-col items-center justify-center gap-8'>

        <Avatar isBordered className='w-16 h-16' icon={< FaRegHandScissors className='text-gray-300 ' size={35} />} />
        <HintModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <span className='text-white text-xl'>Paper - Scissors - Rock</span>

      </div>
      <div class="cover">
        <Image src={'/logo-smal.png'} width={100} height={88} alt='' priority={true} />
      </div>
    </div>

  );
}

function MyButton({ Mode, lable, color, round, setRound }) {

  const changeRound = () => {
    console.log('sajajjajaja')
    if (Mode === 4) {

      if (round === 0) {
        setRound(1)
      } else if (round === 1) {
        setRound(0)
      }

    }
  }

  return (

    <button onClick={() => changeRound()} class="button">
      <span class={`button_lg ${color}`}>
        <span class="button_sl"></span>
        <span class="button_text">{lable}</span>
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

  const [teams, setTeams] = useState([]); //storing teams name
  const [scores, setScores] = useState(['0', '0', '0', '0']) //storing teams scores
  const [round, setRound] = useState(1);
  const [mode, setMode] = useState();

  useEffect(() => {
    // This code runs only on the client side
    const gameData = JSON.parse(localStorage.getItem('gameData'));
    console.log(gameData)
    const playerNames = gameData ? gameData.playerNames : [];

    setMode(gameData ? gameData.mode : null)



    const newTeams = [];

    // Create teams from player names
    for (let i = 0; i < playerNames.length / 2; i++) {
      const PlayerA = playerNames[i];
      const PlayerB = playerNames[playerNames.length - 1 - i];
      newTeams.push({ PlayerA, PlayerB });
    }

    setTeams(newTeams);
    console.log(newTeams)
  }, []);

  console.log(index);
  return (
    <div className='h-full bg-primary/30  text-center xl:text-left  '>

      <div className='mt-0 px-1'>
        <ScoreBoard scores={scores} teams={teams} />
      </div>
      <Circles />
      <div className=' container mx-auto h-full flex flex-col justify-center items-center  gap-x-6 '>
        <div className='  -mt-[30%]  flex flex-col justify-center gap-16'>

          <div className='flex justify-center items-center'>
            <PlayerCard playerName={teams[round]?.PlayerA} />
          </div>
          <Card />
          <div className='flex justify-center items-center'>
            <PlayerCard playerName={teams[round]?.PlayerB} />
          </div>



        </div>
        <div className='flex items-center mt-16 gap-9'>

          <MyButton Mode={mode} lable={'Failed'} color={'bg-red-600'} round={round} setRound={setRound} />
          <MyButton Mode={mode} lable={'Done'} color={'bg-green-600'} round={round} setRound={setRound} />


        </div>
      </div>
    </div>
  );
};

export default Game;
