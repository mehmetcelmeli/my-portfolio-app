import { BrowserRouter } from "react-router-dom";
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Tech from '../src/components/Tech';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact'
import StarsCanvas from '../src/components/canvas/Stars'








const  App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>     
        <div className="relative z-0 ">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
