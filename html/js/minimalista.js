const productos = [
    {
        id: 1,
        nombre: "DARK FUTURE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/DARK_FUTURE/VERDE.webp",
        imagenSecundaria: "img/DARK_FUTURE/BEIGE.webp",
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
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 2,
        nombre: "NEUTRALS",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/NEUTRALS/BLANCO.webp",
        imagenSecundaria: "img/NEUTRALS/BEIGE.webp",
        colores: {
            Beige: "img/NEUTRALS/BEIGE.webp",
            Vainilla: "img/NEUTRALS/VAINILLA.webp",
            Blanco: "img/NEUTRALS/BLANCO.webp",
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 3,
        nombre: "KEEP ON GOING",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/KEEP_ON_GOING/NEGRO.webp",
        imagenSecundaria: "img/KEEP_ON_GOING/BEIGE.webp",
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
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 4,
        nombre: "BURBERRY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/BURBERRY/BEIGE.webp",
        imagenSecundaria: "img/BURBERRY/BLANCO.webp",
        colores: {
            Beige: "img/BURBERRY/BEIGE.webp",
            Marron: "img/BURBERRY/MARRON.webp",
            Vainilla: "img/BURBERRY/VAINILLA.webp",
            Verde: "img/BURBERRY/VERDE.webp",
            Blanco: "img/BURBERRY/BLANCO.webp",
            Gris: "img/BURBERRY/GRIS.webp",
            Negro: "img/BURBERRY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 5,
        nombre: "BEAUTIFUL",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/BEAUTIFUL/NEGRO.webp",
        imagenSecundaria: "img/BEAUTIFUL/GRIS.webp",
        colores: {
            Beige: "img/BEAUTIFUL/BEIGE.webp",
            Marron: "img/BEAUTIFUL/MARRON.webp",
            Vainilla: "img/BEAUTIFUL/VAINILLA.webp",
            Verde: "img/BEAUTIFUL/VERDE.webp",
            Blanco: "img/BEAUTIFUL/BLANCO.webp",
            Gris: "img/BEAUTIFUL/GRIS.webp",
            Negro: "img/BEAUTIFUL/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 6,
        nombre: "RESISTANCE THAT INSPIRES",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/RESISTANCE_THAT_INSPIRES/MARRON1.webp",
        imagenSecundaria: "img/RESISTANCE_THAT_INSPIRES/BEIGE.webp",
        colores: {
            Beige: "img/RESISTANCE_THAT_INSPIRES/BEIGE.webp",
            Marron: "img/RESISTANCE_THAT_INSPIRES/MARRON.webp",
            Vainilla: "img/RESISTANCE_THAT_INSPIRES/VAINILLA.webp",
            Verde: "img/RESISTANCE_THAT_INSPIRES/VERDE.webp",
            Blanco: "img/RESISTANCE_THAT_INSPIRES/BLANCO.webp",
            Gris: "img/RESISTANCE_THAT_INSPIRES/GRIS.webp",
            Negro: "img/RESISTANCE_THAT_INSPIRES/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 7,
        nombre: "RANDOM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/RANDOM/VERDE.webp",
        imagenSecundaria: "img/RANDOM/BEIGE.webp",
        colores: {
            Beige: "img/RANDOM/BEIGE.webp",
            Marron: "img/RANDOM/MARRON.webp",
            Vainilla: "img/RANDOM/VAINILLA.webp",
            Verde: "img/RANDOM/VERDE.webp",
            Blanco: "img/RANDOM/BLANCO.webp",
            Gris: "img/RANDOM/GRIS.webp",
            Negro: "img/RANDOM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 8,
        nombre: "MADE IN THE IMAGE OF GOD",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/MADE_IN_THE_IMAGE_OF_GOD/VAINILLA.webp",
        imagenSecundaria: "img/MADE_IN_THE_IMAGE_OF_GOD/VERDE.webp",
        colores: {
            Beige: "img/MADE_IN_THE_IMAGE_OF_GOD/BEIGE.webp",
            Marron: "img/MADE_IN_THE_IMAGE_OF_GOD/MARRON.webp",
            Vainilla: "img/MADE_IN_THE_IMAGE_OF_GOD/VAINILLA.webp",
            Verde: "img/MADE_IN_THE_IMAGE_OF_GOD/VERDE.webp",
            Blanco: "img/MADE_IN_THE_IMAGE_OF_GOD/BLANCO.webp",
            Gris: "img/MADE_IN_THE_IMAGE_OF_GOD/GRIS.webp",
            Negro: "img/MADE_IN_THE_IMAGE_OF_GOD/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 9,
        nombre: "LUXURY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/LUXURY/GRIS.webp",
        imagenSecundaria: "img/LUXURY/VAINILLA.webp",
        colores: {
            Beige: "img/LUXURY/BEIGE.webp",
            Marron: "img/LUXURY/MARRON.webp",
            Vainilla: "img/LUXURY/VAINILLA.webp",
            Verde: "img/LUXURY/VERDE.webp",
            Gris: "img/LUXURY/GRIS.webp",
            Negro: "img/LUXURY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },{
        id: 10,
        nombre: "CREATIVE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/CREATIVE/NEGRO.webp",
        imagenSecundaria: "img/CREATIVE/BEIGE.webp",
        colores: {
            Beige: "img/CREATIVE/BEIGE.webp",
            Marron: "img/CREATIVE/MARRON.webp",
            Vainilla: "img/CREATIVE/VAINILLA.webp",
            Verde: "img/CREATIVE/VERDE.webp",
            Blanco: "img/CREATIVE/BLANCO.webp",
            Gris: "img/CREATIVE/GRIS.webp",
            Negro: "img/CREATIVE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 11,
        nombre: "PERSONALITY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/PERSONALITY/BEIGE.webp",
        imagenSecundaria: "img/PERSONALITY/MARRON.webp",
        colores: {
            Beige: "img/PERSONALITY/BEIGE.webp",
            Marron: "img/PERSONALITY/MARRON.webp",
            Vainilla: "img/PERSONALITY/VAINILLA.webp",
            Verde: "img/PERSONALITY/VERDE.webp",
            Gris: "img/PERSONALITY/GRIS.webp",
            Negro: "img/PERSONALITY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 12,
        nombre: "FREESTYLE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/FREESTYLE/NEGRO.webp",
        imagenSecundaria: "img/FREESTYLE/BLANCO.webp",
        colores: {
            Beige: "img/FREESTYLE/BEIGE.webp",
            Marron: "img/FREESTYLE/MARRON.webp",
            Vainilla: "img/FREESTYLE/VAINILLA.webp",
            Verde: "img/FREESTYLE/VERDE.webp",
            Blanco: "img/FREESTYLE/BLANCO.webp",
            Gris: "img/FREESTYLE/GRIS.webp",
            Negro: "img/FREESTYLE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 13,
        nombre: "DREAM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/DREAM/VERDE.webp",
        imagenSecundaria: "img/DREAM/BEIGE.webp",
        colores: {
            Beige: "img/DREAM/BEIGE.webp",
            Marron: "img/DREAM/MARRON.webp",
            Vainilla: "img/DREAM/VAINILLA.webp",
            Verde: "img/DREAM/VERDE.webp",
            Blanco: "img/DREAM/BLANCO.webp",
            Gris: "img/DREAM/GRIS.webp",
            Negro: "img/DREAM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 14,
        nombre: "W",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/W/BEIGE.webp",
        imagenSecundaria: "img/W/MARRON.webp",
        colores: {
            Beige: "img/W/BEIGE.webp",
            Marron: "img/W/MARRON.webp",
            Vainilla: "img/W/VAINILLA.webp",
            Verde: "img/W/VERDE.webp",
            Blanco: "img/W/BLANCO.webp",
            Gris: "img/W/GRIS.webp",
            Negro: "img/W/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 15,
        nombre: "TO BELIEVE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/TO_BELIEVE/VERDE.webp",
        imagenSecundaria: "img/TO_BELIEVE/VAINILLA.webp",
        colores: {
            Beige: "img/TO_BELIEVE/BEIGE.webp",
            Marron: "img/TO_BELIEVE/MARRON.webp",
            Vainilla: "img/TO_BELIEVE/VAINILLA.webp",
            Verde: "img/TO_BELIEVE/VERDE.webp",
            Blanco: "img/TO_BELIEVE/BLANCO.webp",
            Gris: "img/TO_BELIEVE/GRIS.webp",
            Negro: "img/TO_BELIEVE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 16,
        nombre: "DEMON",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/DEMON/BLANCO1.webp",
        imagenSecundaria: "img/DEMON/BLANCO.webp",
        colores: {
            Blanco: "img/DEMON/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 17,
        nombre: "DANGER",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/DANGER/GRIS.webp",
        imagenSecundaria: "img/DANGER/BEIGE.webp",
        colores: {
            Beige: "img/DANGER/BEIGE.webp",
            Marron: "img/DANGER/MARRON.webp",
            Vainilla: "img/DANGER/VAINILLA.webp",
            Verde: "img/DANGER/VERDE.webp",
            Blanco: "img/DANGER/BLANCO.webp",
            Gris: "img/DANGER/GRIS.webp",
            Negro: "img/DANGER/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 18,
        nombre: "CHILL",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/CHILL/BLANCO.webp",
        imagenSecundaria: "img/CHILL/VERDE.webp",
        colores: {
            Beige: "img/CHILL/BEIGE.webp",
            Vainilla: "img/CHILL/VAINILLA.webp",
            Verde: "img/CHILL/VERDE.webp",
            Blanco: "img/CHILL/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 19,
        nombre: "LOGO FREEDOM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/LOGO_FREEDOM/NEGRO1.webp",
        imagenSecundaria: "img/LOGO_FREEDOM/MARRON.webp",
        colores: {
            Marron: "img/LOGO_FREEDOM/MARRON.webp",
            Verde: "img/LOGO_FREEDOM/VERDE.webp",
            Gris: "img/LOGO_FREEDOM/GRIS.webp",
            Negro: "img/LOGO_FREEDOM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 20,
        nombre: "GOOD VIBES",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/GOOD_VIBES/MARRON1.webp",
        imagenSecundaria: "img/GOOD_VIBES/NEGRO.webp",
        colores: {
            Beige: "img/GOOD_VIBES/BEIGE.webp",
            Marron: "img/GOOD_VIBES/MARRON.webp",
            Vainilla: "img/GOOD_VIBES/VAINILLA.webp",
            Verde: "img/GOOD_VIBES/VERDE.webp",
            Blanco: "img/GOOD_VIBES/BLANCO.webp",
            Gris: "img/GOOD_VIBES/GRIS.webp",
            Negro: "img/GOOD_VIBES/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 21,
        nombre: "CENSORED",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/CENSORED/BLANCO.webp",
        imagenSecundaria: "img/CENSORED/VERDE.webp",
        colores: {
            Beige: "img/CENSORED/BEIGE.webp",
            Marron: "img/CENSORED/MARRON.webp",
            Vainilla: "img/CENSORED/VAINILLA.webp",
            Verde: "img/CENSORED/VERDE.webp",
            Blanco: "img/CENSORED/BLANCO.webp",
            Gris: "img/CENSORED/GRIS.webp",
            Negro: "img/CENSORED/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 22,
        nombre: "STREET CULTURE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/STREET_CULTURE/BLANCO1.webp",
        imagenSecundaria: "img/STREET_CULTURE/BEIGE.webp",
        colores: {
            Beige: "img/STREET_CULTURE/BEIGE.webp",
            Vainilla: "img/STREET_CULTURE/VAINILLA.webp",
            Verde: "img/STREET_CULTURE/VERDE.webp",
            Blanco: "img/STREET_CULTURE/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 23,
        nombre: "INFINITE UNIVERSE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/INFINITE_UNIVERSE/BEIGE.webp",
        imagenSecundaria: "img/INFINITE_UNIVERSE/MARRON.webp",
        colores: {
            Beige: "img/INFINITE_UNIVERSE/BEIGE.webp",
            Marron: "img/INFINITE_UNIVERSE/MARRON.webp",
            Vainilla: "img/INFINITE_UNIVERSE/VAINILLA.webp",
            Blanco: "img/INFINITE_UNIVERSE/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 24,
        nombre: "BIG DREAM BIG ACT",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/BIG_DREAM_BIG_ACT/GRIS.webp",
        imagenSecundaria: "img/BIG_DREAM_BIG_ACT/VERDE.webp",
        colores: {
            Beige: "img/BIG_DREAM_BIG_ACT/BEIGE.webp",
            Marron: "img/BIG_DREAM_BIG_ACT/MARRON.webp",
            Verde: "img/BIG_DREAM_BIG_ACT/VERDE.webp",
            Gris: "img/BIG_DREAM_BIG_ACT/GRIS.webp",
            Negro: "img/BIG_DREAM_BIG_ACT/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 25,
        nombre: "AUTHENTIC",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/AUTHENTIC/MARRON.webp",
        imagenSecundaria: "img/AUTHENTIC/NEGRO.webp",
        colores: {
            Marron: "img/AUTHENTIC/MARRON.webp",
            Verde: "img/AUTHENTIC/VERDE.webp",
            Gris: "img/AUTHENTIC/GRIS.webp",
            Negro: "img/AUTHENTIC/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 26,
        nombre: "RESISTENCIA QUE INSPIRA",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/RESISTENCIA_QUE_INSPIRA/NEGRO.webp",
        imagenSecundaria: "img/RESISTENCIA_QUE_INSPIRA/GRIS.webp",
        colores: {
            Beige: "img/RESISTENCIA_QUE_INSPIRA/BEIGE.webp",
            Marron: "img/RESISTENCIA_QUE_INSPIRA/MARRON.webp",
            Vainilla: "img/RESISTENCIA_QUE_INSPIRA/VAINILLA.webp",
            Verde: "img/RESISTENCIA_QUE_INSPIRA/VERDE.webp",
            Blanco: "img/RESISTENCIA_QUE_INSPIRA/BLANCO.webp",
            Gris: "img/RESISTENCIA_QUE_INSPIRA/GRIS.webp",
            Negro: "img/RESISTENCIA_QUE_INSPIRA/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 27,
        nombre: "PATHETIC",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/PATHETIC/VERDE.webp",
        imagenSecundaria: "img/PATHETIC/BEIGE.webp",
        colores: {
            Beige: "img/PATHETIC/BEIGE.webp",
            Marron: "img/PATHETIC/MARRON.webp",
            Verde: "img/PATHETIC/VERDE.webp",
            Gris: "img/PATHETIC/GRIS.webp",
            Negro: "img/PATHETIC/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 28,
        nombre: "MAKE YOUR MAKE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/MAKE_YOUR_MAKE/BEIGE.webp",
        imagenSecundaria: "img/MAKE_YOUR_MAKE/MARRON.webp",
        colores: {
            Beige: "img/MAKE_YOUR_MAKE/BEIGE.webp",
            Marron: "img/MAKE_YOUR_MAKE/MARRON.webp",
            Vainilla: "img/MAKE_YOUR_MAKE/VAINILLA.webp",
            Verde: "img/MAKE_YOUR_MAKE/VERDE.webp",
            Blanco: "img/MAKE_YOUR_MAKE/BLANCO.webp",
            Gris: "img/MAKE_YOUR_MAKE/GRIS.webp",
            Negro: "img/MAKE_YOUR_MAKE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 29,
        nombre: "LIBERTAD EN CADA PASO",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/LIBERTAD_EN_CADA_PASO/BLANCO.webp",
        imagenSecundaria: "img/LIBERTAD_EN_CADA_PASO/VAINILLA.webp",
        colores: {
            Beige: "img/LIBERTAD_EN_CADA_PASO/BEIGE.webp",
            Marron: "img/LIBERTAD_EN_CADA_PASO/MARRON.webp",
            Vainilla: "img/LIBERTAD_EN_CADA_PASO/VAINILLA.webp",
            Verde: "img/LIBERTAD_EN_CADA_PASO/VERDE.webp",
            Blanco: "img/LIBERTAD_EN_CADA_PASO/BLANCO.webp",
            Gris: "img/LIBERTAD_EN_CADA_PASO/GRIS.webp",
            Negro: "img/LIBERTAD_EN_CADA_PASO/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
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
                    <div class="pic"><img src="${producto.imagenPrincipal}" class="img-fluid mx-auto d-block" alt="" 
                                            onmouseover="this.src='${producto.imagenSecundaria}'"
                                            onmouseout="this.src='${producto.imagenPrincipal}'">    </div>
                    <div class="member-info">
                        <h4>${producto.nombre}</h4>
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
