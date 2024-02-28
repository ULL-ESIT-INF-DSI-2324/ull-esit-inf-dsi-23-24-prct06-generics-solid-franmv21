import 'mocha';
import { expect } from 'chai';
import { ArithmeticableCollection } from '../src/ejercicio-pe/arithmeticable'
import { Complex } from '../src/ejercicio-pe/arithmeticable'
import { Rational } from '../src/ejercicio-pe/arithmeticable'

describe('ArithmeticableCollection test', () => {
    it('debería añadir un complejo a la colección', () => {
      const collection = new ArithmeticableCollection<Complex>();
  
      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);
  
      expect(collection.addArithmeticable(op1)).to.be.equal(op1);
      expect(collection.addArithmeticable(op2)).to.be.equal(op2);
  
    });

    it('debería añadir un racional a la colección', () => {
        const collection = new ArithmeticableCollection<Rational>();
    
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);
    
        expect(collection.addArithmeticable(op1)).to.be.equal(op1);
        expect(collection.addArithmeticable(op2)).to.be.equal(op2);
    
    });

    it('debería devolver el número de elementos de la colección de racionales', () => {
        const collection = new ArithmeticableCollection<Rational>();
    
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);

        collection.addArithmeticable(op1);
        collection.addArithmeticable(op2);

        expect(collection.getNumberOfArithmeticables()).to.equal(2);
    });

    it('debería devolver el número de elementos de la colección de complejos', () => {
        const collection = new ArithmeticableCollection<Complex>();
    
        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);

        collection.addArithmeticable(op1);
        collection.addArithmeticable(op2);

        expect(collection.getNumberOfArithmeticables()).to.equal(2);
    });

    it ('debería devolver el elemento de la colección indicado', () => {
        const collection = new ArithmeticableCollection<Complex>();

        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);

        collection.addArithmeticable(op1);
        collection.addArithmeticable(op2);

        expect(collection.getArithmeticable(1)).to.equal(op2);
    
    });
});

describe('Rational test', () => {
    it('debería sumar dos números racionales', () => {
  
      const op1 = new Rational(1, 2);
      const op2 = new Rational(3, 4);
  
      expect(op1.add(op2)).to.be.deep.equal(new Rational(10, 8));
  
    });

    it('debería restar dos números racionales', () => {
  
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);
    
        expect(op1.substract(op2)).to.be.deep.equal(new Rational(-2, 8));
    
    });

    it('debería multiplicar dos números racionales', () => {
  
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);
    
        expect(op1.multiply(op2)).to.be.deep.equal(new Rational(3, 8));
    
    });

    it('debería dividir dos números racionales', () => {
  
        const op1 = new Rational(1, 2);
        const op2 = new Rational(3, 4);
    
        expect(op1.divide(op2)).to.be.deep.equal(new Rational(4, 6));
    
    });
});

describe('Complex test', () => {
    it('debería sumar dos números complejos', () => {
  
      const op1 = new Complex(1, 2);
      const op2 = new Complex(3, 4);
  
      expect(op1.add(op2)).to.be.deep.equal(new Complex(4, 6));
  
    });

    it('debería restas dos números complejos', () => {
  
        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);
    
        expect(op1.substract(op2)).to.be.deep.equal(new Complex(-2, -2));
    
    });

    it('debería multiplicar dos números complejos', () => {
  
        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);
    
        expect(op1.multiply(op2)).to.be.deep.equal(new Complex(-5, 10));
    
    });

    it('debería dividir dos números complejos', () => {
  
        const op1 = new Complex(1, 2);
        const op2 = new Complex(3, 4);
    
        expect(op1.divide(op2)).to.be.deep.equal(new Complex(0.44, 0.08));
    
    });
});