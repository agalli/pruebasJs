import Hola from './Hola.js';
import Saludar from './Saludar';

var hola=new Hola("pruebas");
console.log("hola "+hola.Nombre);
hola.Nombre="lala";
console.log("hola "+hola.nombre);
hola.nombre="otro nombre";
console.log("hola "+hola.nombre);
console.log("hola "+hola.nombre);

var saludar=new Saludar();
console.log("saludar "+saludar.decirHola());
console.log("hola "+saludar.Nombre);