// --------------------------------------
//1.Nuestros datos
// --------------------------------------


// const listaCanciones = ["Otra vez", "Pro-Love", "Ay que desgracia", "Flores", "uwu^^"]

// const listaArtistas = ["La Élite", "GRLS", "Daveartt", "Latin Mafia", "Rusowsky"]

// const ListaImg = ["img/cancion-1.jpeg", "img/cancion-2.jpeg", "img/cancion-3.jpeg", "img/cancion-4.webp", "img/cancion-5.png"]

// const listaMp3 = ["url1", "url2"]


// esto es una manera mas rapida de acceder a los objetos con sus propiedades definidas

const lista_canciones = [

    { artista: "La Élite",
        url:"",
        img:"url",
        titulo:"Otra vez"},

    { artista: "Pro-Love",
        url:"",
        img:"url",
        titulo:"GRLS"},


    { artista: "Ay que desgracia",
        url:"",
        img:"url",
        titulo:"Daveartt"},


    { artista: "Latin Mafia",
        url:"",
        img:"url",
        titulo:"Otra vez"},


    { artista: "uwu^^",
        url:"",
        img:"url",
        titulo:"Rusowsky"}
];

// -----------------------------------------
//2. Constantes, variables y Query Selector 
// -----------------------------------------


const divListaCanciones = document.getElementById("ListaCanciones");

// -----------------------------------------
//3. Botones
// -----------------------------------------

const btnSig = document.querySelector("#btnNext");
const btnAnt = document.querySelector("#btnBack");
const btnPausa = document.querySelector("#btnPausa");
const btnTema3 = document.querySelector("#tema3");



const audioPlayer = document.querySelector("audio"); 
const divCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.querySelector("#playingSong");


let idCancionActual = 0; //canción inicial 


const handleReproducir = ()=>{
    audioPlayer.pause();
}
const pausar = () => {
    audioPlayer.pause();
}


// -----------------------------------------
//4. Funciones
// -----------------------------------------

function imprimirReproduciendo() {


    const song = lista_canciones[idCancionActual].titulo;
    const artist = lista_canciones[idCancionActual].artista;
    // imagen = ListaImg[idCancionActual];


    console.log("Artista: " + artist + " Canción: " + song);

    divPlayingSong.innerHTML = `<div> Canción: ${song} id ${idCancionActual} </br> Artista: ${artist}</div>`;
    //no ponenos += porque no queremos que agregue elementos en pantalla, sino qe queremos sobreescribir los temas que estamos escuchando 


    //cambiar el source de nuestro audio HTML
    // console.log[audioPlayer];
    // audioPlayer.src =[idCancionActual];


};



btnSig.addEventListener("click", () => {

    //preguntar si es la última cancion 
    //si es cierto idCancion=0

    if (idCancionActual==lista_canciones.length -1) {
        idCancionActual = 0;


    //si no es cierto, idCancion sumará 1
    } else {
        idCancionActual++;
    }

imprimirReproduciendo();

});



btnBack.addEventListener("click", () => {

    //preguntar si estoy en la primera cancion 

    if(idCancionActual == 0){  //los == es para comparar algo, el = es solo para guardar los valores de la derecha 
        idCancionActual=lista_canciones.length -1;
    } else {
        idCancionActual--;
    }
    console.log(idCancionActual);

    imprimirReproduciendo();
});



btnTema3.addEventListener("click", () => {
    // console.log(`Canción: "`, lista_canciones[2]);
    // console.log(`Artista: "`, lista_canciones[2].artista);
    idCancionActual = 2;
    imprimirReproduciendo();
});





//4.Su código




lista_canciones.forEach((cancion, i) => {

    console.log(`${cancion} - id: ${i}`);


    //dentro de este bucle estamos generando dos variables que tienen un mismo índice

    const song = cancion.titulo;  //puedo poner song tb (a parte de cancion) porque forEach ya me devuelve canción
    const artist = cancion.artista;
    // const img = ListaImg[i];



    //innerHTML
    //creamos un html personalizado para ir metiendo en ese div, la lista de canciones. el += es para añadir un nuevo elemento (al final). push es para meter un nuevo elemento en la lista.
    //con esto de innerHTML, estoy diciendo que imprima mis variables generadas dentro del bucle, en pantalla

    //puedo diseñar el div en el propio archivo html para ver como quedaría en pantalla, para despues copiarlo y pegarlo aquí en innerHTML:∫

    divListaCanciones.innerHTML += `<div id="${i}" class="Lista-cancion"> ${song} <br> ${artist} <br> Track ${i}  </div>`;



});




//ej4
document.addEventListener('click', (event) => {
    console.log(event.target.id);
});



//target te devuelve en consola el id porque está descrito en console.log (id)








//el id lo generamos en el innerHTML del ejercicio 3. el índice es el que hace que sea 1, pues hay una cancion 1, cancion 2....

//añadimos un eventListener + selector All, todos los que trengan la clase listaCanciones



divCanciones.forEach((divCancion, i) => {

    divCancion.addEventListener("click", () => {

        imprimirReproduciendo();

    });

});

// const imagen = ListaImg[i];













// btnPause.addEventListener("click", (handlereproducir)=>

// )};


// btnPlay.addEventListener("click", (handlePausar)=>

// )};










