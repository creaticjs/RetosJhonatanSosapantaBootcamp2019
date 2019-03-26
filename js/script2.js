function calcular() {

    var salarioA = document.getElementById('salarioA').value;
    var salarioAct = parseInt(salarioA);

    if (salarioAct >= 0 && salarioAct <= 9000) {
        var resultado = salarioAct + (salarioAct * 20) / 100;
    }
    if (salarioAct >= 9001 && salarioAct <= 15000) {
        var resultado = salarioAct + (salarioAct * 10) / 100;
    }
    if (salarioAct >= 15001 && salarioAct <= 20000) {
        var resultado = salarioAct + (salarioAct * 5) / 100;
    }
    if (salarioAct > 20000) {
        var resultado = salarioAct + (salarioAct * 0) / 100;
    }

    document.getElementById('nuevoS').value = resultado;
}

function calcular2() {

    var limite = parseInt(document.getElementById('limite').value);
    var suma = 0;
    var pi;

    for (var i = 1; i <= limite; i++) {
        suma += 1 / (i ** 2);
    }

    pi = Math.sqrt(suma * 6);

    document.getElementById('resultado2').value = pi;
}

function agregarInputs() {
    var valorN = parseInt(document.getElementById('valorN').value);

    for (var i = 1; i <= valorN; i++) {
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

function calcular3() {
    var valorN = parseInt(document.getElementById('valorN').value);
    var valorNarray = [];
    var menor = 0;
    var mayor = 0;
    var suma = 0;
    var media = 0;

    for (var i = 1; i <= valorN; i++) {
        var inputNumber = parseInt(document.getElementById('n' + i).value);
        valorNarray.push(inputNumber);
    }
    valorNarray.sort();

    menor = valorNarray[0];
    mayor = valorNarray[valorN - 1];

    for (var i = 0; i <= valorN - 1; i++) {
        suma = suma + valorNarray[i];
    }
    media = suma / valorN;

    document.getElementById('resultado3').value = "El menos es: " + menor + ", " + "El mayor es: " + mayor + " y " + "La media es: " + media;
}

function calcular4() {
    var ano = document.getElementById('ano').value;
    var valormes = 0;
    var valordia = 0;

    A = ano % 19;
    B = ano % 4;
    C = ano % 7;
    D = (19 * A + 24) % 30;
    E = (2 * B + 4 * C + 6 * D + 5) % 7;
    N = (22 + D + E);

    if (N > 31) {
        valormes = 4;
        valordia = D + E;
    } else {
        valormes = 3;
        valordia = D + E;
    }


    var fecha = new Date(ano, valormes, valordia)
    document.getElementById('resultado4').value = fecha;
}

function calcular5() {
    var fechaB = document.getElementById('bisiesto').value;
    var year = parseInt(fechaB);

    var bisiesto = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;

    if (bisiesto === true) {
        document.getElementById('resultado5').value = "Este año es bisiesto";
    } else {
        document.getElementById('resultado5').value = "Este año no es bisiesto";
    }

}

function calcular6() {
    var valN = parseInt(document.getElementById('valN').value);
    var array1 = [4, 9, 2, 3, 5, 7, 8, 1, 6];
    var array2 = [11, 24, 7, 20, 3, 4, 12, 25, 8, 16, 17, 5, 13, 21, 9, 10, 18, 1, 14, 22, 23, 6, 19, 2, 15];

    if (valN === 3 || valN === 5 || valN === 7 || valN === 9 || valN === 11) {
        var body = document.getElementById("cuadromagico");
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var cont2 = 0;
        if (valN === 3) {
            for (var i = 0; i < valN; i++) {
                var hilera = document.createElement("tr");
                for (var j = 0; j < valN; j++) {
                    cont2 = ++cont2;
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(array1[cont2 - 1]);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            }
        }
        if (valN === 5) {
            for (var i = 0; i < valN; i++) {
                var hilera = document.createElement("tr");
                for (var j = 0; j < valN; j++) {
                    cont2 = ++cont2;
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(array2[cont2 - 1]);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            }
        }
        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "1");
    } else {
        var resultado = document.createElement("input");
        resultado.type = "text";
        resultado.placeholder = "Este numero no se encuentra el el rango de 3 a 11 impar";
        resultado.className = "form-control";
        resultado.disabled = true;
        document.getElementById("cuadromagico").appendChild(resultado);
    }
}

function calcular7() {
    var numPerfecto = 5;
    var arraynum = [];

    for (var i = 1; i <= numPerfecto; i++) {
        if ((Math.pow(2, (i)) - 1) % i === 1) {
            var numeroPerfecto = Math.pow(2, (i - 1)) * (Math.pow(2, (i)) - 1);
            arraynum.push(numeroPerfecto);
        } else {
            console.log("Numero no es perfecto");
        }
    }

    var primerNum = arraynum[0];
    var segundoNum = arraynum[1];
    var tercerNum = arraynum[2];
    document.getElementById('resultado7').value = "Primero: " + primerNum + ", " + "Segundo: " + segundoNum + " y " + "Tercero: " + tercerNum;
}

function calcular8() {
    var valx = parseInt(document.getElementById('valx').value);
    var suma = 0;
    var total = 0;

    for (var i = 1; i <= 100; i++) {
        var numeroSuma = Math.pow(valx, (i + 1)) / (this.factori(i));
        total = total + numeroSuma;
    }

    suma = 1 + total;
    document.getElementById('resultado8').value = suma;
}

function factori(j) {
    var factorial = 1;
    for (var i = 1; i <= j; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcular10() {

    a = Math.abs(parseInt(document.getElementById('valA').value));
    b = Math.abs(parseInt(document.getElementById('valB').value));
    var i1 = Math.max(a, b);
    var i2 = Math.min(a, b);
    var iaux;

    do {
        iaux = i2;
        i2 = i1 % i2;
        i1 = iaux;
    } while (i2 !== 0);

    document.getElementById('resultado10').value = i1;
}

function calcular11() {
    var numP = parseInt(document.getElementById('numP').value);
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var resultado = [];
    var resultado2 = 0;

    for (var i = 0; i < array.length; i++) {
        resultado2 = numP % array[i];
        resultado.push(resultado2);
    }

    var resul = resultado.filter(number => number < 1);

    if (resul.length < 3) {
        document.getElementById('resultado11').value = "Es primo";
    } else {
        document.getElementById('resultado11').value = "No es primo";
    }

}

function calcular12() {
    var numS = parseInt(document.getElementById('numS').value);
    var resultado = 0;

    for (var i = 1; i <= numS; i++) {
        resultado = resultado + (1 / i);
    }

    document.getElementById('resultado12').value = resultado;

}

function calcular13() {
    var numS2 = parseInt(document.getElementById('numS2').value);
    var resultado = 0;

    for (var i = 1; i <= numS2; i++) {
        resultado = resultado + (i / Math.pow(2, i));
    }

    document.getElementById('resultado13').value = resultado;

}

function calcular14() {
    var numF = parseInt(document.getElementById('numF').value);

    var body = document.getElementById("figura");
    var h5 = document.createElement("h5");
    var span = document.createElement("span");

    for (var i = 0; i < numF; i++) {
        var textoCelda = document.createTextNode("*");
        span.appendChild(textoCelda);
        h5.appendChild(span);
    }

    body.appendChild(h5);
    span.setAttribute("class", "text-primary");

}

function calcular15() {
    var numPerfecto = parseInt(document.getElementById('numD').value);;
    var arraynum = [];
    var cont = 0;

    for (var i = 1; i <= numPerfecto; i++) {
        if ((Math.pow(2, (i)) - 1) % i === 1) {
            var numeroPerfecto = Math.pow(2, (i - 1)) * (Math.pow(2, (i)) - 1);
            arraynum.push(numeroPerfecto);
        } else {
            console.log("Numero no es perfecto");
        }
    }
    document.getElementById('resultado15').value = arraynum;
}

function calcular16() {
   
}

function calcular17() {
    var numero = document.getElementById('numerof').value;
    var num = parseInt(numero);
    if(num > 0){
     document.getElementById('resultado17').value = "Positivo";
    }
    if(num === 0){
     document.getElementById('resultado17').value = "Igual a cero";
    }
    if(num < 0){
     document.getElementById('resultado17').value = "Negativo";
    }
 }

function borrar() {
    location.reload();
}