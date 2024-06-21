import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between p- md:p-10 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-2xl text-gray-200 font-semibold'>B.Bouatlaoui</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href="https://github.com/Lario11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/bassam-bouatlaoui" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
      <p className='text-gray-400'>@2024 B.Bouatlaoui</p>
    </div>
  );
}

export default Footer;
