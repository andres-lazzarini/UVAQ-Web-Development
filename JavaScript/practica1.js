const audio = new Audio("../Music/Human Fart.mp3");

window.addEventListener('load', function() {
    const btn = this.document.querySelector("#createbtn");
    const eyebtn = this.document.querySelector("#passeye");

    btn.addEventListener("click", validateText);
    eyebtn.addEventListener("click", toggleEye);
    
});

var eyeflag = true;

function toggleEye(){
    if (eyeflag) {
        document.querySelector("#password").type="text";
        eyeflag = false;
        audio.play();
    } else {
        document.querySelector("#password").type="password";
        eyeflag = true;
        audio.pause();
    }
}

function validateText(){
    let name = document.querySelector("#name").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(name == "") { 
        document.querySelector("#namevali").textContent="Name is Required...";
    } else {
        document.querySelector("#namevali").textContent="";
        let regex = /^[a-zA-Z ]{2,30}$/;
        if (regex.test(name)) {

        } else {
            document.querySelector("#namevali").textContent="Invalid Name...";
        }
    }

    if(lastname == "") { 
        document.querySelector("#lastvali").textContent="Lastname is Required...";
    } else {
        document.querySelector("#lastvali").textContent="";
        let regex = /^[a-zA-Z ]{2,30}$/;
        if (regex.test(lastname)) {

        } else {
            document.querySelector("#lastvali").textContent="Invalid Lastname...";
        }
    }

    if(email == "") { 
        document.querySelector("#emailvali").textContent="Email is Required...";
    } else {
        document.querySelector("#emailvali").textContent="";
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email)) {

        } else {
            document.querySelector("#emailvali").textContent="Invalid Email...";
        }
    }

    if(password == "") { 
        document.querySelector("#passvali").textContent="Password is Required...";
    } else {
        document.querySelector("#passvali").textContent="";
        let regex = /^(?=.*[A-Z])(?=.*[&$%#@*()]{3,})[a-zA-Z\d&$%#@*()]{8,}$/;
        if (regex.test(password)) {

        } else {
            document.querySelector("#passvali").textContent="Invalid Password, it must be 8 characters with 1 Uppercase Letter, 3 Especial Characters";
        }
    }

}