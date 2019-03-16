function calcular() {
    var numeros = document.getElementById('numeros').value;
    var array = numeros.split(",");
    debugger
    var suma = 0;
    var media;

    for (i = 0; i < array.length; i++) {
        suma = parseInt(suma) + parseInt(array[i]);
        media = suma / array.length;
    }

    document.getElementById('media').value = media;

    if (media >= 90 && media <= 100) {
        document.getElementById('puntuacion').value = "A";
    }
    if (media >= 80 && media <= 89) {
        document.getElementById('puntuacion').value = "B";
    }
    if (media >= 70 && media <= 79) {
        document.getElementById('puntuacion').value = "C";
    }
    if (media >= 60 && media <= 69) {
        document.getElementById('puntuacion').value = "D";
    }
    if (media >= 0 && media <= 59) {
        document.getElementById('puntuacion').value = "E";
    }
}

function calcular2() {
    var masa1 = document.getElementById('masa1').value;
    var masa2 = document.getElementById('masa2').value;
    var distancia = document.getElementById('distancia').value;
    var gravedad = 6.673 * Math.pow(10, -8);

    var resultado = (parseInt(masa1) * parseInt(masa2) * parseInt(gravedad)) / (Math.pow(distancia, 2));

    document.getElementById('resultado').value = resultado + " cm*g/sg^2";
}

function calcular3() {
    var masa = document.getElementById('masa').value;
    var velocidadluz = 2.997925 * Math.pow(10, 10);
    var resultado = masa * (Math.pow(velocidadluz, 3));

    document.getElementById('resultado2').value = resultado + " g*m^2/sg^2";
}

function calcular4() {
    var ladoa = document.getElementById('ladoa').value;
    var ladob = document.getElementById('ladob').value;
    var resultado = Math.sqrt((Math.pow(ladoa, 2)) + (Math.pow(ladob, 2)));

    document.getElementById('resultado3').value = resultado;
}

function calcular5() {
    var ladoa = document.getElementById('lado1').value;
    var ladob = document.getElementById('lado2').value;
    var ladoc = document.getElementById('lado3').value;
    var p = (ladoa + ladob + ladoc) / 2;
    var resultado = Math.sqrt(p * (p - ladoa) * (p - ladob) * (p - ladoc));

    document.getElementById('resultado4').value = resultado;
}

function calcular6() {
    var hora24 = document.getElementById('hora').value;
    var array = hora24.split("");
    var horas12 = parseInt(array[0] + array[1]);
    var minutos = parseInt(array[3]) + parseInt(array[4]);
    if (horas12 >= 0 && horas12 < 12) {
        document.getElementById('resultado5').value = horas12 + ":" + minutos + " am";
    } else if (horas12 >= 12 && horas12 <= 24) {
        if (horas12 >= 12 && horas12 < 13) {
            document.getElementById('resultado5').value = horas12 + ":" + minutos + " pm";
        }
        if (horas12 >= 13 && horas12 <= 24) {
            var formato12 = horas12 - 12;
            document.getElementById('resultado5').value = formato12 + ":" + minutos + " pm";
        }
    }
}

function calcular7() {
    var fechaU = document.getElementById('fechaU').value;
    var array = fechaU.split(" ");
    var dia = array[0];
    var mes = array[1];
    var ano = array[2];
    var mesTrans = "";

    if (mes === "enero") {
        mesTrans = "01";
    }
    if (mes === "febrero") {
        mesTrans = "02";
    }
    if (mes === "marzo") {
        mesTrans = "03";
    }
    if (mes === "abril") {
        mesTrans = "04";
    }
    if (mes === "mayo") {
        mesTrans = "05";
    }
    if (mes === "junio") {
        mesTrans = "06";
    }
    if (mes === "julio") {
        mesTrans = "07";
    }
    if (mes === "agosto") {
        mesTrans = "08";
    }
    if (mes === "septiembre") {
        mesTrans = "09";
    }
    if (mes === "obtubre") {
        mesTrans = "10";
    }
    if (mes === "noviembre") {
        mesTrans = "11";
    }
    if (mes === "Diciembre") {
        mesTrans = "12";
    }

    document.getElementById('resultado6').value = dia + " - " + mesTrans + " - " + ano;
}

