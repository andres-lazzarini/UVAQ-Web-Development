function changeToHome(){
    document.querySelector('.home').classList.remove('hide');
    document.querySelector('.menu1').classList.add('hide');
    document.querySelector('.menu2').classList.add('hide');
    document.querySelector('.menu3').classList.add('hide');
}

function changeToMenu1(){
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.menu1').classList.remove('hide');
    document.querySelector('.menu2').classList.add('hide');
    document.querySelector('.menu3').classList.add('hide');
}

function changeToMenu2(){
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.menu1').classList.add('hide');
    document.querySelector('.menu2').classList.remove('hide');
    document.querySelector('.menu3').classList.add('hide');
}

function changeToMenu3(){
    document.querySelector('.home').classList.add('hide');
    document.querySelector('.menu1').classList.add('hide');
    document.querySelector('.menu2').classList.add('hide');
    document.querySelector('.menu3').classList.remove('hide');
}