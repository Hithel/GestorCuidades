import {getInfoCuidad, getCoordenadasCuidad} from "../Api/Api.js";

const selectCuidadClima = document.querySelector("#selectCuidadClima")

getInfoCuidad()

selectCuidadClima.addEventListener("change",(e)=>{
    let valor = e.target.value
    
    getCoordenadasCuidad(valor)
});