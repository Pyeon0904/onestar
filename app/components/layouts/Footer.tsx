export default function Footer() {

  return (
    <>
      <footer className='bg-gray-100 py-6'>
        <div className='container max-w-4xl mx-auto px-6 text-center'>
          <p>&copy; {new Date().getFullYear()} jjpyeon - All rights reserved.</p>
        </div>
      </footer>
    </>
  );
} 