import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2022,
    title: 'React JS Application',
    duration: '2 Years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    year: 2020,
    title: 'React JS Application',
    duration: '2 Years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    year: 2018,
    title: 'React JS Application',
    duration: '2 Years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    year: 2016,
    title: 'React JS Application',
    duration: '2 Years',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
