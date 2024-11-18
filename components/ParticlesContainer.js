import {Particles} from 'react-tsparticles';

import {loadFull} from 'tsparticles';

import React , {useCallback} from 'react';

const ParticlesContainer = () => {

  const ParticlesInit = useCallback(async (engine) =>{
    await loadFull(engine);
  } , []);

  const Particlesloaded = useCallback(async ()=> {} , []);

  return(

    <Particles className=' w-screen h-full absolute translate-z-0 '  id='tsparticles' init={ParticlesInit} loaded={Particlesloaded} options={{
      fullScreen: {enable: false},
      background: {
        color:{
          value: '',
        },
      },
      fps_limit: 120,
      interactivity: {
        events: {
          onclick:{
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push:{
            quantity: 90
          },
          repules: {
            distance: 200 ,
            duration: 0.4,

          }
        }
      },
      particles: {
        color: {
          value: '#fff',
        },
        links :{
          color: '#fff',
          distance : 150,
          enable: true,
          opacity: .7,
          width: 1.2
        },
        collisions: {
          enable:true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 710
          },
          value: 90
        },
        opacity: {
          value : 0.5,
        },
        shape: {
          type: 'circle'
        },
        size :{
          value: { min: 1 ,max: 7},
        },
      },
      detectRetina: true ,
    }}
    />
  );
};

export default ParticlesContainer;
