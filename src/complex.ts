class Complex {
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(obj: Complex): Complex {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }

    subtract(obj: Complex): Complex {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }

    abs(): number {

        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    toString() {
        return "Rzeczywista " + this.real + " urojona " + this.imaginary;
    }

}

let com = new Complex(3,4);
let com2 = new Complex(2,3);
let addResult = com.add(com2);
let subtractResult = com.subtract(com2);
let absResult = com.abs();




console.log(addResult);
console.log(subtractResult);
console.log(absResult);
console.log(com.toString());