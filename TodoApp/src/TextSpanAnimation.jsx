import { motion, useAnimationControls } from 'framer-motion'

function TextSpan({children}) {
  const animationCtr = useAnimationControls()

  const rubberJack = () => {
    animationCtr.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.3, 0.6, 1)',
        'scale3d(0.8, 1.4, 1)',
        'scale3d(1.2, 0.9, 1)',
        'scale3d(0.95, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ] 
    })
  }

  return (
    <motion.span
      animate={ animationCtr }
      onMouseOver={ () => rubberJack()}
    >
      {children} 
    </motion.span>
  )
}

export default TextSpan;
