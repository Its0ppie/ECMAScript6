let texto = "El tiempo entre costuras";

console.log("El texto a anlizar es: " + texto);

console.log("Inicia en: 'El' --  " + texto.startsWith("El"));
console.log("Inicia en: 'El tiempo' --  " + texto.startsWith("El tiempo"));
console.log(
  "Inicia en: 'tiempo', iniciado en posicion 3 --  " +
    texto.startsWith("tiempo", 3)
);
console.log("Inicia en: 'el' --  " + texto.startsWith("el"));
console.log(
  "Finaliza en: 'entre costuras' --  " + texto.endsWith("entre costuras")
);
console.log("Finaliza en: 'ras' --  " + texto.endsWith("ras"));
console.log("Finaliza en: 'el' --  " + texto.endsWith("el"));
console.log("Contiene: 'a' --  " + texto.includes("a"));
console.log("Contiene: 'costuras' --  " + texto.includes("costuras"));
console.log("Contiene: 'j' --  " + texto.includes("j"));

console.log(`------------------------------------------------------`);

const ESPACIOS = 15;

let nombre = ["xtian", "Laia", "Jenifer"];
let telefonos = ["55668899", "11556622", "88009977"];

for (const key in nombre) {
  let space = " ";
  let dif = ESPACIOS - nombre[key].length;

  console.log(nombre[key] + space.repeat(dif) + " | " + telefonos[key]);
  console.log(`${nombre[key]}${space.repeat(dif)} | ${telefonos[key]}`);
}

console.log(`------------------------------------------------------`);

let nombreSuperHeroe = "Batman";
let nombreRealSuperHeroe = "Bruce Wayne";

function get_nombreRealSuperHeroe() {
  return nombreRealSuperHeroe;
}

console.log(
  `El nombre real de: ${nombreSuperHeroe}, es: ${get_nombreRealSuperHeroe()}, ha capturado un total de ${3 +
    6} villanos`
);

console.log(`------------------------------------------------------`);
/*  Los TAGs en los templates literales, son funciones que pueden modificar
 *  completamente la variable de texto
 */

function etiqueta(literales, ...substituciones) {
  let resultado = "";

  console.log(literales);
  console.log(substituciones);

  console.log(literales.length);
  console.log(substituciones.length);

  if (literales.length > substituciones.length) {
    var total = literales.length;
  } else {
    var total = substituciones.length;
  }

  for (let i = 0; i < total; i++) {
    if (literales[i]) resultado += literales[i];
    if (substituciones[i]) resultado += substituciones[i];
  }
  return resultado;
}

