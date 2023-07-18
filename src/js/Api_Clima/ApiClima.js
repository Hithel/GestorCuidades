import renderClima from "../renders/renderClima.js";


const URL = "https://api.openweathermap.org/data/2.5";
const Key = "8d5121a8895ccaec914639513cd1be37";


export async function getClima(data) {
    
    const{coordenadas, ...rest}= data;

    let clima = await (await fetch(`${URL}/weather?lat=${coordenadas.lat}&lon=${coordenadas.lon}&appid=${Key}`)).json();

    renderClima(clima.weather)
}