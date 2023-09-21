import { BsGithub, BsLinkedin } from "react-icons/bs"
import { IconContext } from "react-icons"

function BottomBar() {
  return (
    <div className='fixed bottom-0 flex justify-between bg-slate-900 w-full rounded-full'>
      <div className='font-bold text-l text-white p-2 ml-6 hover:animate-ping transition-all'>
        Pranshu Goyal 
      </div>

      <div className='flex justify-end'>
        <IconContext.Provider value={{ size: '1em'}}>
          <button
            type='button'
            onClick={ (e) => {window.location.assign('https://github.com/pranshu314')} }
            className='text-white p-2 cursor-pointer hover:scale-150 transition-all'
          >
            <BsGithub></BsGithub>
          </button>
          <button 
            type='button' 
            onClick={ (e) => {window.location.assign('https://www.linkedin.com/in/pranshu-goyal-55b81525b')} } 
            className='text-white p-2 cursor-pointer mr-4 hover:scale-150 transition-all'
          >
            <BsLinkedin></BsLinkedin>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default BottomBar;