function calcular8() {
    var numeroL = document.getElementById('numeroL').value;
    var array = numeroL.toString().split(/[\s-]+/);
    var numero1 = array[0];
    var numero2 = array[1];

    var numeroN = {
        'zero': 0,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'sie': 7,
        'ocho': 8,
        'nueve': 9,
        'diez': 10,
        'once': 11,
        'doce': 12,
        'trece': 13,
        'catorce': 14,
        'quince': 15,
        'dieciseis': 16,
        'diecisiete': 17,
        'deeciocho': 18,
        'deecinueve': 19,
        'veinte': 20,
        'veinti': 20,
    }

    this.valorNumerico1(numeroN, numero1);

    // var x = Object.keys(numeroN);

    console.log(numeroN.find(this.valorNumerico1()));
}


function valorNumerico1(numeroN, numero1) {
    var x = Object.keys(numeroN);
    for (i = 0; i < x.length; i++) {
        if (numero1 === x[i]) {
            debugger
            x1 = x[i];
            // console.log(numeroN.find(x[i]));
        }
        // if(numero2 === x[i]){
        //     debugger
        //     console.log(x[i]);
        // }
    }
    return x1;
}

function calcular9() {
    var radio = document.getElementById('radio').value;
    var circunferencia = 2 * Math.PI * parseInt(radio);
    var area = Math.PI * Math.pow(radio, 2);
    var diametro = 2 * radio;

    document.getElementById('circunferencia').value = circunferencia;
    document.getElementById('area').value = area;
    document.getElementById('diametro').value = diametro;
}

function calcular10() {
    var numero = parseInt(document.getElementById('numero').value);
    var numeroR = ["I", "V", "X", "L", "C", "D", "M", "(V)", "(X)", "(L)", "(C)", "(D)", "(M)"];

    if (numero > 3999999) throw "Los números superiores a 3999999 no se pueden convertir a romano. ¡Intente un valor más bajo!";

    var romano = "";
    var narray = String(numero).split("").reverse();

    var parser = function (item, index, a) {

        switch (item) {

            case "0":
            case "1":
            case "2":
            case "3":
                romano = (new Array(Number(item) + 1).join(numeroR[index * 2])) + romano;
                break;

            case "4":
                romano = numeroR[index * 2] + numeroR[index * 2 + 1] + romano;
                break;

            case "5":
            case "6":
            case "7":
            case "8":
                romano = numeroR[index * 2 + 1] + (new Array(Number(item) - 4).join(numeroR[index * 2])) + romano;
                break;

            case "9":
                romano = numeroR[index * 2] + numeroR[index * 2 + 2] + romano;
                break;

        }

    }

    narray.forEach(parser);

    document.getElementById('resultado8').value = romano;
}

function calcular11() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;

    var resultado = parseInt(num1 + num2 + num3 + num4)
    var resultado2 = Math.floor(resultado);

    document.getElementById('resultado9').value = resultado2;
}

function borrar() {
    document.getElementById('numeros').value = "";
    document.getElementById('media').value = "";
    document.getElementById('puntuacion').value = "";
    document.getElementById('masa1').value = "";
    document.getElementById('masa2').value = "";
    document.getElementById('distancia').value = "";
    document.getElementById('resultado').value = "";
    document.getElementById('masa').value = "";
    document.getElementById('resultado2').value = "";
    document.getElementById('ladoa').value = "";
    document.getElementById('ladob').value = "";
    document.getElementById('resultado3').value = "";
    document.getElementById('lado1').value = "";
    document.getElementById('lado2').value = "";
    document.getElementById('lado3').value = "";
    document.getElementById('resultado4').value = "";
    document.getElementById('hora').value = "";
    document.getElementById('resultado5').value = "";
    document.getElementById('fechaU').value = "";
    document.getElementById('resultado6').value = "";
    document.getElementById('radio').value = "";
    document.getElementById('circunferencia').value = "";
    document.getElementById('area').value = "";
    document.getElementById('diametro').value = "";
    document.getElementById('numero').value = "";
    document.getElementById('resultado8').value = "";
}