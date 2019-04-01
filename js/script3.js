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

getP("https://pokeapi.co/api/v2/pokemon/").then(function (data) {
    var arrayURL = [];
    for (var i = 0; i < data.results.length; i++) {
        arrayURL.push(data.results[i].url);
    }
    return arrayURL;
}).then(getAllDatos)

async function getAllDatos(arrayurl) {

    
    if(arrayurl.length > 0){
        var promesas = arrayurl.map(function (url) {
            return getP(url);
        });
        console.log(promesas)
        try {
            var personajes = await Promise.all(promesas);
            var conte = document.getElementById("contenedor");
            conte.innerHTML = "";
            var auxHtlm = "";
            personajes.forEach(function (p, i) {
                auxHtlm += `<div class="card ml-4 mb-5" style="width: 18rem;">
                              <img class="card-img-top" src=${p.sprites.front_default} alt="Card image cap" width="50" height="200"> 
                                <div class="card-body">
                                   <h5 class="card-title">${p.name}</h5>
                                   <p class="card-text">Some quick example text to build on the card title and
                                       make up the bulk of the card's content.</p>
                                    <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Cras justo odio</li>
                                    <li class="list-group-item">Dapibus ac facilisis in</li>
                                    <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                   <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Mas información</a>
                                </div>
                            </div>`
            });
            conte.innerHTML = auxHtlm;
            $("#cargando").hide();
        } catch (error) { }
    }else{
        $("#cargando").show();
    }
    
}
function haceralgo(par) {
    console.log(par);
}