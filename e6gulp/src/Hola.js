let weakMap = new WeakMap();

export default class Hola{
  constructor(nombre){
    let state = {};
    weakMap.set(this, state);

    state.nombre=nombre;
  }
  get Nombre(){
    let state = weakMap.get(this);
    return state.nombre;
  }
  set Nombre(nombre){
    let state = weakMap.get(this);
    state.nombre = nombre;
  }
  
}