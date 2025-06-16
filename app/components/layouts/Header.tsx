import React from "react";
import Moon from "@/app/components/icons/Moon";

export default function Header() {

  return (
    <>
      <header className='sticky top-0 bg-opacity-90 backdrop-blur-xl'>
        <nav className='flex container max-w-4xl mx-auto px-6 py-3 justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-2xl font-bold'>Onestar</h1>
            <p className='text-sm text-gray-500'>프론트엔드 개발자</p>
          </div>
          <div className='flex items-center gap-x-6'>
            <a href="#home" className='hover:text-blue-500 transition-colors'>홈</a>
            <a href="#intoroduction" className='hover:text-blue-500 transition-colors'>소개</a>
            <a href="#skill" className='hover:text-blue-500 transition-colors'>기술</a>
            <a href="#project" className='hover:text-blue-500 transition-colors'>프로젝트</a>
            <a href="#contact" className='hover:text-blue-500 transition-colors'>연락처</a>
            <button
              className='p-2 w-10 h-10 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500'>
              <Moon/>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}