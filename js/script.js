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
    var numero2 = array[2];
    var resultado = 0;
    
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
        'veintiuno': 21,
        'veintidos': 22,
        'veintitres': 23,
        'veinticuatro': 24,
        'veinticinco': 25,
        'veintiseis': 26,
        'veintisiete': 27,
        'veintiocho': 28,
        'veintinueve': 29,
        'treinta': 30,
        'cuarenta': 40,
        'cincuenta': 50,
        'sesenta': 60,
        'setenta': 70,
        'ochenta': 80,
        'noventa': 90,
        'cien': 100,
    }

    var x = Object.keys(numeroN);

    for (i = 0; i < x.length; i++) {
        if (numero1 === x[i]) {
            var x1 = x[i];
        }
        if(numero2 === x[i]){
            var x2 = x[i];
        }
    }
    
    var numeroN2 = [
        {nombre:'zero', cantidad: 0},
        {nombre:'uno', cantidad: 1},
        {nombre:'dos', cantidad: 2},
        {nombre:'tre', cantidad: 3},
        {nombre:'cuatro', cantidad: 4},
        {nombre:'cinco', cantidad: 5},
        {nombre:'seis', cantidad: 6},
        {nombre:'siete', cantidad: 7},
        {nombre:'ocho', cantidad: 8},
        {nombre:'nueve', cantidad: 9},
        {nombre:'diez', cantidad: 10},
        {nombre:'once', cantidad: 11},
        {nombre:'doce', cantidad: 12},
        {nombre:'trece', cantidad: 13},
        {nombre:'catorce', cantidad: 14},
        {nombre:'quince', cantidad: 15},
        {nombre:'dieciseis', cantidad: 16},
        {nombre:'diecisiete', cantidad: 17},
        {nombre:'dieciocho', cantidad: 18},
        {nombre:'diecinueve', cantidad: 19},
        {nombre:'veinte', cantidad: 20},
        {nombre:'veintiuno', cantidad: 21},
        {nombre:'veintidos', cantidad: 22},
        {nombre:'veintitres', cantidad: 23},
        {nombre:'veinticuatro', cantidad: 24},
        {nombre:'veinticinco', cantidad: 25},
        {nombre:'veintiseis', cantidad: 26},
        {nombre:'veintisiete', cantidad: 27},
        {nombre:'veintiocho', cantidad: 28},
        {nombre:'veintinueve', cantidad: 29},
        {nombre:'treinta', cantidad: 30},
        {nombre:'cuarenta', cantidad: 40},
        {nombre:'cincuenta', cantidad: 50},
        {nombre:'sesenta', cantidad: 60},
        {nombre:'setenta', cantidad: 70},
        {nombre:'ochenta', cantidad: 80},
        {nombre:'noventa', cantidad: 90},
        {nombre:'cien', cantidad: 100},
    ];

    function escritoanum1(numeroo) { 
        if(x1 === undefined){
            return numeroo.nombre === "zero";
        }else{
            return numeroo.nombre === x1;
        }
    }

    function escritoanum2(numeroo) { 
        if(x2 === undefined){
            return numeroo.nombre === "zero";
        }else{
            return numeroo.nombre === x2;
        }
    }

    resultado = numeroN2.find(escritoanum1).cantidad + numeroN2.find(escritoanum2).cantidad;
    document.getElementById('resultado7').value = resultado;

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
    var resultado2 = Math.round10(resultado, 2);

    document.getElementById('resultado9').value = resultado2;
}

(function () {
    function decimalAdjust(type, value, exp) {
        if (typeof exp === 'undefined' || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
            return NaN;
        }
        value = value.toString().split('e');
        value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }

    if (!Math.round10) {
        Math.round10 = function (value, exp) {
            return decimalAdjust('round', value, exp);
        };
    }
})();

function calcular12() {
    var fechaN = document.getElementById('fechaN').value;
    var array = fechaN.split("-");
    var dia = parseInt(array[0]);
    var mes = parseInt(array[1]);
    var ano = parseInt(array[2]);
    var hoy = new Date();
    var dd = hoy.getDate() + 1;
    var mm = hoy.getMonth() + 1;
    var yyyy = hoy.getFullYear();

    var resultado1 = yyyy - ano;
    var resultado2 = mm - mes;
    var resultado3 = dd - dia;

    if (ano === yyyy) {
        document.getElementById('resultado10').value = resultado2 + " meses" + " y " + resultado3 + " dias";
    } else {
        document.getElementById('resultado10').value = resultado1 + " años";
    }
}

function calcular13() {
    var variables = document.getElementById('variables').value;
    var array = variables.split(",");
    var a = parseInt(array[0]);
    var b = parseInt(array[1]);
    var c = parseInt(array[2]);
    var d = parseInt(array[3]);
    var e = parseInt(array[4]);
    var f = parseInt(array[5]);

    var x = (c * e - b * f) / (a * e - b * d);
    var y = (a * f - c * d) / (a * e - b * d);

    document.getElementById('resultado11').value = x;
    document.getElementById('resultado12').value = y;

}

function calcular14() {
    var fechaB = document.getElementById('bisiesto').value;
    var year = parseInt(fechaB);

    var bisiesto = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;

    if (bisiesto === true) {
        document.getElementById('resultado13').value = "año es bisiesto";
    } else {
        document.getElementById('resultado13').value = "año no es bisiesto";
    }

}

