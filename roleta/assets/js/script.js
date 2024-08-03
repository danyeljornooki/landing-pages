function ocultar() {
  document.getElementById("choise").style.display = "none";
  document.getElementById("roleta_val").style.display = "block";
}

function exibir() {
  document.getElementById("choise").style.display = "block";
  document.getElementById("roleta_val").style.display = "none";
}

function playOnClick() {
  globalObjects = {
    btnPlay: document.getElementById("btnPlay"),
    roleta: document.getElementById("roleta"),
    btnStop: document.getElementById("btnStop"),
  };

  globalObjects.timeInitial = new Date();
  globalObjects.roleta.style.animation = "roleta 0.5s linear infinite";

  setTimeout(function () {
    stopOnClick();
  }, Math.floor(Math.random() * (4000 - 1000) + 2000));
}



function stopOnClick() {
  globalObjects.roleta.style["animation-play-state"] = "paused";
  globalObjects.btnPlay.style.visibility = "visible";
}
