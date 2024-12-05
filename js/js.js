



        const listaCanciones = ["Let's stay together", "Riders on the storm", "Black magic woman", "Walk on the wildside" , "More than a woman"]

        const listaArtistas = ["All Green", "The Doors", "Santana", "Lou Reed", "BeeGees"]




    // ------------------------------------------------------------
    //     Mostrar los divs en pantalla a través de js y no html 
     // ------------------------------------------------------------

        const divCanciones = document.getElementById("ListaCanciones");
        listaCanciones.forEach((cancion, i) => {

            console.log(`${cancion} - id: ${i}`);


            //innerHTML

            divCanciones.innerHTML += `<div class="Lista-cancion"> ${cancion} <br> Track ${i} </div>`;
        


        });

//------------------------------------------------------------------------------------------------------------------
//Crear un botón con el texto "Tema 3" que al hacer click muestre en consola el nombre de la canción y el artista de la canción que se encuentra en la posición 3 del array
//------------------------------------------------------------------------------------------------------------------



        //selección del botón
        const btnTema3 = document.querySelector("#tema3");

        //añadimos un click y describimos la función
        btnTema3.addEventListener("click", ()  =>{
            console.log(listaCanciones[2]);
        });



        //seleccionamos botones con la clase



        const btnNextBackPause = document.querySelectorAll('.btnNextBackPause');

    
        btnNextBackPause.addEventListener('click', (event) => {

            console.log(event.target.id);

        });


        //Agregar un atributo id a cada div generado en el punto 3





//------------------------------------------------------------------------------------------------------------------
//Agregar un atributo id a cada div generado en el punto 3, y hacer que al hacer click en cada div muestre en consola el nombre de la canción y el artista de la canción correspondiente.//------------------------------------------------------------------------------------------------------------------


const ListaCanciones= document.getElementById('ListaCanciones');  //Aquí es donde se van a agregar los divs

listaCanciones.forEach(   (nombre,i) =>{

    //crear un nuevo div
    const div= document.createElement("div");

    //agregar contenido al div
    div.textContent = `Nombre ${nombre}`;

    //asignamos id único al div, basado en su índice del array
    div.id = `div ${i}`;

    //agregamos clase para estilos en css
    div.classList.add("Lista-tracks");

    //Añadimos div al contenedor 
    ListaCanciones.appendChild(div);

});