
//this fucnction creates an animated text-based spinner at the beginning of a new line/
const makeAnimLoop = function(totalTimePerSpin, spinCount) {
  const animFrames = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
  // while (do frame of totalTime){
  frameDuration = totalTimePerSpin / animFrames.length;
  for (let loopNum = 0; loopNum < spinCount; loopNum++){
    for (let frameNum = 0; frameNum < animFrames.length; frameNum++){
      setTimeout(() => {
        process.stdout.write(animFrames[frameNum]);
      }, (totalTimePerSpin * loopNum) + (frameNum * frameDuration));
    }
  }
  setTimeout(() => {
    process.stdout.write("\r \n");
  }, totalTimePerSpin * spinCount); //q1. leave a little time before closing line?
};
  
  // console.log(animFrames)
  makeAnimLoop(250, 10);

