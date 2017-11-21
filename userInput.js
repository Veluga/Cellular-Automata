let seedButton = document.getElementById('seedSubmit')
let seedInput = document.getElementById('seedInput')

seedInput.value = seed;

seedButton.addEventListener('click', function() {
  seed = parseInt(seedInput.value);
  shouldExit = true;
  setTimeout(function() {shouldExit = false; main();}, 1000)  
})


