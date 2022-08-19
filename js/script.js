"use strict"

const inputName = document.getElementById("new-player-name");
const addButton = document.getElementById("add-player");
const listOfCurrentPlayers = document.getElementById("current-players");
const listOfDismissedPlayers = document.getElementById("dismissed-players");
const diceButton = document.getElementById("do-dice");

let currentPlayers = new Array(); 

addButton.addEventListener("click", displayCurrentPlayers);
diceButton.addEventListener("click", randomName);

// add button
function displayCurrentPlayers(){
    if(inputName.value === "" || currentPlayers.includes(inputName.value)){
        alert("Empty input or player already playing...");
    }else{
        displayCurrentPlayer();
        getInputNameAndReset();
    }
}
function getInputNameAndReset(){
    getInputName();
    resetInputName();
}
function getInputName(){
    const name = inputName.value; 
    currentPlayers.push(name);
}
function resetInputName(){
    inputName.value = "";
}
function displayCurrentPlayer(){
    const nameItem = document.createElement("li");
    nameItem.innerHTML = `${inputName.value}`;
    listOfCurrentPlayers.appendChild(nameItem);
}

// dice button
function randomName(){
    if(currentPlayers.length === 1){
        alert("You need 2 players in game...");
    }else{
        const dismissedPlayer = getRandomNameDisplayAndDelete();
        const output = displayOutput(dismissedPlayer);
        return output;
    }
}
function getRandomNameDisplayAndDelete(){
    const index = Math.floor(Math.random() * currentPlayers.length);
    const dismissedPlayer = currentPlayers[index];
    currentPlayers.splice(index, 1);
    if(currentPlayers.length === 1){
        alert(`El ganador es ${currentPlayers[0]}`);
        displayWinner();
    }
    displayDismissedPlayer(dismissedPlayer);
    return dismissedPlayer;
}
function displayOutput(name){
    const output = document.getElementById("discarded-player");
    output.innerHTML = `${name}`;
}
function displayDismissedPlayer(value){
    const nameItem = document.createElement("li");
    nameItem.innerHTML = `${value}`;
    listOfDismissedPlayers.appendChild(nameItem);
}
function displayWinner(){
    const winner = document.getElementById("winner");
    winner.innerHTML += `<li>${currentPlayers[0]}</li>`;
}



 //reset pagina 

const btnRefresh = resetPlayers();

function resetPlayers() {
    const refresh = document.getElementById("refresh");
    refresh.addEventListener('click', _ => {
        location.reload();
    })
}


//eliminar un jugador

const removeChild = document.getElementById("remove-player");
const removeFromPlayerList = document.querySelector("#current-players");
console.log(removeFromPlayerList)

removeChild.addEventListener("click", capturandoYEliminadoElJugador);

function capturandoYEliminadoElJugador(){
    capturandoElUltimoJugador();
    eliminandoElUltimoJugador();
}

function capturandoElUltimoJugador(){
    const capturadoElUltimoPl = removeFromPlayerList.lastChild;
    console.log(capturadoElUltimoPl)
}

function eliminandoElUltimoJugador(){
    const eliminaElUltimoJugador = removeFromPlayerList.parentNode.removeChild(eliminandoElUltimoJugador)
    console.alert(eliminaElUltimoJugador)
}
