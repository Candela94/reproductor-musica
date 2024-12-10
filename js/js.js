




const lista_canciones = [

    { artista: "La Élite",
        url:"./music/otra-vez.mp3",
        img:  "./img/cancion1.jpeg",
        titulo:"Otra vez"},

    { artista: "Pro-Love",
        url:"./music/pro-love.mp3",
        img: ".img/cancion2.jpg",
        titulo:"GRLS"},


    { artista: "Ay que desgracia",
        url:"./music/desgracia.mp3",
        img:"./img/cancion3.jpeg",
        titulo:"Daveartt"},


    { artista: "Latin Mafia",
        url:"./music/julieta.mp3",
        img:"./img/cancion4.webp",
        titulo:"Julieta"},


    { artista: "so so",
        url:"./music/rusowsky.mp3",
        img:"./img/cancion5.png",
        titulo:"Rusowsky"}
];

// -----------------------------------------
//2. Constantes, variables y Query Selector 
// -----------------------------------------


const divListaCanciones = document.getElementById("ListaCanciones");

// -------------------------------------------------------------------
//3. Botones
// ------------------------------------------------------------------

const btnSig = document.querySelector("#btnNext");
const btnAnt = document.querySelector("#btnBack");


const btnPausa = document.querySelector("#btnPause");
const btnPlay = document.querySelector("#btnPlay");


const btnTema3 = document.querySelector("#tema3");

// -----------------------------------------------------------------

const divCanciones = document.querySelectorAll(".Lista-cancion");

const divPlayingSong = document.querySelector("#playingSong");

const audioPlayer = document.querySelector("audio"); 


let idCancionActual = 0; //canción inicial 





// -----------------------------------------
//4. Funciones
// -----------------------------------------

function imprimirReproduciendo() {


    const song = lista_canciones[idCancionActual].titulo;
    const artist = lista_canciones[idCancionActual].artista;
    // imagen = ListaImg[idCancionActual];

    const img = lista_canciones[idCancionActual].img;
   
   


    console.log("Artista: " + artist + " Canción: " + song);

    divPlayingSong.innerHTML = `<div> 
                            <img class="imagenReproduciendo" src= "${img} alt="${song}"/>
                            ${song}  ${idCancionActual} </br>  ${artist} 
                            </div>`;

    //cambiar el source de nuestro reproductor html 
    console.log(audioPlayer);
    audioPlayer.src = lista_canciones[idCancionActual].url;
 

};


function actualizarIsActive() {


    //Quitamos la clase isActive a todas las canciones

    document.querySelectorAll(".Lista-cancion").forEach((song) => {
        song.classList.remove('isActive');
    });


    const cancionActual = document.getElementById("idCancionActual");
    if(cancionActual){

        cancionActual.classList.add('isActive');
    }
    
};





// -----------------------------------------
//5. Event Listeners
// -----------------------------------------





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
actualizarIsActive();

 
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
    actualizarIsActive();



});





const handleReproducir = () => {
audioPlayer.play();

}


const handlePausar = () => {
audioPlayer.pause();
}



btnPlay.addEventListener("click",handleReproducir);
btnPausa.addEventListener("click", handlePausar);









btnTema3.addEventListener("click", () => {
    // console.log(`Canción: "`, lista_canciones[2]);
    // console.log(`Artista: "`, lista_canciones[2].artista);
    idCancionActual = 2;
    imprimirReproduciendo();
});




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





document.addEventListener('click', (event) => {
    console.log(event.target.id);
});




//el id lo generamos en el innerHTML del ejercicio 3. el índice es el que hace que sea 1, pues hay una cancion 1, cancion 2....

//añadimos un eventListener + selector All, todos los que trengan la clase listaCanciones



divCanciones.forEach((divCancion, i) => {

    divCancion.addEventListener("click", () => {

        imprimirReproduciendo();

    });

});
















