import Products from './components/Products';
import Stripes from './components/Stripes';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Marques from './components/Marques';
import Cards from './components/Cards';
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='box font w-screen h-full bg-zinc-900 text-white' >
      <Navbar />
      <Work/>
      <Stripes />
      <Products />
      <Marques/>
      <Cards/>
    </div>
  );
};

export default App;
