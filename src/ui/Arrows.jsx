import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function NextArrow({ className,  onClick }) {

  return (
    <div
      className={`$(className) text-secondary flex justify-center w-3/4 mt-4`}
     
      onClick={onClick}
    >
      <FaChevronDown className='text-xl'/>

    </div>
  );
}

function PrevArrow({ className,  onClick }) {
  
  return (
    <div
      className={`$(className) text-secondary flex justify-center w-3/4 mb-4`}
      
      onClick={onClick}
    >
      <FaChevronUp className='text-secondary text-xl '/>

    </div>
  );
}

export {PrevArrow , NextArrow}

