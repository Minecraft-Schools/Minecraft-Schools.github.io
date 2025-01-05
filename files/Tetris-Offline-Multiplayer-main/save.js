
function saveUsername(playerNumber) {
    const inputElement = document.getElementById(`player${playerNumber}Name`);
    const username = inputElement.value;
    localStorage.setItem(`username${playerNumber}`, username);
}

function getSavedUsername(playerNumber) {
    return localStorage.getItem(`username${playerNumber}`);
}

document.getElementById("player1Name").addEventListener("change", () => {
    saveUsername(1);
});
document.getElementById("player2Name").addEventListener("change", () => {
    saveUsername(2);
});

document.getElementById("player1Name").value = getSavedUsername(1);
document.getElementById("player2Name").value = getSavedUsername(2);1