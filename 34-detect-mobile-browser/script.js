// 1. check userAgent
const isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i
  .test(navigator.userAgent);


console.log(isMobile);