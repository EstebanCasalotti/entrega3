const boton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

boton.forEach(btn => {
    btn.addEventListener("click", addToCarritoItem)
})

function addToCarritoItem(e){
    const button = e.target
    const juego = button.closest(`.card`)
    const nombreDelJuego = juego.querySelector(`.card-title`).textContent;
    const precioDelJuego = juego.querySelector(`.precio`).textContent;
    const portadaDelJuego = juego.querySelector(`.card-img-top`).src;
    const newItem = {
        nombre: nombreDelJuego,
        precio: precioDelJuego,
        portada: portadaDelJuego,
        cantidad: 1
    }

    addItemCarrito(newItem)
}

function addItemCarrito(newItem){

    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){

    tbody.innerHTML = ''
    carrito.map(juego => {

        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const contenido = `
        <th scope="row">1</th>
            <td class="tdProductos">
                <img src=${juego.portada}alt="">
                <h6 class="title">${juego.nombre}</h6>
            </td>
            <td class="tdPrecio"><p>${juego.precio}</p></td>
            <td class="tdCantidad">
                <input type="number" min="1" value=${juego.cantidad}>
                <button class="delete btn btn-danger">x</button>
            </td>

       `
       tr.innerHTML = contenido;
       tbody.append(tr)
    })
    
}


function pagar(){
    let total 0; 
}
