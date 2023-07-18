import renderDepartamento from "../renders/renderDepartamento.js";
import renderSelectDepar from "../renders/renderSelectDepar.js"
import renderCuidad from "../renders/renderCuidad.js"
import renderSelectDeparAct from "../renders/renderSelectDeparAct.js"

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});

// Peticiones de departamentos

export async function getDepartamentos(){
    let data = await (await fetch(`${URL}/Departamentos`)).json();
    renderDepartamento(data);
}

export async function postDepartamentos(data) {
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let departamentos = await (await fetch(`${URL}/Departamentos`,config)).json();
}

export async function deleteDepartamento(tr,id){
    let data = Object.fromEntries(new FormData(tr.target));

    let config = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let puntos = await(await fetch(`${URL}/Ciudades?departamentoId=${id}`)).json();

    for(const punto of puntos){
        let puntoId = punto.id;
        let configuracionPunto = {
            method: 'DELETE',
            headers: headers
        }

    let delPunto = await(await fetch(`${URL}/Ciudades/${puntoId}`, configuracionPunto)).json();
}

    let del = await(await fetch(`${URL}/Departamentos/${id}`,config)).json();


}

export async function putDepartamento(data,id) {

    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let act = await (await fetch(`${URL}/Departamentos/${id}`,config)).json();
}

// obtener informacion para renderizar el select en la pagina cuidad

export async function getInfoDepar(){
    let data = await (await fetch(`${URL}/Departamentos`)).json();
    renderSelectDepar(data)
}


// peticiones de Cuidad

export async function getCuidad(){
    let data = await (await fetch(`${URL}/Ciudades`)).json();
    renderCuidad(data);
}

export async function postCuidad(data){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

    let departamentos = await (await fetch(`${URL}/Ciudades`,config)).json();
}

export async function deleteCuidad(div,id){
    let data = Object.fromEntries(new FormData(div.target));

    let configuracion = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await(await fetch(`${URL}/Ciudades/${id}`, configuracion)).json();
}

export async function putCuidad(data, id){
    let config = {
        method: 'PUT',
        headers: headers,
        body:JSON.stringify(data)
    }

    let act = await (await fetch(`${URL}/Ciudades/${id}`,config)).json();
}

// peticion para renderizar el select de actualizar cuidad
export async function getInfoDeparAct(){
    let data = await (await fetch(`${URL}/Departamentos`)).json();
    renderSelectDeparAct(data);
}
