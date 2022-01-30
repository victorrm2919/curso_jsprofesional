console.log('Hello, Typescript');

// function add(a:number, b:number) {
//     return a + b
// }

// const sum = add(2,3)

//Tipos Básicos***************************************

//Boolean
// let muted: boolean = true;
// muted = false;

// //Numbers
// let numerador: number = 20;
// let denominador: number = 5;
// let resultado = numerador / denominador;

// //String

// let nombre: string = 'Victor';
// let saludo = `Me llamo ${nombre}`;

// //Arreglos
// let people: string[] = [];

// people = ['Victor', 'Manuel', 'Reyna'];
// // people.push('1');

// let peopleNumbers: Array<string | number> = []; //Combinacion de array con diferentes tipos

// //Enum: una lista de variables
// enum Colores {
// 	Rojo = 'Rojo',
// 	Verde = 'Verde',
// 	Azul = 'Azul',
// }

// let colorFav: Colores = Colores.Verde;

// console.log(`Mi Color favorito es: ${colorFav}`);

// //Any: no sabemos que tipo de variable es

// let comodin: any = 'Joker';

// comodin = { type: 'WildCart' };

// //Object
// let obj: object = {
// 	name: 'Victor',
// };

// //Funciones*********************************************************
// function add(a: number, b: number): number {
// 	return a + b;
// }

// const sum = add(4, 5);

// //funciones que regresan otras funciones
// function createAdder(a: number): (number) => number {
// 	return function (b: number) {
// 		return b + a;
// 	};
// }

// const addFour = createAdder(5);
// const suma = addFour(5);

// //Funciones con parametros y argumentos opcionales
// function fullName(firstName: string, lastName: string = 'Ruiz'): string {
// 	//Se agrega ? antes de los dos puntos en caso de ser un parametro opcional, se agrega despues del tipado el valor pode defecto
// 	return `${firstName} ${lastName}`;
// }

// const victor = fullName('Victor');

//Interfaces ******************************

enum Color {
	Rojo = 'Rojo',
	Verde = 'Verde',
}

interface Rectangulo {
	ancho: number;
	alto: number;
	color?: Color; //Opcional
}
let rect: Rectangulo = {
	ancho: 4,
	alto: 6,
    // color: Color.Rojo //Se puede agregar color o no
};

function area(r: Rectangulo): number {
	return r.alto * r.ancho;
}

const areaRect = area(rect);

console.log(areaRect);

rect.toString = function () {
	return this.color ?  `Un rectangulo ${this.color}` : 'Un rectangulo'  //Se puede ocupar aun condicional para validar que un parametro opcional exista
};

console.log(rect.toString());
