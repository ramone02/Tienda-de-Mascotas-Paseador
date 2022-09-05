import ImgJuan from "../img/perfil1.webp";
import ImgPedro from "../img/perfil2.webp";
import ImgMaria from "../img/perfil3.jpg";
import ImgBelen from "../img/perfil4.jpg";
import ImgCeleste from "../img/perfil5.jpg";
import ImgMatias from "../img/perfil6.jpg";
import ImgWhiskas from "../img/whiskas.jpg";
import ImgProteinDog from "../img/proteindog.jpg";
import ImgKitten from "../img/kitten.png";
import ImgDogChow from "../img/dogchow.jpg";
import ImgCatFood from "../img/catfood.jpg";
import ImgAlimentoDogui from "../img/alimentodogui.jpg";

const products = [
    {
        "id": 1,
        "nombre": "Juan",
        "img": ImgJuan,
        "razas": ["Dogo", "Caniche", "Ovejero"],
        "experiencia": true,
        "descripcion": "Experiencia con perros grandes en manadas",
        "calificacion": 4,
        "category": "paseador",
    },
    {
        "id": 2,
        "nombre": "Pedro",
        "img": ImgPedro,
        "razas": [
            "Labrador",
            "Ovejero"
        ],
        "experiencia": false,
        "descripcion": "Experiencia con perros chicos, hasta 3 a la vez",
        "calificacion": 3,
        "category": "paseador",
    },
    {
        "id": 3,
        "nombre": "Maria",
        "img": ImgMaria,
        "razas": [
            "Mestizo",
            "Cocker"
        ],
        "experiencia": false,
        "descripcion": "Me encantan todo tipo de perro, con ganas de trabajar",
        "calificacion": 4,
        "category": "paseador",
    },
    {
        "id": 4,
        "nombre": "Belen",
        "img": ImgBelen,
        "razas": [
            "Caniche",
            "Bulldog-Frances"
        ],
        "experiencia": false,
        "descripcion": "Experiencia con varios perros de diferente tamaño",
        "calificacion": 3.5,
        "category": "paseador",
    },
    {
        "id": 5,
        "nombre": "Celeste",
        "img": ImgCeleste,
        "razas": [
            "Caniche",
            "Bulldog-Frances"
        ],
        "experiencia": false,
        "descripcion": "Experiencia como paseadora y cuidadora a domicilio",
        "calificacion": 3.5,
        "category": "paseador",
    },
    {
        "id": 6,
        "nombre": "Matias",
        "img": ImgMatias,
        "razas": [
            "Caniche",
            "Bulldog-Frances"
        ],
        "experiencia": false,
        "descripcion": "Experiencia con perros chicos hasta 3",
        "calificacion": 3.5,
        "category": "paseador",
    },
    {
        "id": 7,
        "nombre": "Whiskas",
        "descripcion": "Alimento balanceado de calidad para gato",
        "tipo": "Gato",
        "img": ImgWhiskas,
        "precio": 650,
        "category": "producto",
    },
    {
        "id": 8,
        "nombre": "Protein",
        "descripcion": "Proteina diaria para perro",
        "tipo": "Perro",
        "img": ImgProteinDog,
        "precio": 1050,
        "category": "producto",
    },
    {
        "id": 9,
        "nombre": "Kitten",
        "descripcion": "Alimento balanceado para gato",
        "tipo": "Gato",
        "img": ImgKitten,
        "precio": 850,
        "category": "producto",
    },
    {
        "id": 10,
        "nombre": "DogChow",
        "descripcion": "Alimento balanceado para perro",
        "tipo": "Perro",
        "img": ImgDogChow,
        "precio": 999,
        "category": "producto",
    },
    {
        "id": 11,
        "nombre": "Cat Food",
        "descripcion": "Alimento balanceado para Gato",
        "tipo": "Gato",
        "img": ImgCatFood,
        "precio": 750,
        "category": "producto",
    },
    {
        "id": 12,
        "nombre": "Dogui",
        "descripcion": "Alimento balanceado para perro",
        "tipo": "Gato",
        "img": ImgAlimentoDogui,
        "precio": 650,
        "category": "producto",
    },
];


//funcion Promise para simular la peticion GET a una DB

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
export const getProductsId = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 2000)
    })
}

export const getProductsCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === productCategory))
        }, 2000)
    })
}

export const getProductsSearch = (productSearch) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productName = products.filter(product => product.name.toLowerCase().includes(productSearch.toLowerCase()))
            const productCategory = products.filter(product => product.category.toLowerCase().includes(productSearch.toLowerCase()))
            resolve(productName.concat(productCategory))
        }, 2000)
    })
}