function calcular15() {
    var mess = document.getElementById('horaas').value;
    var anoo = document.getElementById('anoo').value;
    var mes = parseInt(mess);
    var ano = parseInt(anoo);

    resultado = new Date(ano, mes, 0).getDate()

    document.getElementById('resultado14').value = resultado;
}

function calcular16() {
    var valorhora = document.getElementById('valorhora').value;
    var horassemana = document.getElementById('horassemana').value;
    var horasextra = document.getElementById('horasextra').value;

    var vhora = parseInt(valorhora);
    var horass = parseInt(horassemana);
    var horasextra = parseInt(horasextra);

    if (horass < 40) {
        var resultado = horass * vhora;
        if (resultado < (vhora * 40)) {
            document.getElementById('resultado15').value = resultado;
            document.getElementById('impuestos').value = "No aplica";
        }
    }

    if (horass > 40) {

        var resultado = (horass * vhora) + ((horasextra * vhora * 50)/100);

        if (resultado > (vhora * 40)) {
            var resultado2 = resultado + ((resultado * 10) / 100);
            document.getElementById('resultado15').value = resultado2;
            document.getElementById('impuestos').value = "10%";
        }
    }

}

function calcular17() {
    var monto = document.getElementById('monto').value;
    var montoo = parseInt(monto);

    var billetemoneda = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50];

    for (i = 0; i < billetemoneda.length; i++) {
        if (montoo >= billetemoneda[i]) {
            if(billetemoneda[i] === 100000){
                var billetes100 = montoo/billetemoneda[i];
                if(billetes100 === 1){
                    document.getElementById('resultado16').value = billetes100 + " billete de 100 mil";
                }else{
                    document.getElementById('resultado16').value = billetes100 + " billetes de 100 mil";
                }
            }   
            if(billetemoneda[i] === 50000){
                var billetes50 = montoo/billetemoneda[i];
                if(billetes50 === 1){
                    document.getElementById('resultado17').value = billetes50 + " billete de 50 mil";
                }else{
                    document.getElementById('resultado17').value = billetes50 + " billetes de 50";
                }
            } 
            if(billetemoneda[i] === 20000){
                var billetes20 = montoo/billetemoneda[i];
                if(billetes20 === 1){
                    document.getElementById('resultado18').value = billetes20 + " billete de 20 mil";
                }else{
                    document.getElementById('resultado18').value = billetes20 + " billetes de 20 mil";
                }
            } 
            if(billetemoneda[i] === 10000){
                var billetes10 = montoo/billetemoneda[i];
                if(billetes10 === 1){
                    document.getElementById('resultado19').value = billetes10 + " billete de 10 mil";
                }else{
                    document.getElementById('resultado19').value = billetes10 + " billetes de 10 mil";
                }
            } 
            if(billetemoneda[i] === 5000){
                var billetes5 = montoo/billetemoneda[i];
                if(billetes5 === 1){
                    document.getElementById('resultado20').value = billetes5 + " billete de 5 mil";
                }else{
                    document.getElementById('resultado20').value = billetes5 + " billetes de 5 mil";
                }
            } 
            if(billetemoneda[i] === 2000){
                var billetes2 = montoo/billetemoneda[i];
                if(billetes2 === 1){
                    document.getElementById('resultado21').value = billetes2 + " billete de 2 mil";
                }else{
                    document.getElementById('resultado21').value = billetes2 + " billetes de 2 mil";
                }
            } 
            if(billetemoneda[i] === 1000){
                var billetes1 = montoo/billetemoneda[i];
                if(billetes1 === 1){
                    document.getElementById('resultado22').value = billetes1 + " billete de mil";
                }else{
                    document.getElementById('resultado22').value = billetes1 + " billetes de mil";
                }
            } 
            if(billetemoneda[i] === 500){
                var moneda500 = montoo/billetemoneda[i];
                if(moneda500 === 1){
                    document.getElementById('resultado23').value = moneda500 + " moneda de 500";
                }else{
                    document.getElementById('resultado23').value = moneda500 + " monedas de 500";
                }
            }   
            if(billetemoneda[i] === 200){
                var moneda200 = montoo/billetemoneda[i];
                if(moneda200 === 1){
                    document.getElementById('resultado24').value = moneda200 + " moneda de 200";
                }else{
                    document.getElementById('resultado24').value = moneda200 + " monedas de 200";
                }
            }   
            if(billetemoneda[i] === 100){
                var moneda100 = montoo/billetemoneda[i];
                if(moneda100 === 1){
                    document.getElementById('resultado25').value = moneda100 + " moneda de 100";
                }else{
                    document.getElementById('resultado25').value = moneda100 + " monedas de 100";
                }
            }   
            if(billetemoneda[i] === 50){
                var moneda50 = montoo/billetemoneda[i];
                if(moneda50 === 1){
                    document.getElementById('resultado26').value = moneda50 + " moneda de 50";
                }else{
                    document.getElementById('resultado26').value = moneda50 + " monedas de 50";
                }
            }   
        }
    }
}

function calcular18() {
   var numero = document.getElementById('numerof').value;
   var num = parseInt(numero);
   if(num > 0){
    document.getElementById('resultado27').value = "Positivo";
   }
   if(num === 0){
    document.getElementById('resultado27').value = "Igual a cero";
   }
   if(num < 0){
    document.getElementById('resultado27').value = "Negativo";
   }
}

function borrar() {
    location.reload();
}