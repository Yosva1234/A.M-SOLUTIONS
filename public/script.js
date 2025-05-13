document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // Mostrar/ocultar menú al hacer clic
    menuBtn.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Ocultar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== menuBtn) {
            menu.style.display = 'none';
        }
    });
});

function mostrar(productos) {

    document.getElementById("productocelulares").innerHTML="";
    document.getElementById("productolaptops").innerHTML="";
    document.getElementById("productorelojes").innerHTML="";
    document.getElementById("productopc").innerHTML="";
    document.getElementById("productotv").innerHTML="";
    document.getElementById("productoelectrodomesticos").innerHTML="";
    document.getElementById("productoluminarias").innerHTML="";
    document.getElementById("productoSeguridad").innerHTML="";
    document.getElementById("productocuidado").innerHTML="";
    document.getElementById("productoutiles").innerHTML="";


    productos.forEach((element) => {
        
      const scrooll = document.createElement("div");

      scrooll.classList.add("producto");
  
      scrooll.innerHTML = `
        <img src="${element.imagen}" alt="${element.nombre}" ">
        <h3>${element.nombre}</h3>
        <p class="precio"> ${element.precio}-CUP</p>
        <p class="descripcion">${element.info}</p>
      `;
  
      document.getElementById(`${element.categoria}`).appendChild(scroll);
    });
  }


function obtener() {
    fetch('/productos') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then(data => {
        mostrar(data);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al cargar los datos de las bebidas');
      });
  }

  window.onload = obtener;
  



