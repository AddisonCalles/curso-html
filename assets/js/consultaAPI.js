
function addRegistro(tbody, id, nombre, edad, nacionalidad){
    //Crear fila
    const fila = document.createElement('tr'); // <tr></tr>

    //Crear columnas
    const colId = document.createElement('th');
    const colName = document.createElement('td');
    const colEdad = document.createElement('td');
    const colNacionalidad = document.createElement('td');

    //Modificar atributos a columnas
    colId.setAttribute('scope','row');

    //Modificar el contenido a columnas
    colId.innerText = id;
    colName.innerText = nombre;
    colEdad.innerText = edad;
    colNacionalidad.innerText = nacionalidad;

    //Agregar las columnas a la fila
    fila.append(colId);
    fila.append(colName);
    fila.append(colEdad);
    fila.append(colNacionalidad);

    //Agregar la fila al tbody
    tbody.append(fila);
}

/**
 * DOCUMENTACION DE APIS:
 * URLS
 * PARAMETROS
 * METODOS
 * RESPUESTAS
 * 
 */
async function getUsers(nombre){
   let url = `http://localhost:3000/users`;
   if(nombre) url = url + `/${nombre}`; //Agregar parametro de busqueda si el valor no es undefined
   const response = await fetch(url);
   const users = response.json();
   return users;
} 

async function buscar(){
    const inputName = document.querySelector('#inputname'); // Obtener el input inputname
    const tbody = document.querySelector('.table-users tbody');
    tbody.innerHTML = ""; // Limpiar las filas actuales
    const users = await getUsers(inputName.value);
    //tbody, id, nombre, edad, nacionalidad
    for (const user of users) { // Recorrer el array con los usuarios encontrados
        addRegistro(tbody, user.id, user.nombre, user.edad, user.nacionalidad);
        console.log(user);
    }
}