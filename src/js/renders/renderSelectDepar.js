export default function renderSelectDepar(data){
    let selectDepartamento = document.querySelector("#selectDepartamento")

    selectDepartamento.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione la ruta";
    selectDepartamento.appendChild(option);

    data.forEach((depar)=>{
        let option = document.createElement("option");
        option.setAttribute("value", `${depar.id}`);
        option.innerHTML = `
            ${depar.nomDepartamento}
        `;

        selectDepartamento.appendChild(option);
    });
};