function crearPersona(classColor){
    //Esto obtiene el elemento del dom que tiene la clase lista-personas
    const lista = document.querySelector('.lista-personas');
    //esto crea un nuevo elemento "div"
    const nueva = document.createElement('div');
    //esto modifica la propiedad class del elemento div en la variable nueva
    nueva.className = `persona ${classColor}`;
    //esto modifica el contido del texto del elemento div en la variable nueva
    nueva.innerText = `persona ${classColor}`;
    //esto crea un nuevo elemento "button"
    const boton = document.createElement('button');
    boton.className = "btn btn-danger";
    boton.innerText = "Eliminar";

    //agregamos un listener al evento click del elemento boton
    boton.addEventListener('click', ()=>{
        //Eliminar elemento nueva al hacer click
        lista.removeChild(nueva);
    });
    //agregamos el boton dentro del elemento nueva
    nueva.appendChild(boton);
    //agregamos el elemento nueva dentro de la lista
    lista.appendChild(nueva);
}
