import Header from "@/app/components/layouts/Header";
import React, {ReactNode} from "react";
import Footer from "@/app/components/layouts/Footer";

export default function AppLayout({children}: { children: ReactNode }) {
  return (
    <>
      <Header/>
      <div className='container max-w-4xl mx-auto'>
        <main className='px-6 py-12'>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  );
}