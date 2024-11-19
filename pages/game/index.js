//  data
import React, { useEffect, useState } from 'react';


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


import Circles from '../../components/Circles';
import Image from 'next/image';
import { Avatar, Button } from '@nextui-org/react';

function PlayerCard({ teams }) {
  return (

    <div className="card2">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {
              teams ?
                <div className='flex items-center justify-start ml-10 w-full gap-6'>
                  <Avatar isBordered color="default" />
                  <span className=' text-2xl pb-2 border-b-2 border-zinc-800 '>{teams[0]?.PlayerA}</span>
                </div> :
                null
            }

          </div>
        </div>

      </div>
    </div>

  );
}



/* From Uiverse.io by sofiapetushok */

function Card() {
  return (

    <div class="book bg-primary/30">

      <img src="" />
      <div class="cover">
        <Image src={'/logo-smal.png'} width={100} height={88} alt='' priority={true} />
      </div>
    </div>

  );
}


function MyButton({ lable, color }) {
  return (

    <button class="button">
      <span class={`button_lg ${color}` }>
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

  const [teams, setTeams] = useState([]);
  const [scores, setScores] = useState(['0', '0', '0', '0'])

  useEffect(() => {
    // This code runs only on the client side
    const gameData = JSON.parse(localStorage.getItem('gameData'));
    const playerNames = gameData ? gameData.playerNames : [];


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
            <PlayerCard teams={teams} />
          </div>
          <Card />
          <div className='flex justify-center items-center'>
            <PlayerCard teams={teams} />
          </div>



        </div>
        <div className='flex items-center mt-16 gap-9'>

          <MyButton lable={'Failed'}  color={'bg-red-600'} />
          <MyButton lable={'Done'} color={'bg-green-600'} />


        </div>
      </div>
    </div>
  );
};

export default Game;
