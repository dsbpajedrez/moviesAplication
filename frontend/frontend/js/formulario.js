window.onload = () => {
    let crear = document.querySelector('.botonAgregar')
    let editar = document.querySelector('.botonEditar')
    let eliminar = document.querySelector('.botonBorrar')
    let id = document.querySelector('#id')
    console.log(id.value)


    crear.addEventListener('click',function(){    
        let data ={
            title: document.querySelector('#title').value,
            rating: document.querySelector('#rating').value,
            awards: document.querySelector('#awards').value,
            release_date: document.querySelector('#release_date').value,
            length: document.querySelector('#length').value
        }      

        fetch('http://localhost:3031/api/movies/create',{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(response => {
            return response.json()
        })
        .then(datos => console.log(datos))
    })
    editar.addEventListener('click',()=>{
        let data ={
            title: document.querySelector('#title').value,
            rating: document.querySelector('#rating').value,
            awards: document.querySelector('#awards').value,
            release_date: document.querySelector('#release_date').value,
            length: document.querySelector('#length').value
        }
        fetch('http://localhost:3031/api/movies/update/1',{
            method:'PUT' , 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
              },          
          
        }).then(respuesta => respuesta.json())
          .then(estado => console.log(estado))
    })
    eliminar.addEventListener('click',()=>{
        fetch('http://localhost:3031/api/movies/delete/38',
        {
            method:'DELETE',
     
        })
            .then(res => res.json())
            .then(estado = console.log(estado))
    })


}