function obtenerColores(carpetaImagenes, coloresDisponibles) {
    const rutaBase = `img/premium/${carpetaImagenes}/`;
    let colores = {};

    coloresDisponibles.forEach(color => {
        colores[color] = `${rutaBase}${color.toUpperCase()}.webp`;
    });

    return colores;
}

let precioVar = "$65.000";

const productos = [
    {
        id: 1,
        nombre: "THAT'S IT",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/THAT/BLANCO.webp",
        imagenSecundaria: "img/premium/THAT/BLANCO.webp",
        colores: obtenerColores("THAT", ["Blanco"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 2,
        nombre: "UNITED",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/UNITED/NEGRO.webp",
        imagenSecundaria: "img/premium/UNITED/VERDE.webp",
        colores: obtenerColores("UNITED", ["Gris","Verde","Negro"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 3,
        nombre: "TUPAC",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/TUPAC/BLANCO.webp",
        imagenSecundaria: "img/premium/TUPAC/BEIGE.webp",
        colores: {
            Beige: "img/premium/TUPAC/BEIGE.webp",
            Blanco: "img/premium/TUPAC/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 4,
        nombre: "INFINITE UNIVERSE",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/INFINITE_UNIVERSE/BLANCO.webp",
        imagenSecundaria: "img/premium/INFINITE_UNIVERSE/VAINILLA.webp",
        colores: {
            Vainilla: "img/premium/INFINITE_UNIVERSE/VAINILLA.webp",
            Blanco: "img/premium/INFINITE_UNIVERSE/BLANCO.webp",
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 5,
        nombre: "FUTURE",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/FUTURE/BEIGE.webp",
        imagenSecundaria: "img/premium/FUTURE/BLANCO.webp",
        colores: obtenerColores("FUTURE", ["BEIGE","VAINILLA","BLANCO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 6,
        nombre: "FREEDOM",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/FREEDOM/BLANCO.webp",
        imagenSecundaria: "img/premium/FREEDOM/BEIGE.webp",
        colores: {
            Beige: "img/premium/FREEDOM/BEIGE.webp",
            Vainilla: "img/premium/FREEDOM/VAINILLA.webp",
            Blanco: "img/premium/FREEDOM/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 7,
        nombre: "DONT TOUCH ME",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/DONT_TOUCH_ME/MARRON.webp",
        imagenSecundaria: "img/premium/DONT_TOUCH_ME/BEIGE.webp",
        colores: {
            Beige: "img/premium/DONT_TOUCH_ME/BEIGE.webp",
            Marron: "img/premium/DONT_TOUCH_ME/MARRON.webp",
            Verde: "img/premium/DONT_TOUCH_ME/VERDE.webp",
            Gris: "img/premium/DONT_TOUCH_ME/GRIS.webp",
            Negro: "img/premium/DONT_TOUCH_ME/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 8,
        nombre: "CENSORED",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/CENSORED/NEGRO.webp",
        imagenSecundaria: "img/premium/CENSORED/VERDE.webp",
        colores: {
            Beige: "img/premium/CENSORED/BEIGE.webp",
            Marron: "img/premium/CENSORED/MARRON.webp",
            Vainilla: "img/premium/CENSORED/VAINILLA.webp",
            Verde: "img/premium/CENSORED/VERDE.webp",
            Gris: "img/premium/CENSORED/GRIS.webp",
            Negro: "img/premium/CENSORED/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 9,
        nombre: "BIG DREAM BIG ACT",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BIG_DREAM_BIG_ACT/BEIGE.webp",
        imagenSecundaria: "img/premium/BIG_DREAM_BIG_ACT/VAINILLA.webp",
        colores: {
            
            Beige: "img/premium/BIG_DREAM_BIG_ACT/BEIGE.webp",
            Marron: "img/premium/BIG_DREAM_BIG_ACT/MARRON.webp",
            Vainilla: "img/premium/BIG_DREAM_BIG_ACT/VAINILLA.webp",
            Verde: "img/premium/BIG_DREAM_BIG_ACT/VERDE.webp",
            Gris: "img/premium/BIG_DREAM_BIG_ACT/GRIS.webp",
            Negro: "img/premium/BIG_DREAM_BIG_ACT/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },{
        id: 10,
        nombre: "BAD THINGS",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BAD_THINGS/MARRON.webp",
        imagenSecundaria: "img/premium/BAD_THINGS/VERDE.webp",
        colores: {
            Marron: "img/premium/BAD_THINGS/MARRON.webp",
            Verde: "img/premium/BAD_THINGS/VERDE.webp",
            Gris: "img/premium/BAD_THINGS/GRIS.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 11,
        nombre: "BAB HABIT",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BAB_HABIT/NEGRO.webp",
        imagenSecundaria: "img/premium/BAB_HABIT/BEIGE.webp",
        colores: {
            Beige: "img/premium/BAB_HABIT/BEIGE.webp",
            Marron: "img/premium/BAB_HABIT/MARRON.webp",
            Vainilla: "img/premium/BAB_HABIT/VAINILLA.webp",
            Verde: "img/premium/BAB_HABIT/VERDE.webp",
            Gris: "img/premium/BAB_HABIT/GRIS.webp",
            Negro: "img/premium/BAB_HABIT/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 12,
        nombre: "ATTRACTED",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/ATTRACTED/BLANCO.webp",
        imagenSecundaria: "img/premium/ATTRACTED/VERDE.webp",
        colores: {
            Marron: "img/premium/ATTRACTED/MARRON.webp",
            Verde: "img/premium/ATTRACTED/VERDE.webp",
            Blanco: "img/premium/ATTRACTED/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 13,
        nombre: "AUTHENTIC",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/AUTHENTIC/VERDE.webp",
        imagenSecundaria: "img/premium/AUTHENTIC/NEGRO.webp",
        colores: {
            Beige: "img/premium/AUTHENTIC/BEIGE.webp",
            Marron: "img/premium/AUTHENTIC/MARRON.webp",
            Verde: "img/premium/AUTHENTIC/VERDE.webp",
            Gris: "img/premium/AUTHENTIC/GRIS.webp",
            Negro: "img/premium/AUTHENTIC/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 14,
        nombre: "ANGEL NUMBER",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/ANGEL_NUMBER/NEGRO.webp",
        imagenSecundaria: "img/premium/ANGEL_NUMBER/VAINILLA.webp",
        colores: {
            Beige: "img/premium/ANGEL_NUMBER/BEIGE.webp",
            Marron: "img/premium/ANGEL_NUMBER/MARRON.webp",
            Vainilla: "img/premium/ANGEL_NUMBER/VAINILLA.webp",
            Verde: "img/premium/ANGEL_NUMBER/VERDE.webp",
            Gris: "img/premium/ANGEL_NUMBER/GRIS.webp",
            Negro: "img/premium/ANGEL_NUMBER/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 15,
        nombre: "BAD BUNNY",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BAD_BUNNY/GRIS.webp",
        imagenSecundaria: "img/premium/BAD_BUNNY/BLANCO.webp",
        colores: obtenerColores("BAD_BUNNY", ["Blanco","Gris","Negro"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 16,
        nombre: "BAZAAR FASHION",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BAZAR_FASHION/MARRON.webp",
        imagenSecundaria: "img/premium/BAZAR_FASHION/NEGRO.webp",
        colores: obtenerColores("BAZAR_FASHION", ["MARRON","NEGRO","BEIGE"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 17,
        nombre: "DRAGON ROJO",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/DRAGON/NEGRO.webp",
        imagenSecundaria: "img/premium/DRAGON/BLANCO.webp",
        colores: obtenerColores("DRAGON", ["Blanco","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 18,
        nombre: "OFFICIAL COOL",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/OFFICIAL_COOL/BLANCO.webp",
        imagenSecundaria: "img/premium/OFFICIAL_COOL/BLANCO.webp",
        colores: obtenerColores("OFFICIAL_COOL", ["Blanco"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    }, {
        id: 19,
        nombre: "NO LIMITS",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/NO_LIMITS/BEIGE.webp",
        imagenSecundaria: "img/premium/NO_LIMITS/VAINILLA.webp",
        colores: obtenerColores("NO_LIMITS", ["BEIGE","NEGRO","VAINILLA"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    
    {
        id: 20,
        nombre: "SCARY",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/SCARY/BLANCO.webp",
        imagenSecundaria: "img/premium/SCARY/BLANCO.webp",
        colores: obtenerColores("SCARY", ["Blanco"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
   {
        id: 21,
        nombre: "SUPER STAR",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/SUPER_STAR/MARRON.webp",
        imagenSecundaria: "img/premium/SUPER_STAR/GRIS.webp",
        colores: obtenerColores("SUPER_STAR", ["MARRON","GRIS","BEIGE","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 22,
        nombre: "2025 FUTURE",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/2025_FUTURE/BLANCO.webp",
        imagenSecundaria: "img/premium/2025_FUTURE/BLANCO.webp",
        colores: obtenerColores("2025_FUTURE", ["Blanco"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 23,
        nombre: "AKA BOY",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/AKA_BOY/NEGRO.webp",
        imagenSecundaria: "img/premium/AKA_BOY/BEIGE.webp",
        colores: obtenerColores("AKA_BOY", ["NEGRO","BEIGE"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 24,
        nombre: "BEAR",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BEAR/GRIS.webp",
        imagenSecundaria: "img/premium/BEAR/BLANCO.webp",
        colores: obtenerColores("BEAR", ["Blanco","NEGRO","GRIS"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 25,
        nombre: "MONEY MAKER",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/MONEY_MAKER/BLANCO.webp",
        imagenSecundaria: "img/premium/MONEY_MAKER/BLANCO.webp",
        colores: obtenerColores("MONEY_MAKER", ["Blanco"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 26,
        nombre: "PECES KOI",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/KOI/NEGRO.webp",
        imagenSecundaria: "img/premium/KOI/MARRON.webp",
        colores: obtenerColores("KOI", ["MARRON","NEGRO","GRIS"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 27,
        nombre: "SAN ANDREAS",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/SAN_ANDREAS/BLANCO.webp",
        imagenSecundaria: "img/premium/SAN_ANDREAS/BEIGE.webp",
        colores: obtenerColores("SAN_ANDREAS", ["Blanco","BEIGE","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 28,
        nombre: "ANGEL GUARDIAN",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/ANGEL_GUARDIAN/NEGRO.webp",
        imagenSecundaria: "img/premium/ANGEL_GUARDIAN/BLANCO.webp",
        colores: obtenerColores("ANGEL_GUARDIAN", ["Blanco","VAINILLA","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 29,
        nombre: "WANTED",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/ARTHUR_MORGAN/BLANCO.webp",
        imagenSecundaria: "img/premium/ARTHUR_MORGAN/BEIGE.webp",
        colores: obtenerColores("ARTHUR_MORGAN", ["Blanco","BEIGE","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 30,
        nombre: "SUPRA",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/SUPRA/NEGRO.webp",
        imagenSecundaria: "img/premium/SUPRA/BLANCO.webp",
        colores: obtenerColores("SUPRA", ["Blanco","GRIS","NEGRO","VAINILLA"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 31,
        nombre: "BLESSED",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/BLESSED/BLANCO.webp",
        imagenSecundaria: "img/premium/BLESSED/NEGRO.webp",
        colores: obtenerColores("BLESSED", ["Blanco","MARRON","NEGRO","VAINILLA"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 32,
        nombre: "WOLF",
        tipo: "T-Shirt",
        precio: precioVar,
        imagenPrincipal: "img/premium/WOLF/NEGRO.webp",
        imagenSecundaria: "img/premium/WOLF/BLANCO.webp",
        colores: obtenerColores("WOLF", ["Blanco","NEGRO"]),
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
   
    // Agrega más productos según sea necesario
];

// Función para mostrar los productos en el portafolio
function mostrarProductos(productosFiltrados) {
    const portfolioContainer = document.getElementById("portfolio-container");
    portfolioContainer.innerHTML = ""; // Limpiar contenido anterior

    const ultimosTres = productosFiltrados.slice(-18); // Últimos 18 productos

    productosFiltrados.forEach(producto => {
        let nombreModificado = producto.nombre;

        // Si el producto está en los últimos tres, añadimos "- NEW" en rojo al lado
        if (ultimosTres.includes(producto)) {
            nombreModificado += '  <span style="color: red;"> - NUEVO</span>';
        }

        const productHTML = `
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${producto.id}">
                <div class="member">
                    <div class="pic"><img src="${producto.imagenPrincipal}" class="img-fluid mx-auto d-block" alt="WOLF T-SHIRT" 
                                            onmouseover="this.src='${producto.imagenSecundaria}'"
                                            onmouseout="this.src='${producto.imagenPrincipal}'">    </div>
                    <div class="member-info">
                        <h4>${nombreModificado}</h4>
                        <span>${producto.tipo}<br>${producto.precio.toLocaleString()}</span>
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
                                                <img src="${producto.imagenPrincipal}" class="d-block w-100" alt="WOLF T-SHIRTS">
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
