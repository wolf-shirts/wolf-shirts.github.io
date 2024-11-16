const productos = [
    {
        id: 1,
        nombre: "DARK FUTURE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/DARK_FUTURE/VERDE.webp",
        imagenSecundaria: "img/minimalista/DARK_FUTURE/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/DARK_FUTURE/BEIGE.webp",
            Marron: "img/minimalista/DARK_FUTURE/MARRON.webp",
            Vainilla: "img/minimalista/DARK_FUTURE/VAINILLA.webp",
            Verde: "img/minimalista/DARK_FUTURE/VERDE.webp",
            Blanco: "img/minimalista/DARK_FUTURE/BLANCO.webp",
            Gris: "img/minimalista/DARK_FUTURE/GRIS.webp",
            Negro: "img/minimalista/DARK_FUTURE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 2,
        nombre: "NEUTRALS",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/NEUTRALS/BLANCO.webp",
        imagenSecundaria: "img/minimalista/NEUTRALS/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/NEUTRALS/BEIGE.webp",
            Vainilla: "img/minimalista/NEUTRALS/VAINILLA.webp",
            Blanco: "img/minimalista/NEUTRALS/BLANCO.webp",
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 3,
        nombre: "KEEP ON GOING",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/KEEP_ON_GOING/NEGRO.webp",
        imagenSecundaria: "img/minimalista/KEEP_ON_GOING/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/KEEP_ON_GOING/BEIGE.webp",
            Marron: "img/minimalista/KEEP_ON_GOING/MARRON.webp",
            Vainilla: "img/minimalista/KEEP_ON_GOING/VAINILLA.webp",
            Verde: "img/minimalista/KEEP_ON_GOING/VERDE.webp",
            Blanco: "img/minimalista/KEEP_ON_GOING/BLANCO.webp",
            Gris: "img/minimalista/KEEP_ON_GOING/GRIS.webp",
            Negro: "img/minimalista/KEEP_ON_GOING/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 4,
        nombre: "BURBERRY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/BURBERRY/BEIGE.webp",
        imagenSecundaria: "img/minimalista/BURBERRY/BLANCO.webp",
        colores: {
            Beige: "img/minimalista/BURBERRY/BEIGE.webp",
            Marron: "img/minimalista/BURBERRY/MARRON.webp",
            Vainilla: "img/minimalista/BURBERRY/VAINILLA.webp",
            Verde: "img/minimalista/BURBERRY/VERDE.webp",
            Blanco: "img/minimalista/BURBERRY/BLANCO.webp",
            Gris: "img/minimalista/BURBERRY/GRIS.webp",
            Negro: "img/minimalista/BURBERRY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 5,
        nombre: "BEAUTIFUL",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/BEAUTIFUL/NEGRO.webp",
        imagenSecundaria: "img/minimalista/BEAUTIFUL/GRIS.webp",
        colores: {
            Beige: "img/minimalista/BEAUTIFUL/BEIGE.webp",
            Marron: "img/minimalista/BEAUTIFUL/MARRON.webp",
            Vainilla: "img/minimalista/BEAUTIFUL/VAINILLA.webp",
            Verde: "img/minimalista/BEAUTIFUL/VERDE.webp",
            Blanco: "img/minimalista/BEAUTIFUL/BLANCO.webp",
            Gris: "img/minimalista/BEAUTIFUL/GRIS.webp",
            Negro: "img/minimalista/BEAUTIFUL/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 6,
        nombre: "RESISTANCE THAT INSPIRES",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/RESISTANCE_THAT_INSPIRES/MARRON1.webp",
        imagenSecundaria: "img/minimalista/RESISTANCE_THAT_INSPIRES/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/RESISTANCE_THAT_INSPIRES/BEIGE.webp",
            Marron: "img/minimalista/RESISTANCE_THAT_INSPIRES/MARRON.webp",
            Vainilla: "img/minimalista/RESISTANCE_THAT_INSPIRES/VAINILLA.webp",
            Verde: "img/minimalista/RESISTANCE_THAT_INSPIRES/VERDE.webp",
            Blanco: "img/minimalista/RESISTANCE_THAT_INSPIRES/BLANCO.webp",
            Gris: "img/minimalista/RESISTANCE_THAT_INSPIRES/GRIS.webp",
            Negro: "img/minimalista/RESISTANCE_THAT_INSPIRES/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 7,
        nombre: "RANDOM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/RANDOM/VERDE.webp",
        imagenSecundaria: "img/minimalista/RANDOM/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/RANDOM/BEIGE.webp",
            Marron: "img/minimalista/RANDOM/MARRON.webp",
            Vainilla: "img/minimalista/RANDOM/VAINILLA.webp",
            Verde: "img/minimalista/RANDOM/VERDE.webp",
            Blanco: "img/minimalista/RANDOM/BLANCO.webp",
            Gris: "img/minimalista/RANDOM/GRIS.webp",
            Negro: "img/minimalista/RANDOM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 8,
        nombre: "MADE IN THE IMAGE OF GOD",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/VAINILLA.webp",
        imagenSecundaria: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/VERDE.webp",
        colores: {
            Beige: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/BEIGE.webp",
            Marron: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/MARRON.webp",
            Vainilla: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/VAINILLA.webp",
            Verde: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/VERDE.webp",
            Blanco: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/BLANCO.webp",
            Gris: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/GRIS.webp",
            Negro: "img/minimalista/MADE_IN_THE_IMAGE_OF_GOD/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 9,
        nombre: "LUXURY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/LUXURY/GRIS.webp",
        imagenSecundaria: "img/minimalista/LUXURY/VAINILLA.webp",
        colores: {
            Beige: "img/minimalista/LUXURY/BEIGE.webp",
            Marron: "img/minimalista/LUXURY/MARRON.webp",
            Vainilla: "img/minimalista/LUXURY/VAINILLA.webp",
            Verde: "img/minimalista/LUXURY/VERDE.webp",
            Gris: "img/minimalista/LUXURY/GRIS.webp",
            Negro: "img/minimalista/LUXURY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },{
        id: 10,
        nombre: "CREATIVE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/CREATIVE/NEGRO.webp",
        imagenSecundaria: "img/minimalista/CREATIVE/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/CREATIVE/BEIGE.webp",
            Marron: "img/minimalista/CREATIVE/MARRON.webp",
            Vainilla: "img/minimalista/CREATIVE/VAINILLA.webp",
            Verde: "img/minimalista/CREATIVE/VERDE.webp",
            Blanco: "img/minimalista/CREATIVE/BLANCO.webp",
            Gris: "img/minimalista/CREATIVE/GRIS.webp",
            Negro: "img/minimalista/CREATIVE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 11,
        nombre: "PERSONALITY",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/PERSONALITY/BEIGE.webp",
        imagenSecundaria: "img/minimalista/PERSONALITY/MARRON.webp",
        colores: {
            Beige: "img/minimalista/PERSONALITY/BEIGE.webp",
            Marron: "img/minimalista/PERSONALITY/MARRON.webp",
            Vainilla: "img/minimalista/PERSONALITY/VAINILLA.webp",
            Verde: "img/minimalista/PERSONALITY/VERDE.webp",
            Gris: "img/minimalista/PERSONALITY/GRIS.webp",
            Negro: "img/minimalista/PERSONALITY/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 12,
        nombre: "FREESTYLE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/FREESTYLE/NEGRO.webp",
        imagenSecundaria: "img/minimalista/FREESTYLE/BLANCO.webp",
        colores: {
            Beige: "img/minimalista/FREESTYLE/BEIGE.webp",
            Marron: "img/minimalista/FREESTYLE/MARRON.webp",
            Vainilla: "img/minimalista/FREESTYLE/VAINILLA.webp",
            Verde: "img/minimalista/FREESTYLE/VERDE.webp",
            Blanco: "img/minimalista/FREESTYLE/BLANCO.webp",
            Gris: "img/minimalista/FREESTYLE/GRIS.webp",
            Negro: "img/minimalista/FREESTYLE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 13,
        nombre: "DREAM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/DREAM/VERDE.webp",
        imagenSecundaria: "img/minimalista/DREAM/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/DREAM/BEIGE.webp",
            Marron: "img/minimalista/DREAM/MARRON.webp",
            Vainilla: "img/minimalista/DREAM/VAINILLA.webp",
            Verde: "img/minimalista/DREAM/VERDE.webp",
            Blanco: "img/minimalista/DREAM/BLANCO.webp",
            Gris: "img/minimalista/DREAM/GRIS.webp",
            Negro: "img/minimalista/DREAM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 14,
        nombre: "W",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/W/BEIGE.webp",
        imagenSecundaria: "img/minimalista/W/MARRON.webp",
        colores: {
            Beige: "img/minimalista/W/BEIGE.webp",
            Marron: "img/minimalista/W/MARRON.webp",
            Vainilla: "img/minimalista/W/VAINILLA.webp",
            Verde: "img/minimalista/W/VERDE.webp",
            Blanco: "img/minimalista/W/BLANCO.webp",
            Gris: "img/minimalista/W/GRIS.webp",
            Negro: "img/minimalista/W/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 15,
        nombre: "TO BELIEVE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/TO_BELIEVE/VERDE.webp",
        imagenSecundaria: "img/minimalista/TO_BELIEVE/VAINILLA.webp",
        colores: {
            Beige: "img/minimalista/TO_BELIEVE/BEIGE.webp",
            Marron: "img/minimalista/TO_BELIEVE/MARRON.webp",
            Vainilla: "img/minimalista/TO_BELIEVE/VAINILLA.webp",
            Verde: "img/minimalista/TO_BELIEVE/VERDE.webp",
            Blanco: "img/minimalista/TO_BELIEVE/BLANCO.webp",
            Gris: "img/minimalista/TO_BELIEVE/GRIS.webp",
            Negro: "img/minimalista/TO_BELIEVE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 16,
        nombre: "DEMON",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/DEMON/BLANCO1.webp",
        imagenSecundaria: "img/minimalista/DEMON/BLANCO.webp",
        colores: {
            Blanco: "img/minimalista/DEMON/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 17,
        nombre: "DANGER",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/DANGER/GRIS.webp",
        imagenSecundaria: "img/minimalista/DANGER/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/DANGER/BEIGE.webp",
            Marron: "img/minimalista/DANGER/MARRON.webp",
            Vainilla: "img/minimalista/DANGER/VAINILLA.webp",
            Verde: "img/minimalista/DANGER/VERDE.webp",
            Blanco: "img/minimalista/DANGER/BLANCO.webp",
            Gris: "img/minimalista/DANGER/GRIS.webp",
            Negro: "img/minimalista/DANGER/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 18,
        nombre: "CHILL",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/CHILL/BLANCO.webp",
        imagenSecundaria: "img/minimalista/CHILL/VERDE.webp",
        colores: {
            Beige: "img/minimalista/CHILL/BEIGE.webp",
            Vainilla: "img/minimalista/CHILL/VAINILLA.webp",
            Verde: "img/minimalista/CHILL/VERDE.webp",
            Blanco: "img/minimalista/CHILL/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 19,
        nombre: "LOGO FREEDOM",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/LOGO_FREEDOM/NEGRO1.webp",
        imagenSecundaria: "img/minimalista/LOGO_FREEDOM/MARRON.webp",
        colores: {
            Marron: "img/minimalista/LOGO_FREEDOM/MARRON.webp",
            Verde: "img/minimalista/LOGO_FREEDOM/VERDE.webp",
            Gris: "img/minimalista/LOGO_FREEDOM/GRIS.webp",
            Negro: "img/minimalista/LOGO_FREEDOM/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 20,
        nombre: "GOOD VIBES",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/GOOD_VIBES/MARRON1.webp",
        imagenSecundaria: "img/minimalista/GOOD_VIBES/NEGRO.webp",
        colores: {
            Beige: "img/minimalista/GOOD_VIBES/BEIGE.webp",
            Marron: "img/minimalista/GOOD_VIBES/MARRON.webp",
            Vainilla: "img/minimalista/GOOD_VIBES/VAINILLA.webp",
            Verde: "img/minimalista/GOOD_VIBES/VERDE.webp",
            Blanco: "img/minimalista/GOOD_VIBES/BLANCO.webp",
            Gris: "img/minimalista/GOOD_VIBES/GRIS.webp",
            Negro: "img/minimalista/GOOD_VIBES/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 21,
        nombre: "CENSORED",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/CENSORED/BLANCO.webp",
        imagenSecundaria: "img/minimalista/CENSORED/VERDE.webp",
        colores: {
            Beige: "img/minimalista/CENSORED/BEIGE.webp",
            Marron: "img/minimalista/CENSORED/MARRON.webp",
            Vainilla: "img/minimalista/CENSORED/VAINILLA.webp",
            Verde: "img/minimalista/CENSORED/VERDE.webp",
            Blanco: "img/minimalista/CENSORED/BLANCO.webp",
            Gris: "img/minimalista/CENSORED/GRIS.webp",
            Negro: "img/minimalista/CENSORED/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 22,
        nombre: "STREET CULTURE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/STREET_CULTURE/BLANCO1.webp",
        imagenSecundaria: "img/minimalista/STREET_CULTURE/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/STREET_CULTURE/BEIGE.webp",
            Vainilla: "img/minimalista/STREET_CULTURE/VAINILLA.webp",
            Verde: "img/minimalista/STREET_CULTURE/VERDE.webp",
            Blanco: "img/minimalista/STREET_CULTURE/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 23,
        nombre: "INFINITE UNIVERSE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/INFINITE_UNIVERSE/BEIGE.webp",
        imagenSecundaria: "img/minimalista/INFINITE_UNIVERSE/MARRON.webp",
        colores: {
            Beige: "img/minimalista/INFINITE_UNIVERSE/BEIGE.webp",
            Marron: "img/minimalista/INFINITE_UNIVERSE/MARRON.webp",
            Vainilla: "img/minimalista/INFINITE_UNIVERSE/VAINILLA.webp",
            Blanco: "img/minimalista/INFINITE_UNIVERSE/BLANCO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 24,
        nombre: "BIG DREAM BIG ACT",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/BIG_DREAM_BIG_ACT/GRIS.webp",
        imagenSecundaria: "img/minimalista/BIG_DREAM_BIG_ACT/VERDE.webp",
        colores: {
            Beige: "img/minimalista/BIG_DREAM_BIG_ACT/BEIGE.webp",
            Marron: "img/minimalista/BIG_DREAM_BIG_ACT/MARRON.webp",
            Verde: "img/minimalista/BIG_DREAM_BIG_ACT/VERDE.webp",
            Gris: "img/minimalista/BIG_DREAM_BIG_ACT/GRIS.webp",
            Negro: "img/minimalista/BIG_DREAM_BIG_ACT/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 25,
        nombre: "AUTHENTIC",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/AUTHENTIC/MARRON.webp",
        imagenSecundaria: "img/minimalista/AUTHENTIC/NEGRO.webp",
        colores: {
            Marron: "img/minimalista/AUTHENTIC/MARRON.webp",
            Verde: "img/minimalista/AUTHENTIC/VERDE.webp",
            Gris: "img/minimalista/AUTHENTIC/GRIS.webp",
            Negro: "img/minimalista/AUTHENTIC/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 26,
        nombre: "RESISTENCIA QUE INSPIRA",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/RESISTENCIA_QUE_INSPIRA/NEGRO.webp",
        imagenSecundaria: "img/minimalista/RESISTENCIA_QUE_INSPIRA/GRIS.webp",
        colores: {
            Beige: "img/minimalista/RESISTENCIA_QUE_INSPIRA/BEIGE.webp",
            Marron: "img/minimalista/RESISTENCIA_QUE_INSPIRA/MARRON.webp",
            Vainilla: "img/minimalista/RESISTENCIA_QUE_INSPIRA/VAINILLA.webp",
            Verde: "img/minimalista/RESISTENCIA_QUE_INSPIRA/VERDE.webp",
            Blanco: "img/minimalista/RESISTENCIA_QUE_INSPIRA/BLANCO.webp",
            Gris: "img/minimalista/RESISTENCIA_QUE_INSPIRA/GRIS.webp",
            Negro: "img/minimalista/RESISTENCIA_QUE_INSPIRA/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 27,
        nombre: "PATHETIC",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/PATHETIC/VERDE.webp",
        imagenSecundaria: "img/minimalista/PATHETIC/BEIGE.webp",
        colores: {
            Beige: "img/minimalista/PATHETIC/BEIGE.webp",
            Marron: "img/minimalista/PATHETIC/MARRON.webp",
            Verde: "img/minimalista/PATHETIC/VERDE.webp",
            Gris: "img/minimalista/PATHETIC/GRIS.webp",
            Negro: "img/minimalista/PATHETIC/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 28,
        nombre: "MAKE YOUR MAKE",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/MAKE_YOUR_MAKE/BEIGE.webp",
        imagenSecundaria: "img/minimalista/MAKE_YOUR_MAKE/MARRON.webp",
        colores: {
            Beige: "img/minimalista/MAKE_YOUR_MAKE/BEIGE.webp",
            Marron: "img/minimalista/MAKE_YOUR_MAKE/MARRON.webp",
            Vainilla: "img/minimalista/MAKE_YOUR_MAKE/VAINILLA.webp",
            Verde: "img/minimalista/MAKE_YOUR_MAKE/VERDE.webp",
            Blanco: "img/minimalista/MAKE_YOUR_MAKE/BLANCO.webp",
            Gris: "img/minimalista/MAKE_YOUR_MAKE/GRIS.webp",
            Negro: "img/minimalista/MAKE_YOUR_MAKE/NEGRO.webp"
        },
        tallas: ["S", "M", "L", "XL"],
        enlaceCompra: "https://api.whatsapp.com/send?phone=573127012192&text=Hola......"
    },
    {
        id: 29,
        nombre: "LIBERTAD EN CADA PASO",
        tipo: "T-Shirt",
        precio: "$55.000",
        imagenPrincipal: "img/minimalista/LIBERTAD_EN_CADA_PASO/BLANCO.webp",
        imagenSecundaria: "img/minimalista/LIBERTAD_EN_CADA_PASO/VAINILLA.webp",
        colores: {
            Beige: "img/minimalista/LIBERTAD_EN_CADA_PASO/BEIGE.webp",
            Marron: "img/minimalista/LIBERTAD_EN_CADA_PASO/MARRON.webp",
            Vainilla: "img/minimalista/LIBERTAD_EN_CADA_PASO/VAINILLA.webp",
            Verde: "img/minimalista/LIBERTAD_EN_CADA_PASO/VERDE.webp",
            Blanco: "img/minimalista/LIBERTAD_EN_CADA_PASO/BLANCO.webp",
            Gris: "img/minimalista/LIBERTAD_EN_CADA_PASO/GRIS.webp",
            Negro: "img/minimalista/LIBERTAD_EN_CADA_PASO/NEGRO.webp"
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
