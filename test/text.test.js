/*var boton = document.getElementById("add-palyer");
var input = document.getElementById("new-player-name");
var listafunc = document.getElementById("current-players");

boton.addEventListener("click", function() {
    var nuevoli = document.createElement("li");
    var textoli = document.createTextNode(input.value);
    nuevoli.appendChild(textoli);
    listafunc.appendChild(nuevoli);
*/





//recibir los datos del input
// crear un nuevo elemento con los datos del input
// añadir un jugador a la lista

/*window.onload = init;
        function init(){
            botonEnvio = document.querySelector('[type="button"]');
            nuevoItem = document.querySelector('[type="text"]');
            listaCompra = document.getElementById("current-palyers");
            
            botonEnvio.addEventListener("click",anadir);
        }

        function anadir(e){
            evento = e || window.event;
            if (nuevoItem.value == ""){
                evento.preventDefault();
            }else{
            var lista = document.createElement("li");
            lista.innerHTML = nuevoItem.value;
            lista.addEventListener("dblclick",eliminarLi);
            listaCompra.appendChild(lista);
            nuevoItem.value = "";
        }       
*/
/*
const table = document.querySelector('table');

//console.log(table);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    
    table.innerHTML = 
    `<tr>
      <th>Name</th>
      <th>Id</th>
      <th>City</th>
      </tr> `

    data.forEach(function (element) {
      
      table.innerHTML +=
      
        `<tr>
      <td>${element.name}</td>
      <td>${element.id}</td>
      <td>${element.address.city}</td>
      </tr> `
    
    })
    
    console.log(data);
    
    
  } );


var boton = document.getElementById("add-palyer");
var input = document.getElementById("new-player-name");
var listafunc = document.querySelector("ol");

boton.addEventListener("click", function() {
    var nuevoli = document.createElement("li");
    var textoli = document.createTextNode(input.value);
    nuevoli.appendChild(textoli);
    listafunc.appendChild(nuevoli);
});*/

/*
function add_li()
{
    var nuevoLi=document.getElementById("new-player").value;
    if(nuevoLi.length>0)
    {
        if(find_li(nuevoLi))
        {
            var li=document.createElement('li');
            li.id=nuevoLi;
            li.innerHTML="<span onclick='eliminar(this)'>X</span>"+nuevoLi;
            document.getElementById("current-players").appendChild(li);
        }
    }
    return false;
}


//Funcion que busca si existe ya el <li> dentrol del <ul>
//Devuelve true si no existe.


function find_li(contenido)
{
    var el = document.getElementById("current-players").getElementsByTagName("li");
    for (var i=0; i<el.length; i++)
    {
        if(el[i].innerHTML==contenido)
            return false;
    }
    return true;
}


 //Funcion para eliminar los elementos
// Tiene que recibir el elemento pulsado

function eliminar(elemento)
{
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}
*/


/*
function add_li()
        {
            var nuevoLi=document.getElementById("nuevo_li").value;
            if(nuevoLi.length>0)
            {
                if(find_li(nuevoLi))
                {
                    var li=document.createElement('li');
                    li.id=nuevoLi;
                    document.getElementById("listaDesordenada").appendChild(li);
                }
            }
            return false;
        }
 
    
// Funcion que busca si existe ya el <li> dentrol del <ul>
// Devuelve true si no existe.

        function find_li(contenido)
        {
            var el = document.getElementById("listaDesordenada").getElementsByTagName("li");
            for (var i=0; i<el.length; i++)
            {
                if(el[i].innerHTML==contenido)
                    return false;
            }
            return true;
        }
//Funcion para eliminar los elemento
//Tiene que recibir el elemento pulsado
        function eliminar(elemento)
        {
            var id=elemento.parentNode.getAttribute("id");
            node=document.getElementById(id);
            node.parentNode.removeChild(node);
        }

   */








