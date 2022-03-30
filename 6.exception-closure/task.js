'use strict'

function parseCount(parseNumber) {
    let number = Number.parseInt(parseNumber);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    }
    return number;
}

function validateCount(unParseNumber) {
    try {
        return parseCount(unParseNumber);
    } catch (error) {
        return error;
    }
}


//треугольник
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c
    }
    getArea() {
        let p = this.getPerimeter()/ 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}