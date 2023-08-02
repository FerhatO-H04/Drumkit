
//arrow function with one parameter and keydown event

window.addEventListener("keydown", (event) => {

//object  
  const sounds = {
    j: "Drum1.wav",
    k: "Drum2.wav",
    l: "Drum3.wav",
    a: "Bell1.wav",
    s: "Bell2.wav",
    d: "Bell3.wav"
  }

//variable
  let drumAudio = new Audio (sounds[event.key])

//play audio
  drumAudio.play()
}); 

