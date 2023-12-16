let tog = 1
let rollingSound = new Audio('SnakeAndLadder_rpg-dice-rolling-95182.mp3')
let winSound = new Audio('SnakeAndLadder_winharpsichord-39642.mp3')
// turns names 
const turn = document.getElementById("tog");
turn.innerHTML = localStorage.getItem("inputnick2") + "'s turn"

let p1sum = 0
let p2sum = 0
// p1sum is for first player and p2sum is for second player
// this function  includes if else statements of ladder and snake
function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num
        // if else statements for first player
        if (p1sum > 100) {
            p1sum = p1sum - num
        }
        else if (p1sum == 1) {
            alert("Yayy! you climbed the ladder")
            p1sum = 38
        }
        else if (p1sum == 4) {
            alert("Yayy! you climbed the ladder")
            p1sum = 14
        }
        else if (p1sum == 9) {
            alert("Yayy! you climbed the ladder")
            p1sum = 31
        }
        else if (p1sum == 17) {
            alert("Oops!! you got bitten")
            p1sum = 7
        }
        else if (p1sum == 28) {
            alert("Yayy! you climbed the ladder")
            p1sum = 84
        }
        else if (p1sum == 21) {
            alert("Yayy! you climbed the ladder")
            p1sum = 42
        }
        else if (p1sum == 51) {
            alert("Yayy! you climbed the ladder")
            p1sum = 67
        }
        else if (p1sum == 54) {
            alert("Oops!! you got bitten")
            p1sum = 34
        }
        else if (p1sum == 62) {
            alert("Oops!! you got bitten")
            p1sum = 19
        }
        else if (p1sum == 64) {
            alert("Oops!! you got bitten")
            p1sum = 60
        }
        else if (p1sum == 71) {
            alert("Oops!! you got bitten")
            p1sum = 91
        }
        else if (p1sum == 80) {
            alert("Yayy! you climbed the ladder")
            p1sum = 100
        }
        else if (p1sum == 87) {
            alert("Oops!! you got bitten")
            p1sum = 24
        }
        else if (p1sum == 93) {
            alert("Oops!! you got bitten")
            p1sum = 73
        }
        else if (p1sum == 95) {
            alert("Oops!! you got bitten")
            p1sum = 75
        }
        else if (p1sum == 98) {
            alert("Oops!! you got bitten")
            p1sum = 79
        }


        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num
        // if else statements for second player
        if (p2sum > 100) {
            p2sum = p2sum - num
        }
        else if (p2sum == 1) {
            alert("Yayy! you climbed the ladder")
            p2sum = 38
        }
        else if (p2sum == 4) {
            alert("Yayy! you climbed the ladder")
            p2sum = 14
        }
        else if (p2sum == 9) {
            alert("Yayy! you climbed the ladder")
            p2sum = 31
        }
        else if (p2sum == 17) {
            alert("Oops!! you got bitten")
            p2sum = 7
        }
        else if (p2sum == 28) {
            alert("Yayy! you climbed the ladder")
            p2sum = 84
        }
        else if (p2sum == 21) {
            alert("Yayy! you climbed the ladder")
            p2sum = 42
        }
        else if (p2sum == 51) {
            alert("Yayy! you climbed the ladder")
            p2sum = 67
        }
        else if (p2sum == 54) {
            alert("Oops!! you got bitten")
            p2sum = 34
        }
        else if (p2sum == 62) {
            alert("Oops!! you got bitten")
            p2sum = 19
        }
        else if (p2sum == 64) {
            alert("Oops!! you got bitten")
            p2sum = 60
        }
        else if (p2sum == 71) {
            alert("Oops!! you got bitten")
            p2sum = 91
        }
        else if (p2sum == 80) {
            alert("Yayy! you climbed the ladder")
            p2sum = 100
        }
        else if (p2sum == 87) {
            alert("Oops!! you got bitten")
            p2sum = 24
        }
        else if (p2sum == 93) {
            alert("Oops!! you got bitten")
            p2sum = 73
        }
        else if (p2sum == 95) {
            alert("Oops!! you got bitten")
            p2sum = 75
        }
        else if (p2sum == 98) {
            alert("Oops!! you got bitten")
            p2sum = 79
        }

        sum = p2sum



    }

    // dice transition
    document.getElementById(`${player}`).style.transition = `linear all .5s`




    // when the marks are from below 10
    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }


    // this is when the marks reaches 100th div contains alert boc also 
    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert(localStorage.getItem("inputnick1") + "Won !!")
            const inputnick1 = localStorage.getItem("inputnick1");
            localStorage.setItem('winner',inputnick1)
            localStorage.removeItem('inputnick1');
            window.location.href = 'main.html';

        }
        else if (player == 'p2') {
            alert(localStorage.getItem("inputnick2") + "Won !!")
            const inputnick2 = localStorage.getItem("inputnick2");
            localStorage.setItem('winner',inputnick2)
            localStorage.removeItem('inputnick2');
            window.location.href = 'main.html';
        }
        window.location.href = '4.html'
    }

    else {

        numarr = Array.from(String(sum))
        // eval function is for evalutes
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        
        // code for turns when it is even and when in odd
        if (n1 % 2 != 0) {
            // corrections for the marks movement
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }
    }
}

// style when the roll button is clicked 
document.querySelector(".roll").addEventListener("click", function () {
    const rollingSound = new Audio();

    // Add multiple source types for cross-browser compatibility
    rollingSound.innerHTML = '<source src="SnakeAndLadder_rpg-dice-rolling-95182.mp3" type="audio/mpeg">' +
                            '<source src="SnakeAndLadder_rpg-dice-rolling-95182.ogg" type="audio/ogg">' +
                            '<source src="SnakeAndLadder_rpg-dice-rolling-95182.wav" type="audio/wav">';

    rollingSound.play().catch(error => {
        console.error('Playback error:', error);
    });
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    // it imports the input names from localstorage and show it as turns 
    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = localStorage.getItem("inputnick1") + "'s turn";
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = localStorage.getItem("inputnick2") + "'s turn";

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1
})

// dice animations in javascript
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {

    const random = num

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}
// dice rolling animation 
const rollDice = random => {

    dice.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

    }, 4050);

}

rollBtn.addEventListener('click', randomDice);

// code ends