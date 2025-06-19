import Image from "next/image";

export default function Project() {

  return (
    <section className=''>
      <h2 className='text-3xl font-bold mb-6'>프로젝트</h2>
      <article>
        <Image src="https://plus.unsplash.com/premium_photo-1749723951265-6e289d2a8113?q=80&w=600"
               alt="프로젝트1 이미지"
               width="600"
               height="600"
        />

      </article>
    </section>
  );
}