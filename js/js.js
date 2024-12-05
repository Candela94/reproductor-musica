



        const listaCanciones = ["Let's stay together", "Riders on the storm", "Black magic woman", "Walk on the wildside" , "More than a woman"]

        const listaArtistas = ["All Green", "The Doors", "Santana", "Lou Reed", "BeeGees"]




    // ------------------------------------------------------------
    //     Mostrar los divs en pantalla a través de js y no html 
     // ------------------------------------------------------------

        const divListaCanciones = document.getElementById("ListaCanciones");
        listaCanciones.forEach((cancion, i) => {

            console.log(`${cancion} - id: ${i}`);


            //dentro de este bucle estamos generando dos variables que tienen un mismo índice

            const song = listaCanciones[i];  //puedo poner song tb (a parte de cancion) porque forEach ya me devuelve canción
            const artist = listaArtistas[i];


            //innerHTML
            //creamos un html personalizado para ir metiendo en ese div, la lista de canciones. el += es para añadir un nuevo elemento (al final). push es para meter un nuevo elemento en la lista.
            //con esto de innerHTML, estoy diciendo que imprima mis variables generadas dentro del bucle, en pantalla

            //puedo diseñar el div en el propio archivo html para ver como quedaría en pantalla, para despues copiarlo y pegarlo aquí en innerHTML:

            divListaCanciones.innerHTML += `<div id="${i}" class="Lista-cancion"> ${song} <br> ${artist} <br> Track ${i} </div>`;
        


        });

//------------------------------------------------------------------------------------------------------------------
//Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array
//------------------------------------------------------------------------------------------------------------------



        //selección del botón

        const btnTema3 = document.querySelector("#tema3");

        //añadimos un click y describimos la función
        btnTema3.addEventListener("click", ()  =>{
            console.log(`Canción: "`,listaCanciones[2]);
            console.log(`Artista: "`,listaArtistas[2]);
        });





 // ------------------------------------------------------------
//    Qué pasa si introduzco este código
 // ------------------------------------------------------------

     

        document.addEventListener('click', (event) => {
            console.log(event.target.id);
        });



        //target te devuelve en consola el id porque está descrito en console.log (id)


    


//------------------------------------------------------------------------------------------------------------------
//Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente.//------------------------------------------------------------------------------------------------------------------


//el id lo generamos en el innerHTML del ejercicio 3. el índice es el que hace que sea 1, pues hay una cancion 1, cancion 2....

//añadimos un eventListener + selector All, todos los que trengan la clase listaCanciones

const divCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.querySelector("#playingSong");

divCanciones.forEach( (divCancion, i)  => {

    divCancion.addEventListener("click", () => {

        imprimirReproduciendo();



    });

});


function imprimirReproduciendo(){

    
    const song = listaCanciones[idCancionActual];  
    const artist = listaArtistas[idCancionActual];
    console.log("Artista: " +artist+ " Canción: "+song);

        divPlayingSong.innerHTML = `<div> canción: ${song} </br> artista: ${artist} </div>`;
        //no ponenos += porque no queremos que agregue elementos en pantalla, sino qe queremos sobreescribir los temas que estamos escuchando 

}


//Dale la funcionalidad necesaria a los botones Siguiente, Anterior para que pase de una canción a otra en el array de canciones mostrado en el HTML.





const btnSig = document.querySelector("btnNext")


const btnAnt = document.querySelector("btnBack")

let idCancionActual = 0; //canción inicial 



btnSig.addEventListener("click", () => {
idCancionActual++;


});


//tarea: revisar que no me pase de la última canción, y que empiece por la primera, y lo mismo al revés (tienes qhacer la función imprimirResultado que ha hecho antes el profe)

//buscar etiqueta audio e investigar, para poner sonidos

















