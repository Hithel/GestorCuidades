import {postDepartamentos,getDepartamentos,deleteDepartamento,putDepartamento} from "../Api/Api.js";

const form = document.querySelector('#form');
const tbodyDepartamento = document.querySelector('#tbodyDepartamento');
const formActualizar = document.querySelector('#formActualizar');

getDepartamentos();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.target));
    
    postDepartamentos(data)

    form.reset();
});

tbodyDepartamento.addEventListener('click', (e) => {
    e.preventDefault();

    let tr = e.target.closest("tr");
    let id = tr.id;

    let accion = e.target.dataset.accion;
    
    if(accion === "Eliminar"){
        deleteDepartamento(tr,id);
        tr.remove();
    }
    else if(accion === "Actualizar"){
      formActualizar.addEventListener("submit", (e) => {
        e.preventDefault();

        let data = Object.fromEntries(new FormData(e.target));

        putDepartamento(data,id);
      });
    }
})
