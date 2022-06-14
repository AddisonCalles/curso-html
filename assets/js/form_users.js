
function guardar(){
    const inputName = document.querySelector('#inputname');
    const inputEmail = document.querySelector('#inputemail');
    const inputPhone = document.querySelector('#inputphone'); 
    const tbody = document.querySelector('.table-users tbody');
    const users = document.querySelectorAll('.table-users tbody tr');

    const name = inputName.value;
        
    if(name.length <= 0) {
        alert("nombre invalido");
        return;
    }

    //Crear fila
    const fila = document.createElement('tr'); // <tr></tr>

    //Crear columnas
    const colId = document.createElement('th');
    const colName = document.createElement('td');
    const colEmail = document.createElement('td');
    const colPhone = document.createElement('td');

    //Modificar atributos a columnas
    colId.setAttribute('scope','row');

    //Modificar el contenido a columnas
    colId.innerText = users.length + 1;
    colName.innerText = inputName.value;
    colEmail.innerText = inputEmail.value;
    colPhone.innerText = inputPhone.value;

    //Agregar las columnas a la fila
    fila.append(colId);
    fila.append(colName);
    fila.append(colEmail);
    fila.append(colPhone);

    //Agregar la fila al tbody
    tbody.append(fila);
}