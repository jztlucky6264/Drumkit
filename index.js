window.addEventListener("keydown", playSound);
function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together.
  audio.currentTime = 0; //we can play as often as we want.
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (true) {
    key.classList.remove("playing");
    console.log(e);
  }
}
window.addEventListener("keyup", removeTransition);
/*const keys = document.querySelectorAll(".key");
        keys.forEach((key) =>
          key.addEventListener("transitionend", removeTransition)
        );*/
