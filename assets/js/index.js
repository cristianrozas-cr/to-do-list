//Arreglo de objetos para las tareas
const tareas = [
    {id: 1,
    titulo: "hacer la cama",
    estado: false},

    {id: 2,
    titulo: "regar el pasto",
    estado: false},

    {id: 3,
    titulo: "hacer compras",
    estado: false} 

];

// querySelector para el input, el boton, la lista de tareas, el recuento del total y el recuento de las tareas realizadas
const entradaTareas = document.querySelector('#input-tareas');
const btnTareas = document.querySelector('#boton-tareas');
const listaDeTareas = document.querySelector('#lista-tareas');
const totalTareas = document.querySelector('#total-tareas');
const totalRealizadas = document.querySelector('#total-realizadas');


//Calculo de los id's
let ultimoId = tareas.length > 0 ? tareas[tareas.length - 1].id : 0;
const ultimaTarea = tareas[tareas.length - 1];

//Calculo de las tareas realizadas
function realizada(id){
    const indice = tareas.findIndex((ele) => ele === id);  //encontrar id                         
    //Cambiar el estado del objeto
    let tareasRealizadas = tareas.filter((tarea) => tarea.estado === true);
    console.log(tareasRealizadas.length)
    totalRealizadas.innerHTML = tareasRealizadas.length;
}

//Funcion del listener para capturar el texto del input y agregarlo al arreglo
btnTareas.addEventListener("click", () =>{
    const nuevaTarea = entradaTareas.value;
    tareas.push({id: ++ultimoId, titulo: nuevaTarea, estado: false})
    entradaTareas.value = "";
    totalTareas.innerHTML = tareas.length;
    mostrarTareas()
})

//Funcion para borrar las tareas
function borrar(id){
    const index = tareas.findIndex((ele) => ele === id);
    tareas.splice(index, 1);
    mostrarTareas()
    totalTareas.innerHTML = tareas.length;
}

//Funcion para recorrer el arreglo y mostrarlo en html
function mostrarTareas(){
    listaDeTareas.innerHTML = "";
    tareas.forEach((tarea) => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('card');
        divTarea.innerHTML = `
        <h3>${tarea.id}</h3> 
        <h3>${tarea.titulo}</h3> 
        <div class="iconos">
        <button onclick="realizada(${tarea.id})">Hecho</button>
        <button onclick="borrar(${tarea.id})">Borrar</button>
        </div>
        `
        listaDeTareas.appendChild(divTarea);
    })
}

//Llamar a la función
mostrarTareas();



