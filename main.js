let contenedor= document.getElementById("contenedor")
let siguiente= document.getElementById("siguiente")
let anterior=document.getElementById("anterior")
let personajes=document.getElementById("personajes")
 
let pagina=1


async function conseguirDatos() {
    let url=`https://rickandmortyapi.com/api/character?page=${pagina}`
    return fetch(`${url}`)
    
}

async function conseguirPersonajes(){
     let datos= await conseguirDatos()
     let datosProcesados= await datos.json()
     let personajes= await datosProcesados.results
      return personajes
    
}

async function insertarPersonajes(){
    let paraInsertar= await conseguirPersonajes()
    
    
    
    paraInsertar.forEach(personaje => {
        let tpl=`
        <div id="personajes">
    <img src="${personaje.image}" alt="">
    <p>${personaje.name}</p>
    <p>${personaje.gender}</p>
    <p>${personaje.location.name}</p>
    <p>${personaje.origin.name}</p>
    <p>${personaje.species}</p>
    <p>${personaje.status}</p>
    </div>
    `
    contenedor.innerHTML+=tpl
    });
    
}
insertarPersonajes()

function eliminar() {
    contenedor.innerHTML=""  
         
}




siguiente.addEventListener("click",()=>{
    eliminar()
    pagina++
    insertarPersonajes()
})

anterior.addEventListener("click",()=>{
    if (pagina<=1) {
        
    }else{
        eliminar()
        pagina--
        insertarPersonajes()
    }
    
})
