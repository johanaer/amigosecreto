//declacion de variable de tipo array
let lista = [];
//Funcion para agregar amigos a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Ingrese un nombre válido.");
        return;
    }

    if (lista.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    lista.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarLista();
}
//Funcion para actualizar la lista de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    lista.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}
//funcion para sortear amigo secreto
function sortearAmigo() {
    //Condicion que indica que se deben agregar al menos dos amigos para realizar el sorteo
    if (lista.length < 2) {
        alert("Debes agregar al menos dos amigos para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * lista.length);
    let amigoSecreto = lista[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    //Muestra el amigo secreto
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
