import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <>
      <div className='flex flex-col justify-center  pt-[72px] pl-[0px] pr[0px] pb-[136px] w-[80px] h-[428px]'>
        <div className='h-[6]'>
        <div className='p-[15px]'>
          <Image src="/assets/Home.svg" alt="me" width="24" height="24" />
        </div>
        <div className='p-[15px]'>
          <Image src="/assets/Group 36.svg"alt="me" width="24" height="24" />
        </div>
        <div className='p-[15px]'>
          <Image src="/assets/Group 920.svg"alt="me" width="24" height="24" />
        </div>
        <div className='p-[15px]'>
          <Image src="/assets/Group 920 (1).svg"alt="me" width="24" height="24" />
        </div>
        <div className='p-[15px]'>
          <Image src="/assets/ICP Icon.svg"alt="me" width="24" height="24" />
        </div>
        <div className='p-[15px]'>
          <Image src="/assets/Group 77.svg"alt="me" width="24" height="24" />
        </div>
        </div>
        
        </div>
        
      
    </>
  );
};

export default Sidebar;
