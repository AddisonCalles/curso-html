const saludar = ()=>{
    let input = document.querySelector('.micampo-nombre');
    let numero1 = parseFloat(input.value);
    alert(`Hola desde saludar, ${input.value}`)
}