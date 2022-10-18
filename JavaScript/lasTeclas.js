
var currentX = 0;
var currentY = 0;

window.addEventListener('load', function () {
    const square = document.getElementById("square");
});


document.addEventListener("keydown", (event) => {
    // console.log(event);
    switch(event.code){
        case "ArrowLeft": {
            if (currentX > 0) {
                currentX = currentX - 50;
                square.style.setProperty("transform", `translate(${currentX}px, ${currentY}px)`);
            }
            break
        }
        case "ArrowUp": {
            if (currentY > 0) {
                currentY = currentY - 50;
                square.style.setProperty("transform", `translate(${currentX}px, ${currentY}px)`);
            }
            break
        }
        case "ArrowDown": {
            if (currentY < (window.innerHeight - (window.innerHeight % 50)) - 50) {
                currentY = currentY + 50;
                square.style.setProperty("transform", `translate(${currentX}px, ${currentY}px)`);
            }
            break
        }
        case "ArrowRight": {
            if (currentX < (window.innerWidth - (window.innerWidth % 50)) - 50) {
                currentX = currentX + 50;
                square.style.setProperty("transform", `translate(${currentX}px, ${currentY}px)`);
            }
            break
        }
    }
});