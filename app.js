var tableBombIt = [
                    " ",
                    "*",
                    "1",
                    " ",
                    "/n",
                    " ",
                    " ",
                    "*",
                    "2",
                    "/n",
                    "1",
                    "*",
                    " ",
                    " ",
                    "/n",
                    " ",
                    "3",
                    "*",
                    " "
                    ];

 var containerBombIt = document.getElementById("container-bomb-it");
 var bombIt = document.getElementById("bomb-it");

var drawGameZone = function(array){
    for (i = 0; i< tableBombIt.length; i++) {
        var cell = document.createElement("div");
        var enter = document.createElement("br");

        if (array[i] == "1" || array [i] == "2" || array[i] == "3") {
            cell.className = "number";
            cell.innerText = array[i];
            cell.onclick = showNumber;
        } else if (array[i] == " ") {
            cell.className = "empySpace";
            cell.onclick = changeColor;
        } else if (array[i] == "*") {
            cell.className = "bomb";
            cell.onclick = boom;
        } else if (array[i] == "/n") { // la última opcion es el salto de línea "/n"
            bombIt.appendChild(enter);
            continue; //para que se salte al siguiente y no cree un div con el salto de línea
        }
        bombIt.appendChild(cell);
    }
    addBtnRestart();
};

var showNumber = function (){
    this.className = "number numberShow";
};

var changeColor = function () {
    this.style.backgroundColor = "#000000";
};

var boom = function () {
    containerBombIt.removeChild(bombIt);
    containerBombIt.innerHTML = "<img src='https://i0.wp.com/media1.giphy.com/media/3oEduEbajCewkZ2q5y/giphy.gif' alt='Boom'>";
    addBtnRestart();
};

var addBtnRestart = function () {
    var btnRestart = document.createElement("button");
    btnRestart.innerText = 'Restart!';
    btnRestart.addEventListener = ('click', reStart);
    containerBombIt.appendChild(btnRestart);
};

var reStart = function() {
   location.reload();  
};

drawGameZone(tableBombIt);