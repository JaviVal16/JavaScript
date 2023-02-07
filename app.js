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


let edad = (max) => {
    return Math.floor(Math.random() * max);
}

if (edad(25) >= 18) {
    console.log("Valido");
} else {
console.log("No valido");
}