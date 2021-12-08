document.querySelector('header > h1').innerText = "Inspector Clousseau"
document.querySelector('header > h2').innerText = "This IZ Inspector Clousseau speaking on the pheaun"

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`

let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pizels from the top of the display.`

let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset}`

document.getElementById("url").textContent = document.URL;
}

reDisplay ()

document.write("This document is lastly modified on" + " " +document.lastModified);



