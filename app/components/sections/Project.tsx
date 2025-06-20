'use client';

import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation"; //

export default function Project() {
  const router = useRouter();

  return (
    <section className='mb-16'>
      <p className='text-3xl font-bold mb-6'>프로젝트</p>
      <div className='grid grid-cols-2 gap-6'>
        <article
          className='bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
          <Image
            src="https://plus.unsplash.com/premium_photo-1749723951265-6e289d2a8113?q=80&w=600"
            alt="프로젝트1 이미지"
            width="600"
            height="600"
          />
          <div className='p-6'>
            <p className='text-xl font-semibold mb-4'>OOOOO 플랫폼</p>
            <div className='space-x-2 mb-4'>
            <span
              className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
            </div>
            <div className='flex gap-2 mb-2'>
              <span className='text-sm bg-gray-800 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://github.com/Pyeon0904')
                    }}
              >
                Github
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://everybodypyeon.tistory.com/')
                    }}
              >
                Tstory
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('#')
                    }}
              >
                Demo
              </span>
            </div>
          </div>
        </article>
        <article
          className='bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
          <Image
            src="https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?q=80&w=600"
            alt="프로젝트1 이미지"
            width="600"
            height="600"
          />
          <div className='p-6'>
            <p className='text-xl font-semibold mb-4'>OOOOO 플랫폼</p>
            <div className='space-x-2 mb-4'>
            <span
              className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
            </div>
            <div className='flex gap-2 mb-2'>
              <span className='text-sm bg-gray-800 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://github.com/Pyeon0904')
                    }}
              >
                Github
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://everybodypyeon.tistory.com/')
                    }}
              >
                Tstory
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('#')
                    }}
              >
                Demo
              </span>
            </div>
          </div>
        </article>
        <article
          className='bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
          <Image
            src="https://plus.unsplash.com/premium_photo-1749723949725-18b9751a59f0?q=80&w=600"
            alt="프로젝트1 이미지"
            width="600"
            height="600"
          />
          <div className='p-6'>
            <p className='text-xl font-semibold mb-4'>OOOOO 플랫폼</p>
            <div className='space-x-2 mb-4'>
            <span
              className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
            </div>
            <div className='flex gap-2 mb-2'>
              <span className='text-sm bg-gray-800 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://github.com/Pyeon0904')
                    }}
              >
                Github
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://everybodypyeon.tistory.com/')
                    }}
              >
                Tstory
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('#')
                    }}
              >
                Demo
              </span>
            </div>
          </div>
        </article>
        <article
          className='bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
          <Image
            src="https://images.unsplash.com/photo-1743841727503-dc5582e348f3?q=80&w=600"
            alt="프로젝트1 이미지"
            width="600"
            height="600"
          />
          <div className='p-6'>
            <p className='text-xl font-semibold mb-4'>OOOOO 플랫폼</p>
            <div className='space-x-2 mb-4'>
            <span
              className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
              <span
                className='bg-gray-200 text-xs px-2 py-0.5 rounded-md text-gray-700 border border-gray-300'>Next.js</span>
            </div>
            <div className='space-x-2'>
              <span className='text-sm bg-gray-800 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://github.com/Pyeon0904')
                    }}
              >
                Github
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('https://everybodypyeon.tistory.com/')
                    }}
              >
                Tstory
              </span>
              <span className='text-sm bg-orange-600 text-white px-3 py-1 rounded-md'
                    onClick={() => {
                      router.push('#')
                    }}
              >
                Demo
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}