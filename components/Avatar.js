import Image from "next/image";




const Avatar = () => {
  return (
     <div className=' hidden xl:flex xl:max-w-none'>
    <Image src={'/Erfan.png'} width={969} height={978} alt="" className=' translate-z-0 w-full h-full'/>
  </div>
  );
};

export default Avatar;
