var allButtons = document.getElementsByTagName('button');
var saveDefaultButtons = [];

for (let i = 0; i < allButtons.length; i++){
    saveDefaultButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonPressed){
    if (buttonPressed.value === 'red'){
        changeToRed();
    } else if (buttonPressed.value === 'green'){
        changeToGreen();
    } else if (buttonPressed.value === 'reset'){
        resetButtonColor();
    } else if (buttonPressed.value === 'random'){
        randomButtonColor();
    }
}

function changeToRed(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function changeToGreen(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function resetButtonColor(){
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(saveDefaultButtons[i]);
    }
}

function randomButtonColor(){
    let choices = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger', 'btn-secondary']
    for (let i = 0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * choices.length);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}

