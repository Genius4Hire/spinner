

const animFrames = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "
];

const makeAnimLoop = function(totalTime) {
  // while (do frame of totalTime){
  frameDuration = totalTime / animFrames.length;
  // console.log("frame length: ", frameDuration);
  for (let x = 0; x < animFrames.length; x++){
    setTimeout(() => {
      process.stdout.write(animFrames[x]);
    }, x * (frameDuration + 1));
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, totalTime); //q1. leave a little time before closing line?
};

// console.log(animFrames)
makeAnimLoop(2000);
