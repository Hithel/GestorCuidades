export default function renderCuidad(data) {
    let tbodyCuidad = document.querySelector('#tbodyCuidad');

    tbodyCuidad.innerHTML = "";

    data.forEach((cuidad)=>{
        
        let div = document.createElement('div');
        div.setAttribute('class', 'card mt-3 bg-transparent text-light border-info');
        div.setAttribute("style","width: 23rem;");
        div.innerHTML = `
        <img src="${cuidad.imagen}" class="card-img-top" alt="...">
        <div class="card-body" id="${cuidad.id}">
          <h5 class="card-title">${cuidad.nomCiudad}</h5>
          <p class="card-text mt-4">ID de Cuidad: ${cuidad.id}</p>
          <p class="card-text mt-4">ID de Departamento: ${cuidad.departamentoId}</p>
          <p class="card-text mt-4">Latitud: ${cuidad.coordenadas.lat}</p>
          <p class="card-text mt-4">Longitud: ${cuidad.coordenadas.lon}</p>
          <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2 text-light">
          <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2 ">
        </div>
        `;
        

        tbodyCuidad.appendChild(div);
    });
}