let unidades = 3;
let costo_unitario = 0.25;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades *
  costo_unitario} euros.`;

console.log(mensaje);

console.log(`------------------------------------------------------`);

let saludo = `Hola \nMundo\\`;
let saludo2 = String.raw`Hola \n mundo`;

//var saludo3 = String.raw 'Hola \nMundo\\'; //<- Este saludo da error...

console.log(saludo + "\n" + saludo2);

console.log(`------------------------------------------------------`);

console.log(
  "Parametros opcionales, en caso de no añadir un valor tienen Cacahuete3 por defecto, así como el tiempo 1500\n\n"
);

function saludoFunction(
  /*opcion3*/ mensaje = `Cacahuete3 de la Parte 1, con delay.`,
  tiempo = 1500
) {
  //Opcion1: // mensaje = mensaje || 'Cacahuete';

  //Opcion2: // mensaje = (typeof mensaje !== "undefined") ? mensaje : "Cacahuete2";

  setTimeout(function() {
    console.log(mensaje);
  }, 1);
}

//saludoFunction();

console.log("\n\nPARTE 2: Con funcion Opcional...\n\n");

function saludoFunction2(
  fn = fnTemporal,
  persona = {
    nombre: "Batman"
  }
) {
  console.log(typeof fn);

  if (typeof fn === "undefined") {
    console.error("No es una función");
    return;
  } else {
    fn();
    console.log(persona);
  }
}

var fnTemporal = function fnTemporal() {
  console.log("Los cacahuetes en funciones");
};

var persona = {
  nombre: "Wonder Woman"
};

saludoFunction2();

console.log("* * * * * * * * *");

saludoFunction2(fnTemporal, persona);

console.log(`------------------------------------------------------`);

console.log(`ARGUMENTS\n\n`);

function sumar(a = 1, b = 5) {
  console.log(`Cantidad de valores: ` + arguments.length);

  for (let i = 0; i < arguments.length; i++) {
    console.log(`valor ${i}: ` + arguments[i]);
  }
}
console.log(
  `Cuando no enviamos ningun argumento dentro de la funcion, no se observa en la peticion de argumentos`
);
sumar();

console.log(`\n\nCuando enviamos 2 valores.`);
sumar(5, 6);

console.log(`------------------------------------------------------`);

console.log(
  `PARAMETRO -> REST\n\nSe usa ..., para transformar un parametro de una funcion en opcional`
);

function agregarAvengers(avengersArray, ...avengers) {
  console.log(`Que argumentos tenemos: ` + arguments);

  for (let i = 0; i < avengers.length; i++) {
    avengersArray.push(avengers[i]);
  }

  return avengersArray;
}

let avengersArray = ["Ironman"];

let avengersArray2 = agregarAvengers(
  avengersArray,
  "Capitán América",
  "Hulk",
  "Viuda Negra",
  "Bruja Escarlata"
);

console.log(avengersArray2);
console.log(
  "Solo puede haber un operador REST (...) y siempre debe de estar al final."
);

console.log(`------------------------------------------------------`);

console.log(
  `PARAMETRO -> SPREAD\n\nTransforma un array, en sus distintos valores, es decir, un array puede contener 3, 4, 5, y esto los separa en distintos numeros, como si fuesen independientes`
);

let numbers = [10, 20, 1, 33, 22, 80, 75, 201, 22, 35, 76, 62];

let max = Math.max(...numbers);

console.log(max);

console.log(`------------------------------------------------------`);

console.log(
  `Romper referencia con objetos anidados, es decir, obtener el contenido de un objeto dentro de otro objeto, es decir, tener una copia\n\n`
);

let persona1 = {
  nombre: "Bruce Wayne",
  alias: "Batman",
  edad: 33
};

let persona2 = {
  ...persona1
};

let persona3 = persona1;

persona2.nombre = "Stephen Strange";
persona2.alias = "Dr. Strange";
persona2.edad = 35;

persona3.alias = "Hulk";

console.log("La persona1, es Batman, seguro ? " + persona1.alias);

console.log("La persona2, es Dr. Strange, seguro ? " + persona2.alias);

console.log("La persona3, es Hulk, seguro ? " + persona3.alias);

console.log(
  "\n\nComo se observa, al igualar un objeto con otro (let persona3 = persona1;), coge este como referencia y si modificas uno, el otro tambien se modifica, por lo que es mejor, romper la relacion con -- let persona2 = {...persona1 };"
);

console.log(`------------------------------------------------------`);

console.log(`Compartir propiedades, sin perder las propias.\n\n`);

let heroe1 = {
  nombre: "Bruce Wayne",
  alias: "Batman",
  edad: 33
};

let heroe2 = {
  nombre: "Stephen Strange",
  alias: "Dr. Strange",
  edad: 35,
  poderes: "Mágia",
  vehiculo: false,
  arma: true,
  amigos: ["Hulk", "Thor"]
};

heroe1 = {
  ...heroe2,
  ...heroe1
};

heroe1.poderes = "Tecnología";
heroe1.vehiculo = true;
heroe1.amigos[0] = "Robin";

console.log(heroe1);
console.log(heroe2);

console.log(`------------------------------------------------------`);

console.log(`Uso de REST & SPREAD.\n\n`);

function saludarRest(mensaje, ...nombres) {
  for (const i in nombres) {
    console.log(`${mensaje} ${nombres[i]}.`);
  }
}

function saludarSpread(mensaje, ...nombres) {
  console.log(`${mensaje} ${nombres}.`);
}

let heroesSaludoSpread = ["Dr. Strange", "Ironman", "Batman"];

saludarRest("Hola", "Hulk", "Batman", "Thor");
saludarSpread("Hi!!", heroesSaludoSpread);

console.log(`------------------------------------------------------`);

console.log(`FUNCIONES FLECHA => \n\n`);

let personaSaludo1 = "Jean Grey";
let personaSaludo2 = "Tormenta";

let saludarPersona = nombrePersona => `Buenos dias ${nombrePersona}!`;

let saludarPersona2 = nombrePersona => {
  let saludar = `Buenos dias ${nombrePersona}!`;
  return saludar;
};

console.log(saludarPersona(personaSaludo1));
console.log(saludarPersona(personaSaludo2));

console.log(`\n\nPasar Objetos por función`);

let objetoFunction = id => ({
  id: id,
  nombre: "Xmen Evolution"
});

console.log(objetoFunction(112233));

console.log(
  `\n\nFunciones anonimas!  -- Guardado en una variable VAR, no en LET, y con el parentesis con el valor, al final, para autoejecutarse.`
);
var saludoAnonimo = (nombre => `Buenos dias ${nombre}!`)("Ciclope");

console.log(saludoAnonimo);

console.log(`------------------------------------------------------`);

console.log(`\n\nFunciones => para ARRAY.`);

let arrayDesordenado = [5, 8, 1, 22, 57, 12, 26, 99, 77, 53];

let ordenadoES6 = arrayDesordenado.sort((a, b) => a - b);

console.log(ordenadoES6);

console.log(`------------------------------------------------------`);

console.log(`\n\nFunciones => y otros ejemplos.`);

var restarNum = (a, b) => a - b;

console.log(typeof restarNum);
console.log(restarNum instanceof Function);

console.log(`------------------------------------------------------`);

console.log(
  `\n\nObjetos en ES6: Si coinciden los valores que entran en la funcion con el nombre de los parametros del objeto, pues se pueden poner de la forma ES6`
);

function crearPersonaES6(nombre, apellido, edad) {
  return {
    nombre,
    apellido,
    edad
  };
}

function crearPersonaAntiguo(nombre, apellido, edad) {
  return {
    nombre: nombre,
    apellido: apellido,
    edad: edad
  };
}

var batmanES6 = crearPersonaES6("Bruce", "Wayne", 30);
var batmanAntiguo = crearPersonaES6("Bruce", "Wayne", 30);

console.log(batmanES6, batmanAntiguo);

console.log(`------------------------------------------------------`);

console.log(`\n\nMetodos concisos`);

var metodoConciso = {
  nombre: "Batman",
  getNombre: function() {
    console.log(this.nombre);
  }
};

metodoConciso.getNombre();

var metodoConcisoES6 = {
  nombre: "BatmanES6",
  getNombre() {
    console.log(this.nombre);
  }
};

metodoConcisoES6.getNombre();

console.log(`------------------------------------------------------`);

console.log(`\n\nNombres de propiedades computadas o procesadas`);

var superHeroe = {};

var apellido = "apellido";

superHeroe["primer nombre"] = "Bruce";
superHeroe[apellido] = "Weyne";

console.log(superHeroe);
console.log(superHeroe["primer nombre"]);
console.log(superHeroe.apellido + " o " + superHeroe[apellido]);

var apellido1 = "primer apellido";

var superHeroe = {
  "primer nombre": "Thor",
  [apellido1]: "Hijo de Odin"
};

console.log(superHeroe);
console.log(superHeroe["primer nombre"]);
console.log(superHeroe["primer apellido"] + " o " + superHeroe[apellido1]);

var sufijo = " name";

var superHeroe = {
  ["primer" + sufijo]: "Thor",
  ["segundo" + sufijo]: "Hijo de Odin"
};

console.log(superHeroe);
console.log(superHeroe["primer name"]);
console.log(superHeroe["segundo name"]);

console.log(`------------------------------------------------------`);

console.log(`\n\nNuevo método: Object.is()`);

console.log("\n+0 == -0");
console.log(+0 == -0);
console.log("\n+0 === -0");
console.log(+0 === -0);
console.log("\nObject.is(+0, -0)");
console.log(Object.is(+0, -0));

console.log("\n\n * * * * * * * \n");

console.log("\n 5 == 5");
console.log(5 == 5);
console.log('\n 5  === "5"');
console.log(5 === "5");

console.log("\n\n * * * * * * * \n");

console.log("\nObject.is(5, 5)");
console.log(Object.is(5, 5));
console.log('\nObject.is(5, "5")');
console.log(Object.is(5, "5"));

console.log(`------------------------------------------------------`);

console.log(`\n\nNuevo método: Object.assign()`);

console.log(`\n\nES5`);

function mezclar(objReceptor, objDonador) {
  Object.keys(objDonador).forEach(function(key) {
    objReceptor[key] = objDonador[key];
  });

  return objReceptor;
}

var objReceptor = {};
var objDonador = {
  nombre: "mi-archivo.js"
};

console.log(mezclar(objReceptor, objDonador));

console.log(
  "\n\nModo ES6, sin crear funcion, simplemente usando: \nObject.assign(objR, objD): "
);
console.log(Object.assign(objReceptor, objDonador));

console.log(`------------------------------------------------------`);

console.log(`\n\nOrden de enumeración de las propiedades de los objetos`);

var objetoParaOrdenar = {
  c: 1,
  0: 1,
  x: 1,
  15: 1,
  r: 1,
  3: 1,
  b: 1
};

objetoParaOrdenar.d = 1;
objetoParaOrdenar["2"] = 1;
objetoParaOrdenar["a"] = 1;

console.log(Object.getOwnPropertyNames(objetoParaOrdenar).join(", "));
console.log(Object.keys(objetoParaOrdenar));
console.log(JSON.stringify(objetoParaOrdenar));

console.log(`------------------------------------------------------`);

console.log(`\n\nPOO: Cambiar el prototipo de un objeto`);

let gato = {
  sonido() {
    console.log("Miau!");
  },

  gritar() {
    console.log("MIAUUUUU!!!");
  }
};

let perro = {
  sonido() {
    console.log("Guau!");
  }
};

let minino = Object.create(gato);

console.log(Object.getPrototypeOf(minino) === gato);

minino.sonido();
minino.gritar();

Object.setPrototypeOf(minino, perro);
console.log(Object.getPrototypeOf(minino) === gato);

minino.sonido();

console.log(`------------------------------------------------------`);

console.log(`\n\nPOO: Acceso al prototipo con la referencia "SUPER"`);

let personaSuper = {
  saludar() {
    return "hola";
  }
};

let amigo = {
  saludar() {
    return super.saludar() + ", que tal estas??";
  }
};

//Si no se realiza la adquisición de las propiedades del super, dará error!
Object.setPrototypeOf(amigo, personaSuper);

console.log(amigo.saludar());

console.log(`------------------------------------------------------`);

console.log(`\n\nPOO: Destructuración de objetos`);

let ajustes = {
  aliasHeroe: "Batman",
  vehiculo: true,
  arma: "gatgets",
  companero: "Robin"
};

let nombreDelHeroe = ajustes.aliasHeroe;
let vehiculoDelHeroe = ajustes.vehiculo;

/*  Forma del ES6 / Se puede cambiar el nombre, siempre que coincida con las del objeto, 
    pero se renombra con ':', como el caso de companero: compi*/
let { aliasHeroe, vehiculo, arma, companero: compi } = ajustes;

console.log(aliasHeroe, vehiculo, compi);

console.log(`------------------------------------------------------`);

console.log(`\n\nPOO: Destructuración de objetos ANIDADOS`);

let autoGuardado = {
  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 20
    }
  },
  otroNodo: {
    subNodo: {
      cursor: {
        linea: 11,
        columna: 22
      }
    }
  }
};

let { cursor: cursosActivo } = autoGuardado;

console.log(cursosActivo);

let {
  ultimoArchivo: { cursor: cursorAnterior }
} = autoGuardado;

console.log(cursorAnterior);

let {
  otroNodo: {
    subNodo: { cursor: cursorDeSubNodo }
  }
} = autoGuardado;

console.log(cursorDeSubNodo);

console.log("* * * * * * * * * ");

let otroCursorDeSuperNodo = autoGuardado.otroNodo.subNodo.cursor;

console.log(otroCursorDeSuperNodo);

console.log("* * * * * * * * * ");

let { archivo, cursor, ultimoArchivo, otroNodo } = autoGuardado;

console.log(archivo, cursor, ultimoArchivo, otroNodo);

console.log(`------------------------------------------------------`);

console.log(`\n\nPOO: Destructuración de arreglos`);

let frutas = ["banana", "pera", "manzana", "sandia"];

let [fruta1, fruta2] = frutas;

let [, , fruta3, fruta4] = frutas;

console.log(fruta1, fruta2, fruta3, fruta4);

console.log(`------------------------------------------------------`);

console.log(`\n\nSimbolos`);

let primerNombre = Symbol();
let segundoNombre = Symbol();
let personaSimbol = {};

personaSimbol[primerNombre] = "xtian";
personaSimbol[segundoNombre] = "xpo";

console.log(personaSimbol[primerNombre]);
console.log(personaSimbol[segundoNombre]);

let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");

console.log(
  "Los simbolos sirven para dar una ID, o reservado de memoria único." +
    "\n\nNo dará nunca true, porque cada uno apunta a una unidad de memoria distinto"
);

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);

console.log(Object.is(simbolo1, simbolo2));

console.log("Un simbol, no se puede transformar en string");

console.log(`------------------------------------------------------`);

console.log(`\n\nSimbol.for() - Utilizan la misma unidad de memoria`);

let userID1 = Symbol.for("userID");
let userID2 = Symbol.for("userID");
let objeto = {};

objeto[userID1] = "12345";

console.log(userID1 == userID2);
console.log(userID1 === userID2);

console.log(Object.is(userID1, userID2));

console.log(`------------------------------------------------------`);

console.log(`\n\nSet - Son una lista de valores sin duplicados`);

let itemSet = new Set();

itemSet.add(10);
itemSet.add(5);
itemSet.add(4);
itemSet.add(5);
itemSet.add(10);

console.log(
  "\nContiene 5 números, 10, 5, 4, 5, 10, pero solo muestra un total de: ",
  itemSet.size
);
console.log("\nNo muestra los duplicados...", itemSet);

let itemArraySet = new Set([1, 2, 5, 8, 6, 3, 2, 5, 4, 6, 3, 2, 1, 2, 4]);

console.log(itemArraySet);
console.log(
  "\nContiene 15 numeros, pero como elimina los duplicados, se queda con: ",
  itemArraySet.size
);

console.log(
  "\nCon .has(), podemos saber si contine un valor, como por ejemplo: ",
  itemArraySet.has(1)
);

console.log(
  "\nCon .delete(), podemos eliminar un valor del SET, como por ejemplo: ",
  itemArraySet.delete(8),
  "\nen este caso el 8, que sabemos que existe...",
  itemArraySet
);

console.log(
  "\nCon .clear(), podemos eliminar TODOS los valor del SET...",
  itemArraySet
);

itemArraySet.clear();
console.log("\nUsamos el .clear() y el SET queda así...", itemArraySet);

console.log(
  "\nExiste el metodo forEach(), en los SETs, un ejemplo seria el siguiente:"
);

let animalitos = new Set(["gato", "perro", "canario"]);

animalitos.forEach(function(value, key, originalSet) {
  console.log("Key: ", key, " Value: ", value, " OriginalSet: ", originalSet);
});

console.log(
  "\n\nSi queremos guardar datos eliminando los duplicados, seria así:"
);

let arrayNumerosDuplicados = [1, 2, 5, 6, 5, 8, 5, 5, 6, 5, 4, 1, 5];

function eliminarDuplicados(array) {
  return [...new Set(array)];
}

let arraySinDuplicados = eliminarDuplicados(arrayNumerosDuplicados);

console.log("El array con duplicados es: ", arrayNumerosDuplicados);
console.log("El array sin numeros duplicados es: ", arraySinDuplicados);

console.log(`------------------------------------------------------`);

console.log(
  `\n\nMAPS - .has(), .delete(), .clear(), .size, iteraciones de datos`
);

let mapa1 = new Map();

console.log(
  "\nPara añadir datos al map, usaremos... .set(), con la key y value"
);

mapa1.set("nombre", "xtian");
mapa1.set("edad", 33);

console.log("\nContiene el mapa1, estos datos: ", mapa1);

console.log(
  "\nPara saber el tamaño del mapa1, usaremos el .size: ",
  mapa1.size
);

console.log(
  "\nPara saber si contiene un dato concreto el map, usaremos... .has()",
  "has('nombre')",
  mapa1.has("nombre")
);

mapa1.has("nombre");
mapa1.has("edad");

console.log(
  "\nPara obtener el value de una key, usaremos... .get()",
  "get('edad')",
  mapa1.get("edad")
);

console.log(
  "\nPara eliminar un value y su key, usaremos... .delete()",
  "delete('edad')"
);

mapa1.delete("edad");

console.log("Buscamos la edad, y nos da...", mapa1.get("edad"));

console.log("\nPara limpiar completamente el map, usaremos... .clear()");

mapa1.clear();

console.log("Veamos el contenido de mapa1...", mapa1);

console.log(
  "\n\nExiste el metodo forEach(), en los MAPs, un ejemplo seria el siguiente:"
);

let granja = new Map([
  ["Caballo", "🐴"],
  ["Cerdo", "🐷"],
  ["Vaca", "🐮"]
]);

granja.forEach((value, key) => {
  console.log("Key: ", key, " Value: ", value);
});

console.log(
  "\n\nExiste el metodo FOR-OF, en los MAPs es distinto a como lo muestro ahora, un ejemplo seria el siguiente:"
);

let libros = [
  { titulo: "10 negritos", autora: "Agatha Christie" },
  { titulo: "Asesinato en el orient express", autora: "Agatha Christie" },
  { titulo: "La casa Torcida", autora: "Agatha Christie" }
];

for (const libro of libros) {
  console.log("El libro: ", libro.titulo, "\nEsta escrito por: ", libro.autora);
}

console.log("\n\nEl FOR-OF para los MAPs, es distinto:");
let identidad = [
  ["Nombre", "Catwoman"],
  ["Poder", "Sigilo"]
];

for (const detalles of identidad) {
  console.log(detalles);
}

console.log(`------------------------------------------------------`);

console.log(`\n\nCLASSES`);

class Persona {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  getName() {
    console.log("Su nombre es: ", this.name);
  }

  getSurname() {
    console.log("Su apellido es: ", this.surName);
  }

  getAge() {
    console.log("Su edad es: ", this.age);
  }
}

let xtian = new Persona("xtian", "xpo", 33);

xtian.getName();
xtian.getSurname();
xtian.getAge();

class Trabajador extends Persona {
  constructor(name, surName, age, work) {
    super(name, surName, age);
    this.work = work;
  }

  getWork() {
    console.log("Su trabajo es:", this.work);
  }

  getAllDescription() {
    console.log(
      "Su nombre es:",
      this.name,
      this.surName,
      "tiene",
      this.age,
      ", y es",
      this.work
    );
  }
}

let xtianXpo = new Trabajador("Xtian", "Xpo", 33, "FrontEnd Developer");

xtianXpo.getAllDescription();
