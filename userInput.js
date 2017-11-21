let seedButton = document.getElementById('seedSubmit')
let seedInput = document.getElementById('seedInput')

let speedButton = document.getElementById('speedSubmit')
let speedInput = document.getElementById('speedInput')

seedInput.value = seed;
speedInput.value = speed;

seedButton.addEventListener('click', function() {
  seed = parseInt(seedInput.value);
  shouldExit = true;
  setTimeout(function() {shouldExit = false; main();}, 1000)  
})

speedButton.addEventListener('click', function() {
  speed = parseInt(speedInput.value);
  shouldExit = true;
  setTimeout(function() {shouldExit = false; main();}, 1000)  
})


