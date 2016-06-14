"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var weakMap = new WeakMap();

var Hola = function () {
  function Hola(nombre) {
    _classCallCheck(this, Hola);

    var state = {};
    weakMap.set(this, state);

    state.nombre = nombre;
  }

  _createClass(Hola, [{
    key: "Nombre",
    get: function get() {
      var state = weakMap.get(this);
      return state.nombre;
    },
    set: function set(nombre) {
      var state = weakMap.get(this);
      state.nombre = nombre;
    }
  }]);

  return Hola;
}();

exports.default = Hola;