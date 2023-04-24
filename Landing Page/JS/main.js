

var nome = document.getElementById("name-user").value;
var telefone = document.getElementById("telefone-user").value;

// VARIAVEIS DE AMBIENTE E CRIAÇÃO DE TELAS

var boxScreen = document.createElement("div");
boxScreen.setAttribute("id", "box-screen-js");

var exitButton = document.createElement("button");
exitButton.setAttribute("value", "X");
exitButton.setAttribute("id", "exit-button-box-js");

var titleBox = document.createElement("p");
titleBox.setAttribute("id", "js-box-title");

function validation(){
    if(nome == null){
        document.element
    }
}


function errorMsg(){
    boxScreen.setAttribute("id", "error-msg-box-js");

}