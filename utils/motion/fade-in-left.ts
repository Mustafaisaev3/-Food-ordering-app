export function fadeInLeft (duration:number = 0.3) {
  return {
    from: { 
      x: 200,
      transition: {
        type: 'spring',
				duration: duration,
      } 
    },
    to: { 
      x: 0,
      transition: {
        type: 'spring',
				duration: duration,
      } 
    },
  }
}