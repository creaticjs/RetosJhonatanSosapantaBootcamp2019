function calcular() {

    var salarioA = document.getElementById('salarioA').value;
    var salarioAct = parseInt(salarioA);

    if(salarioAct >= 0 && salarioAct<=9000){
       var resultado = salarioAct + (salarioAct * 20)/100;
    }
    if(salarioAct >= 9001 && salarioAct<=15000){
        var resultado = salarioAct + (salarioAct * 10)/100;
    }
    if(salarioAct >= 15001 && salarioAct<=20000){
        var resultado = salarioAct + (salarioAct * 5)/100;
    }
    if(salarioAct > 20000){
        var resultado = salarioAct + (salarioAct * 0)/100;
    }

    document.getElementById('nuevoS').value = resultado;
}

function calcular2() {

    var limite = parseInt(document.getElementById('limite').value);
    var suma = 0;
    var pi;

    for ( var i=1; i<=limite; i++ ) {
        suma += 1 / ( i**2 );
    }

    pi = Math.sqrt(suma * 6);

    document.getElementById('resultado2').value = pi;
}

function calcular3() {
    debugger
    var valorN = parseInt(document.getElementById('valorN').value);
    valorNarray = [];

    for ( var i=1; i<=valorN; i++ ) {
        var inputN = document.createElement("input");
        inputN.type = "number";
        inputN.placeholder = "Ingrese aquí el numero" + i;
        inputN.id = "n" + i;
        inputN.className = "form-control";
 
        var label = document.getElementById("inputN").appendChild(document.createElement("label"));
        label.className = "control-label";
        label.innerHTML = "N" + i;
        document.getElementById("inputN").appendChild(inputN);
        document.getElementById("inputN").appendChild(document.createElement("br"));
    }


  
}

function borrar() {
    location.reload();
}