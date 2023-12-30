


function clearAll() {
    let allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach((item)=>{
        item.style.visibility = 'hidden';
    })
}

clearAll();

let prevButton = document.querySelectorAll('button')[0];
let nextButton = document.querySelectorAll('button')[1];

let showId = 0;
function execNext() {
    if (showId >= 8) return;
    let showBox = document.querySelector('.row'+showId);
    showBox.style.visibility = 'visible';
    showId++;
}

function execPrev() {
    if (showId <= 0) return;
    showId--;
    let showBox = document.querySelector('.row'+showId);
    showBox.style.visibility = 'hidden';
}

prevButton.onclick = ()=>{
    execPrev();
}

nextButton.onclick = ()=>{
    execNext();
}