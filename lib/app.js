"use strict";

var _Hola = require("./Hola.js");

var _Hola2 = _interopRequireDefault(_Hola);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hola = new _Hola2.default("pruebas");
console.log("hola " + hola.getNombre());
hola.setNombre("lala");
console.log("hola " + hola.nombre);