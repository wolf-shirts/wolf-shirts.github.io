const productos = [
    {
        id: 1,
        nombre: "DARK FUTURE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/DARK_FUTURE/VERDE.webp",
        colores: {
            Beige: "img/DARK_FUTURE/BEIGE.webp",
            Marron: "img/DARK_FUTURE/MARRON.webp",
            Vainilla: "img/DARK_FUTURE/VAINILLA.webp",
            Verde: "img/DARK_FUTURE/VERDE.webp",
            Blanco: "img/DARK_FUTURE/BLANCO.webp",
            Gris: "img/DARK_FUTURE/GRIS.webp",
            Negro: "img/DARK_FUTURE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=57300000000&text=Hola......"
    },
    {
        id: 2,
        nombre: "NEUTRALS",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/NEUTRALS/BLANCO.webp",
        colores: {
            Beige: "img/NEUTRALS/BEIGE.webp",
            Vainilla: "img/NEUTRALS/VAINILLA.webp",
            Verde: "img/NEUTRALS/VERDE.webp",
            Blanco: "img/NEUTRALS/BLANCO.webp",
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=57300000000&text=Hola......"
    },
    {
        id: 3,
        nombre: "KEEP ON GOING",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/KEEP_ON_GOING/NEGRO.webp",
        colores: {
            Beige: "img/KEEP_ON_GOING/BEIGE.webp",
            Marron: "img/KEEP_ON_GOING/MARRON.webp",
            Vainilla: "img/KEEP_ON_GOING/VAINILLA.webp",
            Verde: "img/KEEP_ON_GOING/VERDE.webp",
            Blanco: "img/KEEP_ON_GOING/BLANCO.webp",
            Gris: "img/KEEP_ON_GOING/GRIS.webp",
            Negro: "img/KEEP_ON_GOING/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=57300000000&text=Hola......"
    },
    // Agrega más productos según sea necesario
];

// Función para mostrar los productos en el portafolio
function mostrarProductos(productosFiltrados) {
    const portfolioContainer = document.getElementById("portfolio-container");
    portfolioContainer.innerHTML = ""; // Limpiar contenido anterior

    productosFiltrados.forEach(producto => {
        const productHTML = `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${producto.id}">
                <div class="member">
                    <div class="pic"><img src="${producto.imagenPrincipal}" class="img-fluid mx-auto d-block" alt=""></div>
                    <div class="member-info">
                        <h4>${producto.nombre}</h4>
                        <span>${producto.tipo}<br>$${producto.precio.toLocaleString()}</span>
                    </div>
                </div>
            </a>
        </div>
        `;
        portfolioContainer.insertAdjacentHTML("beforeend", productHTML);

        // Generar modal para cada producto
        generarModal(producto);
    });
}

// Función para generar el modal de un producto
function generarModal(producto) {
    const colorButtons = Object.keys(producto.colores).map(color =>
        `<button class="btn btn-color color-${color.toLowerCase()}" data-color="${color}" data-producto-id="${producto.id}">&nbsp;</button>`
    ).join("");

    const modalHTML = `
        <div class="portfolio-modal modal fade" id="portfolioModal${producto.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="modal-body">
                                    <h4 class="text-uppercase">${producto.nombre}</h4>
                                    <div class="container-fluid p-0">
                                        <div class="row g-0">
                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6" id="contenedor-imagen-${producto.id}">
                                                <img src="${producto.imagenPrincipal}" class="d-block w-100" alt="Imagen 1">
                                            </div>
                                            <div class="text-center my-3 col-12 col-sm-6 col-md-6 col-lg-6">
                                                <h3 class="text-dark">Colores Disponibles</h3>
                                                <div class="color-buttons">${colorButtons}</div>
                                                <h3 class="text-dark">Tallas</h3>
                                                <p>${producto.tallas.join(", ")}</p>
                                                <a class="btn btn-success btn-xl text-uppercase" target="_blank" href="${producto.enlaceCompra}">
                                                    <i class="fa-brands fa-whatsapp me-1"></i>
                                                    COMPRAR
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("modals-container").insertAdjacentHTML("beforeend", modalHTML);

    // Añadir eventos de cambio de imagen en los botones de color
    Object.keys(producto.colores).forEach(color => {
        document.querySelector(`#portfolioModal${producto.id} .color-${color.toLowerCase()}`).addEventListener('click', () => {
            document.querySelector(`#contenedor-imagen-${producto.id} img`).src = producto.colores[color];
        });
    });
}

// Mostrar todos los productos al cargar la página
mostrarProductos(productos);

// Función de filtrado
document.getElementById("filter-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const colorSeleccionado = document.getElementById("color-filter").value;
   //const precioMaximo = parseInt(document.getElementById("price-filter").value);

    const productosFiltrados = productos.filter(producto => {
        const cumpleColor = !colorSeleccionado || producto.colores.hasOwnProperty(colorSeleccionado);
        //const cumplePrecio = !precioMaximo || producto.precio <= precioMaximo;

        return cumpleColor;
    });

    // Mostrar los productos filtrados
    mostrarProductos(productosFiltrados);
});
