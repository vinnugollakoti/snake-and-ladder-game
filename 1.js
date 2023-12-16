// taking vars, lets,conts here
const bgm = document.getElementById("bgm");
const startBtn = document.querySelector(".start_tag")
localStorage.setItem("bgm",bgm);
// taking funtion here 
startBtn.addEventListener("click", start_funtion);
let audioUnlocked = false;
function playBackgroundMusic() {
    if (!audioUnlocked) {
        bgm.play().then(() => {
            audioUnlocked = true;
        }).catch(error => {
            // Autoplay was prevented, handle the error here
            console.error('Autoplay prevented:', error);
        });
    } else {
        bgm.play().catch(error => {
            console.error('Playback error:', error);
        });
    }
}
function startGame() {
    playBackgroundMusic();
}

// bgm function
startGame();
console.log("hey")
function start_funtion() {
    window.location.href = '2.html'
}