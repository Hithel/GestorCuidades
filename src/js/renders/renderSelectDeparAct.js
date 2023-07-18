export default function renderSelectDeparAct(data){
    let selectDepartamento2 = document.querySelector("#selectDepartamento2")

    selectDepartamento2.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione la ruta";
    selectDepartamento2.appendChild(option);

    data.forEach((depar)=>{
        let option = document.createElement("option");
        option.setAttribute("value", `${depar.id}`);
        option.innerHTML = `
            ${depar.nomDepartamento}
        `;

        selectDepartamento2.appendChild(option);
    });
};