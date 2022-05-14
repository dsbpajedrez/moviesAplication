window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
 fetch('http://localhost:3031/api/movies')
            .then(response => response.json())
            .then(peliculas => {
              
                 let data = peliculas.data;
             
                 data.forEach((movie,idx) => {
                   const card = document.createElement("div");
                   card.setAttribute("class", "card");
             
                   const h1 = document.createElement("h1");
                   h1.textContent = movie.title;
             
                   const p = document.createElement("p");
                   p.textContent = `Rating: ${movie.rating}`;
             
                   const duracion = document.createElement("p");
                   duracion.textContent = `Duración: ${movie.length}`;

                   const detalle = document.createElement("p");
                   detalle.setAttribute('class','detalle')
                   detalle.textContent=`ver detalle de ${movie.title}, id: ${movie.id}`
           
              
                     
             
                   container.appendChild(card);
                   card.appendChild(h1);
                   card.appendChild(p);
                   if (movie.genre !== null) {
                     const genero = document.createElement("p");
                     genero.textContent = `Genero: ${movie.genre.name}`;
                     card.appendChild(genero);
                   }
                   card.appendChild(duracion);
                   card.appendChild(detalle)
            
                   
                  });
                  
                  let botones=document.querySelectorAll(".detalle")
                  for (let i=0;i< botones.length;i++){
                    botones[i].addEventListener('click',e=>{                  
                   
                    
                     let id= e.target.innerText.slice(-2)
                   
                      fetch(`http://localhost:3031/api/movies/${id}`)
                        .then(respuesta=>respuesta.json())
                        .then(movie=> {
                          // window.location.href='formulario.html'  
                          window.location.replace(`formulario.html` )
                    
                          document.querySelector('#title').value=movie.title
                          document.querySelector('#rating').value=movie.rating
                          document.querySelector('#awards').value=movie.awards
                          document.querySelector('#release_date').value=movie.release_date
                          document.querySelector('#length').value=movie.length
                                    

                     
                        })
                    })
                  }
                })
     


};
