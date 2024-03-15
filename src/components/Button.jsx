
import { IoMdReturnRight } from "react-icons/io";
// eslint-disable-next-line react/prop-types
const Button = ({title="Start a project"}) => {
  return (
    <div className='w-40 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm'>{title}</span>
        <IoMdReturnRight className='text-sm mr-4 mt-1'/>
    </div>
  )
}

export default Button