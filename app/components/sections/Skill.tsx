import NextjsSvg from "@/app/components/icons/NextjsSvg";
import React from "react";
import GithubSvg from "@/app/components/icons/GithubSvg";
import NotionSvg from "@/app/components/icons/NotionSvg";
import JestSvg from "@/app/components/icons/JestSvg";
import TailwindcssSvg from "@/app/components/icons/TailwindcssSvg";

export default function Skill() {

  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-bold mb-6'>기술</h2>
      <div className='grid grid-cols-3 gap-4'>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <NextjsSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>Next.js</h3>
        </div>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <TailwindcssSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>Tailwind CSS</h3>
        </div>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <NextjsSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>React-Query</h3>
        </div>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <GithubSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>Github CI/CD</h3>
        </div>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <JestSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>Jest Test</h3>
        </div>
        <div
          className='flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300'>
          <NotionSvg className="h-6 w-6 mb-1"/>
          <h3 className='text-lg font-semibold'>Notion</h3>
        </div>
      </div>
    </section>
  );
}