
// components
import Banner from './components/Banner';

import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-white font-poppins  overflow-hidden min-h-screen text-white'>
      <Banner />
      <Nav/>
      <About />
      <Services />
      <Work />
      <Contact />
      
    </div>
  );
};

export default App;
