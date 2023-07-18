import {getInfoDepar, postCuidad,getCuidad, deleteCuidad,getInfoDeparAct, putCuidad } from "../Api/Api.js";

const from = document.querySelector("form");
const tbodyCuidad = document.querySelector('#tbodyCuidad');
const formActualizar = document.querySelector('#formActualizar');


let nombreDepartamento2 = document.querySelector('#nombreDepartamento2');
let urlImagen2 = document.querySelector('#urlImagen2');
let latitud2 = document.querySelector('#latitud2');
let longitud2 = document.querySelector('#longitud2');

getInfoDepar();
getCuidad();

from.addEventListener("submit",(e)=>{
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    
    let {lat,lon, ...rest} = data

    let coordenadas = {
        "lat": Number(lat),
        "lon": Number(lon),
    };
    
    let data2 = Object.assign(rest,{coordenadas});

    postCuidad(data2)
    from.reset();
});

tbodyCuidad.addEventListener("click",(e)=>{
    e.preventDefault();

    let div = e.target.closest("div");
    let id = div.id;
    let accion = e.target.dataset.accion;

    
    if(accion === "Eliminar"){
        deleteCuidad(div, id);
    }
    else if(accion === "Actualizar"){
        let div = e.target.parentElement.parentElement.childNodes[3]
        
        let divCuidad = div.childNodes[1].innerText;
        let divLat = div.childNodes[7].innerText;
        let divLon = div.childNodes[9].innerText;

        getInfoDeparAct()
        
        nombreDepartamento2.value = divCuidad;
        urlImagen2.value = "";
        latitud2.value = divLat
        longitud2.value = divLon


        formActualizar.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));
            
            let {lat,lon, ...rest} = data

            let coordenadas = {
                "lat": lat,
                "lon": lon,
            };
    
            let data2 = Object.assign(rest,{coordenadas});
            putCuidad(data2, id);
        });
    }
});

