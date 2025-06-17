import AcademicCapSvg from "@/app/components/icons/AcademicCapSvg";
import ComputerSvg from "@/app/components/icons/ComputerSvg";

export default function Introduce() {

  return (
    <section className='mb-16'>
      <h2 className='text-3xl font-bold mb-6'>소개</h2>
      <div className='grid grid-cols-2 gap-6'>
        <article className='bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300'>
          <div className='flex'>
            <AcademicCapSvg className='mr-2'/>
            <h3 className='text-xl font-semibold mb-4'>
              교육 및 활동
            </h3>
          </div>
          <ul className='text-gray-800 leading-relaxed'>
            <li>2021.10 - 2025. 이차전지 충방전 개발업무(SDI)</li>
            <li>2021.06 웹 개발 부트캠프 수료</li>
            <li>2021.02 경기대학교 컴퓨터공학 졸업</li>
          </ul>
        </article>
        <article className='bg-gray-100 shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300'>
          <div className='flex'>
            <ComputerSvg className='mr-2'/>
            <h3 className='text-xl font-semibold mb-4'>자격증</h3>
          </div>
          <ul className='text-gray-800 leading-relaxed'>
            <li>정보처리기사 자격증</li>
            <li>SQLD 자격증</li>
            <li>ASDP 자격증</li>
          </ul>
        </article>
      </div>
    </section>
  );
}