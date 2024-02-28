export interface Arithmeticable<T> {
    add(op: T): T;
    substract(op: T): T;
    multiply(op: T): T;
    divide(op: T): T;
}

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    private elements: T[] = [];
  
    addArithmeticable(op: T): T {
      this.elements.push(op);
      return op;
    }
  
    getArithmeticable(index: number) {
        return this.elements[index];
    }
  
    getNumberOfArithmeticables(): number {
      return this.elements.length;
    }  
}

export class Complex implements Arithmeticable<Complex> {
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(op: Complex): Complex {
      return new Complex(this.real + op.real, this.imaginary + op.imaginary);
    }

    substract(op: Complex): Complex {
        return new Complex(this.real - op.real, this.imaginary - op.imaginary);
    }

    multiply(op: Complex): Complex {
        return new Complex(this.real * op.real - this.imaginary * op.imaginary, this.real * op.imaginary + this.imaginary * op.real);
    }

    divide(op: Complex): Complex {
        return new Complex((this.real * op.real + this.imaginary * op.imaginary) / (Math.pow(op.real, 2) + Math.pow(op.imaginary, 2)), (this.imaginary * op.real - this.real * op.imaginary) / (Math.pow(op.real, 2) + Math.pow(op.imaginary, 2)))
    }
}

export class Rational implements Arithmeticable<Rational> {
    private num: number;
    private den: number;

    constructor(num: number, den: number){
        this.num = num;
        this.den = den;
    }

    add(op: Rational): Rational {
        return new Rational(this.num * op.den + this.den * op.num, this.den * op.den);
    }

    substract(op: Rational): Rational {
        return new Rational(this.num * op.den - this.den * op.num, this.den * op.den);
    }

    multiply(op: Rational): Rational {
        return new Rational(this.num * op.num, this.den * op.den);
    }

    divide(op: Rational): Rational {
        return new Rational(this.num * op.den, this.den * op.num);
    }
}