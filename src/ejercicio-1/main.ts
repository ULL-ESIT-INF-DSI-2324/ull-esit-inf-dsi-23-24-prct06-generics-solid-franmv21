import {Enser} from './Enser';
import {Caja} from './Caja';
import {Mudanza} from './Mudanza';

// Definir algunos enseres
const libro: Enser = { nombre: "Libro de TypeScript", pesokg: 0.7, fragil: false};
const taza: Enser = { nombre: "Taza", pesokg: 0.2, fragil: true};
const perfume: Enser = { nombre: "Acqua di Gio Profondo", pesokg: 0.25, fragil: true};

// Crear una caja y añadir enseres
const caja = new Caja<Enser>(1);
caja.agregarEnser(libro);
caja.agregarEnser(taza);
caja.agregarEnser(perfume);

// Listar los enseres en la caja
console.log(caja.listarEnseres());

// Mostrar el peso total de la caja
console.log("Peso de la caja:", caja.pesoTotal());

// Buscar un enser en la caja
const enserBuscado = caja.buscarEnser("Libro de TypeScript");
console.log(enserBuscado);

// Eliminar un enser de la caja
caja.eliminarEnser("Taza");
console.log(caja.listarEnseres());

const mudanza = new Mudanza<Enser>();
mudanza.agregarCaja(caja);
console.log(mudanza.listarCajas());
console.log("Peso total de la mudanza: ", mudanza.pesoTotalMudanza());
mudanza.eliminarCaja(0);
console.log(mudanza.listarCajas());

