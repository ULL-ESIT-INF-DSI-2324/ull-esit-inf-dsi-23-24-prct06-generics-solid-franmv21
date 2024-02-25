import 'mocha';
import {expect} from 'chai';
import {Enser} from '../src/ejercicio-1/Enser';
import {Caja} from '../src/ejercicio-1/Caja';
import {Mudanza} from '../src/ejercicio-1/Mudanza';

describe('Ejercicio 1 - Pruebas de Caja y Mudanza', () => {
  // Definir algunos enseres
  const libro: Enser = { nombre: "Libro de TypeScript", pesokg: 0.7, fragil: false};
  const taza: Enser = { nombre: "Taza", pesokg: 0.2, fragil: true};
  const perfume: Enser = { nombre: "Acqua di Gio Profondo", pesokg: 0.25, fragil: true};
  let caja: Caja<Enser>;
  let mudanza: Mudanza<Enser>;

  beforeEach(() => {
    caja = new Caja<Enser>(1);
    mudanza = new Mudanza<Enser>();
  });
  

  it('Caja - Agregar enseres', () => {
    caja.agregarEnser(libro);
    caja.agregarEnser(taza);
    caja.agregarEnser(perfume);
    expect(caja.cantidadEnseres()).to.equal(3);
  });

  it('Caja - Buscar enseres', () => {
    caja.agregarEnser(libro);
    caja.agregarEnser(taza);
    caja.agregarEnser(perfume);
    const enserBuscado = caja.buscarEnser("Libro de TypeScript");
    expect(enserBuscado).to.equal("Enser encontrado: Libro de TypeScript");
  });

  it('Caja - Enser no encontrado', () => {
    caja.agregarEnser(taza);
    caja.agregarEnser(perfume);
    const enserBuscado = caja.buscarEnser("Libro de TypeScript");
    expect(enserBuscado).to.equal("Enser no encontrado");
  });

  it('Caja - Eliminar enseres', () => {
    caja.agregarEnser(libro);
    caja.agregarEnser(taza);
    caja.agregarEnser(perfume);
    caja.eliminarEnser("Taza");
    expect(caja.cantidadEnseres()).to.equal(2);
  });

  it('Caja - Peso total', () => {
        caja.agregarEnser(libro);
        caja.agregarEnser(taza);
        caja.agregarEnser(perfume);
        expect(caja.pesoTotal()).to.equal(1.15);
  });

  it('Caja - Listar enseres', () => {
    caja.agregarEnser(libro);
    caja.agregarEnser(taza);
    caja.agregarEnser(perfume);
    const output = caja.listarEnseres();
    expect(output).to.equal("Contenidos de la caja:\nLibro de TypeScript: 0.7kg, no frágil\nTaza: 0.2kg, frágil\nAcqua di Gio Profondo: 0.25kg, frágil\n");

  });

  it('Caja - Listar caja sin enseres', () => {
        const output = caja.listarEnseres();
        expect(output).to.equal("La caja está vacía.");
  });

  it('Mudanza - Agregar y eliminar cajas', () => {
    mudanza.agregarCaja(caja);
    expect(mudanza.cantidadCajas()).to.equal(1);
    mudanza.eliminarCaja(0);
    expect(mudanza.cantidadCajas()).to.equal(0);
    expect(() => mudanza.eliminarCaja(0)).to.throw("Índice de caja fuera de rango.");
  });

  it('Mudanza - Peso total', () => {
        caja.agregarEnser(libro);
        caja.agregarEnser(taza);
        caja.agregarEnser(perfume);
        mudanza.agregarCaja(caja);
        expect(mudanza.pesoTotalMudanza()).to.equal(1.15);
  });

  it('Mudanza - Listar cajas', () => {
        caja.agregarEnser(libro);
        caja.agregarEnser(taza);
        caja.agregarEnser(perfume);
        mudanza.agregarCaja(caja);
        const output = mudanza.listarCajas();
        expect(output).to.equal("[Caja 1]\nContenidos de la caja:\nLibro de TypeScript: 0.7kg, no frágil\nTaza: 0.2kg, frágil\nAcqua di Gio Profondo: 0.25kg, frágil");
  });

  it('Mudanza - Listar cajas vacías', () => {
        const output = mudanza.listarCajas();
        expect(output).to.equal("No hay cajas.");
  });
});