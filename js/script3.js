var search = document.getElementById("search");
search.addEventListener("keyup", searchPoke);
var todosPokemons = [];

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

$(document).ready(function () {
    var pagina = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
    paginador(pagina);
    var cont = 0;
    $("#prev").click(function () {
        if (cont <= 0) {
            return
        }
        cont -= 20;
        var pagina = "https://pokeapi.co/api/v2/pokemon?offset=" + cont + "&limit=20";

        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20") {
            $("#pag2").removeClass("active");
            $("#pag1").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") {
            $("#pag3").removeClass("active");
            $("#pag2").addClass("active");
            return paginador(pagina);
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20") {
            $("#pag4").removeClass("active");
            $("#pag3").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=60&limit=20") {
            $("#pag5").removeClass("active");
            $("#pag4").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=80&limit=20") {
            $("#pag5").addClass("active");
            return paginador(pagina)
        }
    })
    $("#next").click(function () {
        if (cont >= 80) {
            return
        }
        cont += 20;
        var pagina = "https://pokeapi.co/api/v2/pokemon?offset=" + cont + "&limit=20";

        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20") {
            $("#pag1").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") {
            $("#pag1").removeClass("active");
            $("#pag2").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20") {
            $("#pag2").removeClass("active");
            $("#pag3").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=60&limit=20") {
            $("#pag3").removeClass("active");
            $("#pag4").addClass("active");
            return paginador(pagina)
        }
        if (pagina === "https://pokeapi.co/api/v2/pokemon?offset=80&limit=20") {
            $("#pag4").removeClass("active");
            $("#pag5").addClass("active");
            return paginador(pagina)
        }
    })
});

function paginador(pagina) {
    getP(pagina).then(function (data) {
        var arrayURL = [];
        for (var i = 0; i < data.results.length; i++) {
            arrayURL.push(data.results[i].url);
        }
        getAllDatos(arrayURL);
    })
}

async function getAllDatos(arrayurl) {
    if (arrayurl.length > 0) {
        $("#cargando").hide();
        $("#content").show();
        var promesas = arrayurl.map(function (url) {
            return getP(url);
        });
        try {
            var personajes = await Promise.all(promesas);
            detalle(personajes);
            todosPokemons = personajes;
            var conte = document.getElementById("contenido1");
            conte.innerHTML = "";
            var auxHtlm = "";
            personajes.forEach(function (p, i) {
                auxHtlm += `<div class="card ml-4 mb-5" style="width: 18rem;">
                              <img class="card-img-top" src=${p.sprites.front_default} alt="Card image cap" width="50" height="200"> 
                                <div class="card-body">
                                   <h5 class="card-title">${p.name}</h5>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Altura: ${p.height}</li>
                                    <li class="list-group-item">Anchura: ${p.weight}</li>
                                    <li class="list-group-item">Experiencia base: ${p.base_experience}</li>
                                    </ul>
                                   <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal${i + 1}">Mas información</a>
                                </div>
                            </div>`
            });
            conte.innerHTML = auxHtlm;
        } catch (error) {
            $("#cargando").show();
            $("#content").hide();
        }
    } else {
        $("#cargando").show();
        $("#content").hide();
    }
}

searchPoke();

function searchPoke() {
    if ($("#search").val() == "") {
        $("#contenedor2").hide();
        $("#contenedor1").show();
    }
    else {
        $("#contenedor1").hide();
        $("#contenedor2").show()

        var query1 = Enumerable.From(todosPokemons)
            .Where('!!($.name).toLowerCase().match(/^' + $("#search").val() + '/)')
            .ToArray();
        var conte = document.getElementById("contenido2");
        conte.innerHTML = "";
        var auxHtlm = "";
        query1.forEach(function (p, i) {
            auxHtlm += `<div class="card ml-4 mb-5" style="width: 18rem;">
                                      <img class="card-img-top" src=${p.sprites.front_default} alt="Card image cap" width="50" height="200"> 
                                        <div class="card-body">
                                           <h5 class="card-title">${p.name}</h5>
                                            <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Altura: ${p.height}</li>
                                            <li class="list-group-item">Anchura: ${p.weight}</li>
                                            <li class="list-group-item">Experiencia base: ${p.base_experience}</li>
                                            </ul>
                                           <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal${i + 1}">Mas información</a>
                                        </div>
                                    </div>`
        });
        conte.innerHTML = auxHtlm;
    }

}

async function detalle(url) {


    var url3 = [];
    for (var i = 0; i < url.length; i++) {
        var url2 = url[i].species.url;
        url3.push(getP(url2));
    }

    try {
        var personajes = await Promise.all(url3);
        console.log(personajes);
        var conte = document.getElementById("modal");
        conte.innerHTML = "";
        var auxHtlm = "";
        personajes.forEach(function (p, i) {
            auxHtlm += `<div class="modal fade" id="myModal${i + 1}" role="dialog">
                       <div class="modal-dialog modal-sm">
                           <div class="modal-content">
                               <div class="modal-header">
                                   <img src="/img/pokebola.png" width="50" height="50" class="mr-5">
                                   <h4>${p.name}</h4>
                                   <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                <p>${p.flavor_text_entries[3].flavor_text}</p>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">Forma: ${p.shape.name}</li>
                                  <li class="list-group-item">Tasa de captura: ${p.capture_rate}</li>
                                  <li class="list-group-item">Color: ${p.color.name}</li>
                                </ul>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>`
        });
        conte.innerHTML = auxHtlm;
    } catch (error) {
        $("#cargando").show();
        $("#content").hide();
    }

}