// Código JS para añadir productos al carrito

let carrito = [];

function agregarProductoAlCarrito(nombre, precio) {
    let producto = {
        nombre,
        precio
    };
    carrito.push(producto);
    console.log(`Se ha añadido ${nombre} al carrito. Precio: ${precio}.`);
}

// Ejemplo de uso:

agregarProductoAlCarrito("Café Negro", $400);

// scroll top

function scrollToTop() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  }
  
  window.addEventListener('scroll', function () {
    const btnScrollTop = document.getElementById('btn-scroll-top');
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 10) {
      btnScrollTop.classList.add('active');
    } else {
      btnScrollTop.classList.remove('active');
    }
  });

  // Obtén la lista de elementos <a> dentro del nav
const links = document.querySelectorAll("nav ul li a");

// Itera sobre cada enlace y agrega el evento de click correspondiente
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita la recarga de la página

    // Obtiene el texto del enlace seleccionado
    const selectedOption = event.target.textContent;

    // Imprime en la consola el texto del enlace seleccionado
    document.write(selectedOption);
  });
});
