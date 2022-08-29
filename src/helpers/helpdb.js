import ImgJuan from "../img/perfil1.webp";
import ImgPedro from "../img/perfil2.webp";
import ImgMaria from "../img/perfil3.jpg";
import ImgBelen from "../img/perfil4.jpg";
import ImgCeleste from "../img/perfil5.jpg";
import ImgMatias from "../img/perfil6.jpg";

const paseadores = [
    {
        "id": 1,
        "nombre": "Juan",
        "img": ImgJuan,
        "razas": ["Dogo", "Caniche", "Ovejero"],
        "experiencia": true,
        "descripcion": "experiencia con perros grandes en manadas",
        "calificacion": 4
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
        "descripcion": "experiencia con perros chicos, hasta 3 a la vez",
        "calificacion": 3
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
        "calificacion": 0
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
        "calificacion": 3.5
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
        "calificacion": 3.5
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
        "calificacion": 3.5
    }
];

//funcion Promise para simular la peticion GET a una DB
const asyncGetData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(paseadores);
        reject(error => console.error(error));
    }, 3000);
});

export default asyncGetData;