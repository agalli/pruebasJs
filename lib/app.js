'use strict';

var _Hola = require('./Hola.js');

var _Hola2 = _interopRequireDefault(_Hola);

var _Saludar = require('./Saludar');

var _Saludar2 = _interopRequireDefault(_Saludar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hola = new _Hola2.default("pruebas");
console.log("hola " + hola.Nombre);
hola.Nombre = "lala";
console.log("hola " + hola.nombre);
hola.nombre = "otro nombre";
console.log("hola " + hola.nombre);
console.log("hola " + hola.nombre);

var saludar = new _Saludar2.default();
console.log("saludar " + saludar.decirHola());
console.log("hola " + saludar.Nombre);