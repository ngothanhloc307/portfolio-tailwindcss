import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const icons = [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaLinkedinIn />];
const Main = () => {
  return (
    <div id='main'>
      <img
        src='https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='/'
        className='w-full h-screen object-cover object-left scale-x-[1]'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[720px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-[#0081C9]'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Ngo Thanh Loc</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm
            <TypeAnimation
              sequence={[
                'a Developer', // Types 'One'
                2000, // Waits 2s
                ' a Coder', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'using Spring Boot and React',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            {icons.map((icon, i) => (
              <div key={i}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
