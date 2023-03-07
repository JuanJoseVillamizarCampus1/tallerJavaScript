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

//3.
/*
a. Establezca el valor de 'idioma' en el idioma que se
habla donde vive.
b. Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const.
c. observe lo que sucede.*/

idioma = "Español";
console.log("Imprimiendo idioma ya estando definida",idioma)

console.log("Al intentar redefinir una variable const observamos que nos sale un error ya que este tipo de variables con const no se pueden redefinir")


/*
4.
a.
Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad?
b.
Aumente la población de su país en 1M y registre el resultado
en la consola
c.
Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia?
d.
La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio?
e.
Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés.
*/

//A
let dividiendoPais = habitantesDeColombia/2;

console.log("Si mi pais se dividiera a la mitad cada mitad tendra: ",dividiendoPais);

//B
aumentandoPoblacion=habitantesDeColombia+1000000;
console.log("Si aumento la poblacion de mi pais en un 1M quedarian",aumentandoPoblacion," Perosnas.");

//C
let finlandia = 6000000;
let comparandoPoblacion = habitantesDeColombia<finlandia;
console.log("Finlandia tiene mas personas que Colombia?",comparandoPoblacion);

//D
let poblacionPromedio = 33000000;
comparandoPoblacion = habitantesDeColombia>poblacionPromedio;
console.log("¿Colombia tiene mas poblacion que la poblacion promedio?",comparandoPoblacion);

//E
let descripción= "Colombia está en América, y Bucaramanga que está en el departamento de 3000 personas hablan inglés."


