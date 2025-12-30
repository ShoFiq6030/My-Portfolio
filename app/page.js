
import NavBar from '@/components/common/NavBar';

import Hero from '@/components/homepage/Hero';
import Footer from '@/components/common/Footer';


export default function Home() {
  return (
    <div className="container m-auto min-h-full text-white ">
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
}
