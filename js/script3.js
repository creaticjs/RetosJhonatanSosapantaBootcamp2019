function getP(url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject("Error: " + this.status);
                }
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
}
//   getP("https://swapi.co/api/people/1")
//     .then(function(data) {
//       console.log(data);
//       return getP("https://swapi.co/api/people/2");
//     })
//     .then(function(data2) {
//       console.log(data2);
//     })
//     .catch(function() {
//       console.error(error);
//     });
async function getAllDatos() {
    var arrUrl = [
        "https://swapi.co/api/people/1",
        "https://swapi.co/api/people/2",
        "https://swapi.co/api/people/3",
        "https://swapi.co/api/people/4",
        "https://swapi.co/api/people/5"
    ];
    var promesas = arrUrl.map(function (url) {
        return getP(url);
    });
    try {
        var personajes = await Promise.all(promesas);
        console.log(personajes);
        debugger
        var conte = document.getElementById("contenedor");
        conte.innerHTML = "";
        var auxHtlm = "";
        personajes.forEach(function (p, i) {
            auxHtlm += "<div class='col-lg-4 col-sm-6 portfolio-item'>" + "<div class='h-80'>" + "<a href='" + array[i].url + "'><img class='card-img-top' src='" + array[i].image.medium + "' alt=''></a>" +
                "<div class='card-body letrasBlancas'>" + "<h4 class='card-title'></h4>" + "<a>" + "<strong class='letrasBlancas'>" + array[i].name + "</strong>" + "</a>" + "<p class='card-text'>" + res + "</p>"
                + "<a href='' class='btn btn-primary'>Detalle</a>" + "</div>" + "</div>" + "</div>"
        });
        conte.innerHTML = auxHtlm;
    } catch (error) { }
}
function haceralgo(par) {
    console.log(par);
}

// //Variables y array
// var personajes = [];

// //Buscando informacion de las urls
// function getP(url, callback) {
//     var httpX = new XMLHttpRequest();
//     httpX.onload = function () {
//         if (callback) {
//             callback(JSON.parse(this.responseText));
//         }
//     }
//     httpX.onerror = function () {
//         console.log(Error('Error'));
//     }
//     httpX.open('GET', url, true);
//     httpX.send();
// }

// //Buscar toda la informacion con promesas
// getP('https://pokeapi.co/api/v2/pokemon/', function (data) {

//     personajes.push(data);

//     var cont = document.getElementById("contenedor");
//     var series = "";

//     personajes.forEach(item => {
//         let array = Array.from(item)
//         for (var i = 0; i < array.length; i++) {
//             var res = array[i].summary.slice(0, 150);
//             series += "<div class='col-lg-4 col-sm-6 portfolio-item'>" + "<div class='h-80'>" + "<a href='" + array[i].url + "'><img class='card-img-top' src='" + array[i].image.medium + "' alt=''></a>" +
//                 "<div class='card-body letrasBlancas'>" + "<h4 class='card-title'></h4>" + "<a>" + "<strong class='letrasBlancas'>" + array[i].name + "</strong>" + "</a>" + "<p class='card-text'>" + res + "</p>" 
//                 + "<a href='' class='btn btn-primary'>Detalle</a>"+ "</div>" + "</div>" + "</div>"
//         }
//         cont.innerHTML = series;
//     });
// });