import React from 'react';

import project01 from '../assets/images/project-01.jpg';
import project02 from '../assets/images/project-02.jpg';
import project03 from '../assets/images/project-03.jpg';
import project04 from '../assets/images/project-04.jpg';
import ProjectItem from './ProjectItem';

const projects = [
  {
    id: 1,
    title: 'Comfy Store',
    url: 'https://comfy-store-react-ecomerpj.netlify.app/',
    img: project01,
  },
  {
    id: 2,
    title: 'Burger Restaurant',
    url: 'https://food-app-react-tailwind-css-demo.netlify.app/',
    img: project02,
  },
  {
    id: 3,
    title: 'Food Order',
    url: 'https://food-order-web-ngoloc.netlify.app/',
    img: project03,
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    url: 'https://react-basic-dashboard.netlify.app/',
    img: project04,
  },
];
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, praesentium. Nostrum nihil
        esse ab repellat corrupti pariatur eligendi, iusto, delectus iste odio quam eius est!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projects.map((project) => (
          <ProjectItem key={project.id} title={project.title} url={project.url} img={project.img} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
