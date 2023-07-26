let number = 0;
let data = []; // Añadir variable para almacenar los datos recuperados de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("description");
const videoArea = document.getElementById("video");

function getData() {
  // Describir el proceso de recuperación de datos de ajax.json
    $.ajax("ajax.json", {
        type: "GET",
        success: function(datos){
            data = datos;
        },
        error: function(){
            console.log("Ocurrió algo inesperado");
        }
        });
}

function changeVideo() {
  // Describe el proceso cuando se hace clic en el botón.
  // Sólo llamar al proceso getData si no se recuperan datos de ajax.json
    if(data.length == 0){
        console.log("Datos cargados");
        getData();
    }
    
    button.addEventListener("click", function(){
        console.log("Boton clickeado, video cambiado");
        titleArea.innerHTML = data[number].title;
        contentArea.innerHTML = data[number].content;
        videoArea.setAttribute("src", data[number].url);
        number == 2 ? number = 0 : number++;
    });
     
}

window.onload = changeVideo;