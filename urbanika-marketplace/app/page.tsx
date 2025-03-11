import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';



const Home = () => {
  return (
<> 
<div className="min-h-screen relative">
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-40/90 to-blue-100/90 flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/img/backgroundimg321.png"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
          quality={100}
        />
        
        <main className="flex flex-col items-center justify-center h-[calc(100vh-64px)] px-4">
          <h1 className="text-5xl font-bold text-black text-center mb-6">
            Discover New<br />
            Regenerative Ways To<br />
            Build Your Life
          </h1>
          <Link href="/" className="text-blue-900 hover:text-blue-700">
            <Button className="bg-colorPrimary text-white px-6 py-3 rounded-xl hover:bg-accentPrimary transition duration-300">
              Currently Mobile Only
            </Button>
          </Link>
        </main>
      </div>









      
      <Footer/>
    </div>
    </>
  );
};

export default Home;