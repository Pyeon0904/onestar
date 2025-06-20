'use client';

import GithubSvg from "@/app/components/icons/GithubSvg";
import {useRouter} from "next/navigation"; //

export default function Contact() {
  const router = useRouter();

  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-bold mb-6'>연락처</h2>
      <div className='grid grid-cols-2 gap-8'>
        <form className='flex flex-col space-y-4'>
          <div>
            <label className='block mb-1 font-medium'>이름</label>
            <input type="text" required
                   className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label className='block mb-1 font-medium'>이메일</label>
            <input type="email" required
                   className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500'
            />
          </div>
          <div className='flex flex-col space-y-1'>
            <label className='block mb-1 font-medium'>메시지</label>
            <textarea
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-orange-500'
            />
          </div>
          <button type="button"
                  className="bg-blue-300 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors">이메일 보내기
          </button>
        </form>
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <span className='flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors'
                onClick={() => router.push('https://github.com/Pyeon0904')}>
            <GithubSvg className='h-6 w-6'/>
            <p>Github</p>
          </span>
          <span className='flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors'
                onClick={() => router.push("https://everybodypyeon.tistory.com/")}>
            <GithubSvg className='h-6 w-6'/>
            <p>Blog</p>
          </span>
          <span className='flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors'
                onClick={() => router.push('https://github.com/Pyeon0904')}>
            <GithubSvg className='h-6 w-6'/>
            <p>etc</p>
          </span>
        </div>
      </div>

    </section>
  );
}