const params = {parent: document.body, title: ""}
const saludar = ()=>{
    let input = document.querySelector('.micampo-nombre');
    let numero1 = parseFloat(input.value);
    params.title = input.value;
    alert(`Hola desde saludar, ${input.value}`)
}
/*
const customComponent = ({parent, title})=>{
    console.log(parent, title);
    const container = document.createElement('div');
    container.className = "custom";
    container.innerText = title;
    container.setTitle = (title)=>{
        container.title = title;
        container.innerText = title;
    }
    container.innerHTML = container.title;
    parent.append(container);
    return container;
}
*/
function onPersonaClick(texto){
    console.log("click en el elemento persona", "onPersonaClick",texto)
}

function cambiarColor(color){
    const persona = document.querySelector('.persona');
    persona.style.background  = color;
}

window.addEventListener('load', ()=>{
    const persona = document.querySelector('.persona');
    //persona.addEventListener('click', onPersonaClick);
    console.log("Elemento: ", );
   // alert("documento cargado por completo..");
});

console.log("Al cargar el script: ", document.querySelector('.persona'))