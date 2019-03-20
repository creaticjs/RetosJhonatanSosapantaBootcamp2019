function siete(){
    var str1=document.getElementById('resultado').value; 
    console.log(str1);
    if(str1 == '0'){
        document.getElementById('resultado').value=7;
    }
    else{ 
        var str2='7'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function ocho(){
    var str1=document.getElementById('resultado').value; 
    console.log(str1);
    if(str1 == '0'){
        document.getElementById('resultado').value=8;
    }
    else{ 
        var str2='8'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function nueve(){
    var str1=document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=9;
    }
    else{ 
        var str2='9'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function cuatro(){
    var str1=document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=4
    }
    else{ 
        var str2='4'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function cinco(){
    var str1=document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=5;
    }
    else{ 
        var str2='5'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function seis(){
    var str1=document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=6;
    }
    else{ 
        var str2='6'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function uno(){
    var str1=document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=1;
    }
    else{ 
        var str2='1'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
    }
}

function dos(){
    var str1 = document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=2;
    }
    else{ 
        var str2='2'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value=res;
  }
}

function tres(){
    var str1 = document.getElementById('resultado').value; 
    if(str1 == '0'){
        document.getElementById('resultado').value=3;
    }
    else{ 
    var str2='3'; 
    var res = str1.concat(str2);
    document.getElementById('resultado').value=res;
   }
}

function cero(){
    var str1 = document.getElementById('resultado').value; 
    if (str1 == '0') { 
        document.getElementById('resultado').value = 0;
    } 
    else { 
        var str2 = '0'; 
        var res = str1.concat(str2);
        document.getElementById('resultado').value = res; 
    }
}

function borrar(){
    document.getElementById('resultado').value = 0;
}

function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };

    var operacion;

    switch(op) {
        case 'sumar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "suma";
            break;
        case 'restar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "resta";
            break;
        case 'multiplicar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "multiplicacion";
            break;
        case 'dividir':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "division";
            break;
            
        case 'igual':	
            
            operacion = document.getElementById("resultado").value;
            
            var memoriaop = document.getElementById("memoria").value;
            
            switch(memoriaop) {
                case 'suma':
                    var operandos = operacion.split("+");
                    var resultado = ops.sumar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'resta':
                    var operandos = operacion.split("-");
                    var resultado = ops.restar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'multiplicacion':
                    var operandos = operacion.split("*");
                    var resultado = ops.multiplicar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'division':
                    var operandos = operacion.split("/");
                    var resultado = ops.dividir(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;					
            
            }	
            

            break;
            

    }


}