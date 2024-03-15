
import Button from '../components/Button';
// import Work from './Work';
// import Stripes from './Stripes';

const Navbar = () => {
  return (
    <div>
      <div className='max-w-[1200px] mx-auto py-6 ' style={{ fontFamily: 'Satoshi' }}>
      <div className='flex justify-between items-center'>
        <div className='nleft flex items-center'> 
          <img src='https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg'/>
          <div className='links flex gap-14 ml-20'>
            {["Home", "Work", "Career", "", "News"].map((elem, index) => (
              // eslint-disable-next-line react/jsx-key
              <a key={index} className='font-regular text-sm flex items-center gap-1' href='#'>
                {elem.length === 0 ? <span className="w-[1px] h-5 bg-zinc-500"></span> : null}
                {index === 1 ? (<span style={{ boxShadow: "0 0 0.75em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-500'></span>) : null}
                {elem}
              </a>
            ))}
          </div>
        </div>
        <Button />
        
      </div>
      <hr className="w-full border-t border-zinc-700 my-4" />
      
      
     
      
    </div>
   
              
    </div>
    
  );
};

export default Navbar;
