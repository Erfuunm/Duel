import Link from "next/link";

import {
  RiTelegramLine,
  RiInstagramLine,
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
  RiPinterestLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
  <div className=' flex items-center gap-x-5 text-lg -mt-[500px] sm:mt-0 xl:mt-10 '>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTelegramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiMailLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine />
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
   
  </div>
  );
};

export default Socials;
