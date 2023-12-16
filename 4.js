// consts here 
const play_againBtn = document.querySelector(".play_again");
const winner = document.querySelector('.winner');
const tag = document.querySelector('.tag')
play_againBtn.addEventListener('click',play);
winner.innerHTML = localStorage.getItem("winner") + " Won!!"
// funtion to redirect the starting page
function play() {
    window.location.href = '2.html'
}

// code for winning tag 
const tags = [
    "Incredible work! You're a superstar!",
    "Absolutely fantastic! You're a winner!",
    "Outstanding performance! Congratulations!",
    "You're on fire! Well deserved win!",
    "Brilliant job! You're the best!",
    "Marvelous effort! You're a true champion!",
    "Exceptional work! Victory is yours!",
    "Top-notch performance! Congratulations!",
    "Impressive! You've aced it!",
    "Remarkable achievement! You're the winner!",
    "Spectacular! You've conquered it!"
  ];
//   this will randomly choose the tag and display it in the html page
  const winningtags = tags[Math.floor(Math.random() * tags.length)];
  tag.innerHTML = winningtags
  