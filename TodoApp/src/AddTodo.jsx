import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IconContext } from "react-icons"

function AddTodo() {
  return (
    <div className='fixed flex-col right-0 justify-end bottom-0 mb-96 p-8 group'>
      <IconContext.Provider value={{ size: '2em'}}>
        <button type='button' className='text-white group-hover:text-blue-600 group-hover:scale-125 transition-all'>
          <BsFillPlusCircleFill></BsFillPlusCircleFill>
        </button>
      </IconContext.Provider>

      <span
        className='absolute w-auto p-2 min-w-max right-20 rounded-md text-white bg-blue-600 text-s font-bold transition-all duration-100 scale-0 origin-right group-hover:scale-100'
      >
        Add a Todo
      </span>
    </div>
  )
}

export default AddTodo;
