var startEnd = true;

window.addEventListener('load', function () {

    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var Interval2;

    startbtn = this.document.querySelector(".start-menu button");
    startbtn.addEventListener("click", function() {
        document.querySelector(".start-menu").style.display="none";
        document.querySelector(".container").style.display="block";
        randomGame();

        setTimeout(() => {
            Interval2 = setInterval(startTimer, 10);
          }, 600)

    });

    newg = document.querySelector(".marcador button");
    newg.addEventListener("click", function(){
        randomGame();
    });

    let cells = document.querySelectorAll(".cell-container").forEach(function (e) {
        let eid = e.id.split('-');

        let row = parseInt(eid[0]);
        let col = parseInt(eid[1]);

        e.addEventListener("click", function() {move(getCell(row, col))});
    });

    function startTimer () {
        tens++; 
        
        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          appendTens.innerHTML = tens;
          
        } 
        
        if (tens > 99) {
          console.log("seconds");
          seconds++;
          appendSeconds.innerHTML = "0" + seconds;
          tens = 0;
          appendTens.innerHTML = "0" + 0;
        }
        
        if (seconds > 9){
          appendSeconds.innerHTML = seconds;
        }
      
      }
});

function move(cell){

    if(cell.className != 'cell-container empty'){
        
        var emptyCell = getEmptyAdjacentCell(cell);
        
        if(emptyCell){
            // console.log("yes sir")
            var tmp = {class: cell.className, num: cell.querySelector(".number-container .number").innerHTML};
            
            cell.className = emptyCell.className;
            cell.querySelector(".number-container .number").innerHTML = emptyCell.querySelector(".number-container .number").innerHTML;
            emptyCell.classList.remove("empty");
            emptyCell.querySelector(".number-container .number").innerHTML = tmp.num;
            
            if(startEnd){
                setTimeout(winCheck, 150);
            }
        }
    } 
}

function getCell(row, col){
    return document.getElementById(`${row}-${col}`);
}

function winCheck(){
		
    if(getCell(4, 4).className != 'cell-container empty'){
        console.log("NO check")
        return;
    }

    var n = 1;

    for(var i = 1; i <= 4; i++){
        for(var j = 1; j <= 4; j++){
            if(n <= 15 && getCell(i, j).querySelector(".number-container .number").innerHTML != n.toString()){
                return;
            }
            n++;
        }
    }
    
    console.log("Done!")
}

function getEmptyCell(){
    return document.querySelector('.empty');   
}

function getEmptyAdjacentCell(cell){
		
    var adjacent = getAdjacentCells(cell);
    
    for(var i = 0; i < adjacent.length; i++){
        if(adjacent[i].className == 'cell-container empty'){
            return adjacent[i];
        }
    }
    
    return false;
}

function getAdjacentCells(cell){
		
    var id = cell.id.split('-');

    var row = parseInt(id[0]);
    var col = parseInt(id[1]);
    
    var adjacent = [];

    if(row < 4){adjacent.push(getCell(row+1, col));}			
    if(row > 1){adjacent.push(getCell(row-1, col));}
    if(col < 4){adjacent.push(getCell(row, col+1));}
    if(col > 1){adjacent.push(getCell(row, col-1));}
    
    return adjacent;
}

function randomGame(){
	
    if(!startEnd){
        return;
    }

    startEnd = false;
    
    var previousCell;
    var i = 1;
    var interval = setInterval(function(){
        if(i <= 100){
            var adjacent = getAdjacentCells(getEmptyCell());
            if(previousCell){
                for(var j = adjacent.length-1; j >= 0; j--){
                    if(adjacent[j].querySelector(".number-container .number").innerHTML == previousCell.querySelector(".number-container .number").innerHTML){
                        adjacent.splice(j, 1);
                    }
                }
            }

            previousCell = adjacent[getRandomNum(0, adjacent.length-1)];
            move(previousCell);
            i++;
        } else {
            clearInterval(interval);
            startEnd = true;
        }
    }, 5);
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}