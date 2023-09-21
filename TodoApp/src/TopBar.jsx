import TextSpan from './TextSpanAnimation.jsx'

function TopBar() {
  const title = "Todo App".split("");

  return (
    <div 
      className='sticky top-0 flex justify-center w-full p-2 font-black text-white italic bg-slate-900 text-7xl sm:text-8xl md:text-9xl'
    >
      {title.map((letter,idx) => {
        return (
          <TextSpan key={idx}>
            {letter}
          </TextSpan>
        )
      })}
    </div>
  )
}

export default TopBar;
