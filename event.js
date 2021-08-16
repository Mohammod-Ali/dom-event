// 1
function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

// 2
const blackButton = document.getElementById('make-black');
blackButton.onclick = makeBlack;

function makeBlack (){
    document.body.style.backgroundColor = 'black';
}


// 3
const yellowButton = document.getElementById('make-yellow');

yellowButton.onclick = function  () {
    document.body.style.backgroundColor = 'yellow';
}

// 4
const coralButton = document.getElementById('meke-coral');

coralButton.addEventListener('click', makeCoral)
function makeCoral (){
 document.body.style.backgroundColor = 'coral'
}

// 5
const cyanButton = document.getElementById('make-cyan');

cyanButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'cyan'
})

// 6
document.getElementById('make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold'
})