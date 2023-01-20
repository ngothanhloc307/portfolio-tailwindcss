import React from 'react';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

const links = [
  { title: 'Home', url: '#main', icon: <AiOutlineHome size={20} /> },
  { title: 'Work', url: '#work', icon: <GrProjects size={20} /> },
  { title: 'Projects', url: '#projects', icon: <AiOutlineProject size={20} /> },
  { title: 'Resume', url: '#resume', icon: <BsPerson size={20} /> },
  { title: 'Contact', url: '#contact', icon: <AiOutlineMail size={20} /> },
];
const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
          {links.map((link, index) => (
            <a
              onClick={handleNav}
              key={index}
              href={link.url}
              className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
            >
              {link.icon}
              <span className='pl-4'>{link.title}</span>
            </a>
          ))}
        </div>
      ) : (
        ''
      )}

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
