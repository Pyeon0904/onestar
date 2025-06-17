import Avatar from "@/app/components/icons/Avatar";

export default function Home() {

  return (
    <section className='flex justify-between items-center mb-12'>
      <div className='shrink-0 mr-10'>
        <Avatar className='rounded-full bg-orange-50 border-2 object-cover'/>
      </div>
      <div className='text-right'>
        <h1 className='text-4xl font-bold mb-2'>Onestar</h1>
        <p className='text-xl mb-4'>센스있는 개발자</p>
        <p className='text-gray-600'>
          5년 이상의 경력을 가진 센스있는 프론트엔드 개발자입니다. Next.js 프레임워크와 React-Query를 통한 상태관리, Tailwind CSS 스타일링, JEST Test 기법으로 확장 가능한
          웹 애플리케이션 구축의 전문성을 갖추고 있으며, Github Actions으로의 CI/CD, Notion을 통해 협업능력을 갖추고 있습니다.
        </p>
      </div>
    </section>
  );
}