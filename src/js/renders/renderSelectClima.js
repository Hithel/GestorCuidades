export default function renderSelectClima(data){
    let selectCuidadClima = document.querySelector("#selectCuidadClima")

    selectCuidadClima.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione la ruta";
    selectCuidadClima.appendChild(option);

    data.forEach((cuidad)=>{
        let option = document.createElement("option");
        option.setAttribute("value", `${cuidad.id}`);
        option.innerHTML = `
            ${cuidad.nomCiudad}
        `;

        selectCuidadClima.appendChild(option);
    });
};