export default function renderDepartamento(data){
    let tbodyDepartamento = document.querySelector('#tbodyDepartamento');

    tbodyDepartamento.innerHTML = "";

    data.forEach((departamento)=>{
        let tr = document.createElement("tr");
        tr.setAttribute("id",`${departamento.id}`);
        tr.setAttribute("class","tr");
        tr.innerHTML = `
        <td>${departamento.id}</td>
        <td>${departamento.nomDepartamento}</td>
        <td>
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2 text-light">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2 ">
        </td>
        `;

        tbodyDepartamento.appendChild(tr);
    });
}