const video = document.getElementById("videoBackground");
const sound = document.getElementById("sound");
const links = document.querySelectorAll("ul a");
const audioClick = document.getElementById("audioClick");
const audioHover = document.getElementById('audioHover');

/* Event listener for the sound icon */
sound.addEventListener("click", () => {
   /* Toggles on click */
   sound.classList.toggle("fa-volume-up");
   /* Mute/Unmute if statement */
   if (video.muted === false) {
      video.muted = true;
   } else {
      video.muted = false;
   }
   clickSound();
});

/* hover event listener for the sound icon */
sound.addEventListener("mouseenter", hoverSound);

/* selects all links */
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click", clickSound);
   /* adds hover event listener to the links */
   links[i].addEventListener("mouseenter", hoverSound);
}

/* click sound effect */
function clickSound() {
   audioClick.play();
}

/* hover sound effect */
function hoverSound() {
   audioHover.play();
}