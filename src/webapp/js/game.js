var symbol = "X"
var count = 0

function play(element) {
    element.innerHTML = symbol
    if (symbol == "X") {
        symbol = "O"
    } else {
        symbol = "X"
    }
    count++
    if (count == 5) {
        playerOneScoreElement = document.getElementById("player1Score")
        playerOneScoreElement.innerHTML = 1
    }
    
}