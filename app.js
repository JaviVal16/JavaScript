//ACTIVIDAD 5

/* let string = 'Javier';
var edad = 25;
const boolean = true;
let num1 = 12;
let num2 = -64;

console.log(`Hola mi nombre es ${string} y tengo ${edad}`);
console.log((num2*=num2)*(num1 + num2)/(num1*= num2));
if(num1 >= num2)
console.log(`El numero ${num1} es mayor que ${num2}`);
 */

//ACTIVIDAD 6

/* let num1 = 12, num2 = 6, num3 = 24;

let suma = () => num1 + num2 + num3;

console.log(suma());

let compare = () => {
    if (num1 >= num2 && num1 <= num3) {
        return `El numero ${num1} es mayor que ${num2} y menor que ${num3}`;
    } else {
        return `La coondcion no se cumple`
    }
}

console.log(compare());

let caricatura = {
    nombre: 'Lonney Tunes',
    capitulo: 'Do not Give Up The Sheep',
    año: 1953,
    personajes: {
        principal: 'Coyote',
        secundario: 'Ralph'
    },
    frases: ['¡Oh, buenos días Ralph!', 'Otro día... otro dolar', 'Hola Fred']
}

let { nombre, personajes, frases } = caricatura;
console.log(nombre, personajes.principal, frases[0]);


let elArray = ["it's me. Mario", ['Que el profe Alan se rasque la nariz y un ojo al mismo tiempo la proxima clase si leyó esto', 
                                    'expecto patronuuuuum'], 
                24, 23, ];

const funArry = () => {
    return elArray;
}

const [frase, [otraFrase], numero] = funArry();

console.log(frase, [otraFrase], numero); */

//ACTIVIDAD 7

/* let edad = Math.floor(Math.random() * 25);

edad >= 18 ? console.log(`Tienes ${edad} años de edad: VÁLIDO`) : console.log(`Tienes ${edad} años de edad: NO VÁLIDO`);

let array = [
    {
        clasificación: 'vejez',
        rangoEdad: {
            min: 60,
            max: 110
        },
        sexo: ['masculino', 'femenino']
    },
    {
        clasificación: 'adultez',
        edad: {
            min: 27,
            max: 59
        },
        sexo: ['masculino', 'femenino']
    },
    {
        clasificación: 'juventud',
        edad: {
            min: 14,
            max: 26
        },
        sexo: ['masculino', 'femenino']
    },
    {
        clasificación: 'adolescencia ',
        edad: {
            min: 12,
            max: 18
        },
        sexo: ['masculino', 'femenino']
    },
    {
        clasificación: 'infancia',
        edad: {
            min: 6,
            max: 11
        },
        sexo: ['masculino', 'femenino']
    }
]

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

let clasificación;

if (edad > 59) {
    clasificación = array[0].clasificación;
} else if (edad > 26 && edad < 60) {
    clasificación = array[1].clasificación;
} else if (edad > 13 && edad < 27) {
    clasificación = array[2].clasificación;
} else if (edad > 11 && edad < 19) {
    clasificación = array[3].clasificación;
} else if (edad > 5 && edad < 12) {
    clasificación = array[4].clasificación;
}

console.log(clasificación, edad);

switch (clasificación) {
    case 'vejez':
        console.log('Su entrada queda al 50% de descuento');
        break;
    case 'adultez':
        console.log('Todos los miercvoles tiene una entrada al 2X1');
        break;
    case 'juventud':
        console.log('Todos los viernes tiene una combo al 2X1');
        break;
    case 'adolescencia':
        console.log('Fines de semana antes de las 10 de la mañana las entradas al 50% de descuento');
        break;
    case 'infancia':
        console.log('Solo pueden entrar a la sala para infantes');
        break;
    default:
        break;
} */

//ACTIVIDAD 8

/* let zapatos = [
    {
        marca:      'NIKE',
        stock:      8,
        precios:    150.30 
    },
    {
        marca:      'PUMA',
        stock:      7,
        precios:    80.5 
    },
    {
        marca:      'ADIDAS',
        stock:      6,
        precios:    70.41 
    },
    {
        marca:      'CONVERSE',
        stock:      8,
        precios:    120.8 
    },
];

zapatos.forEach(e => {
    console.log(e.marca, e.stock);
});

let filtroPrecio = zapatos.filter(e => e.precios > 200 || e.precios < 100);
console.log(filtroPrecio);

const zapatosMap = zapatos.map(e => e.precios);
console.log(zapatosMap);

let promedioPrecio = zapatosMap.reduce((eAnterior, eAtual) => eAnterior + eAtual);
console.log(promedioPrecio/zapatos.length);

zapatos.sort((a, b) =>{
    if (a.marca == b.marca) {
        return 0;
    }
    if (a.marca < b.marca) {
        return -1;
    }
    return 1;
})

console.log(zapatos);


console.log(Math.max(Math.round(...zapatosMap))); */


//Actividad 10
const urlGet = 'https://rickandmortyapi.com/api/character';
const apiBtn = document.getElementById('getAPI');
const charactersDiv = document.getElementById('characterCont');

apiBtn.addEventListener('click', () => {
    apiCall();
});

const apiCall = () => {
    charactersDiv.innerHTML = '';
    fetch(urlGet)
        .then(data => data.json())
        .then(info => info.results.forEach(personajes => {
            charactersDiv.innerHTML +=
                `
        <div>
        <h2>${personajes.name}</h2>
        <img src="${personajes.image}" alt="${personajes.name}">
        </div>
        `
        }))
};