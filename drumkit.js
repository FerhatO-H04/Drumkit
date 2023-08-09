//object 
const sounds = {
  j: "Drum1.wav",
  k: "Drum2.wav",
  l: "Drum3.wav",
  a: "Bell1.wav",
  s: "Bell2.wav",
  d: "Bell3.wav"
}
//arrow function with one parameter and keydown event

window.addEventListener("keydown", (event) => {

//variable
  let drumAudio = new Audio (sounds[event.key])

//play audio
  drumAudio.play()
}); 

//returns an array of sounds object
let allSoundsInArray =  Object.entries(sounds);


for( let i = 0; i < allSoundsInArray.length; i++ ){
  currentSound  = allSoundsInArray[i];
  
// use the toUpperCase() method to correspond to the id names in the html file.
  currentSoundId = currentSound[0].toUpperCase(); 
  currentSoundValue = currentSound[1]; 

//variables
  const audio = new Audio (currentSoundValue)
  const button = document.getElementById(currentSoundId)

//arrow function with click event
  button.addEventListener("click", () =>{
  audio.play()
  })
  
 }








