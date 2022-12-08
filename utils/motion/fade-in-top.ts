export function fadeInTop (duration:number = 0.2) {
  return {
    from: { 
      y: "50px",
      opacity: 0,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
    to: { 
      y: "0",
      opacity: 1,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
  }
}
