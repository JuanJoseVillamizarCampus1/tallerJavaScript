/*1.
a. Declarar variables llamadas 'continente', 'país',
'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
valores de cantidad de habitantes, de acuerdo con su contexto
real en su propio país.
b. Registre sus valores en la consola.*/

//A
const continente = "America";
const pais = "Colombia";
const departamento = "Santander";
const ciudad ="Giron";
const barrio = "Rio Prado";
const direccion = "Calle 11b # 20-25";

let habitantesDeAmerica = "1.002 miles de millones (2016)";
let habitantesDeColombia = 51049000;
let habitantesDeSantander = 2340657;
let habitantesDeCiudad = 154580;


//B
console.log("La cantidad de habitantes de",continente, "es: ",habitantesDeAmerica);
console.log("La cantidad de habitantes de",pais,"es: ",habitantesDeColombia);
console.log("La cantidad de habitantes de",departamento,"es: ",habitantesDeSantander);
console.log("La cantidad de habitantes de",ciudad,"es: ",habitantesDeCiudad);
console.log("El barrio es ", barrio);
console.log("La direccion es ",direccion);


//2
console.log("----------2----------")
/*a. Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía.
b. Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma'*/

//A
let esTercerMundista = true;
let idioma;

//B
console.log("Imprimiendo la variable idioma", idioma)
console.log("¿Es ",pais , "un pais tercermundiasta?",esTercerMundista);
