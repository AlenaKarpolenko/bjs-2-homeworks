'use strict';

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    type = null;

    fix() {
        this.state *= 1.5;
    }

    set state(num) {
        if (num <= 0) {
            num = 0;
        } else if (num >= 100) {
            num = 100;
        }
        this._state = num;
    }

    get state() {
        if (this._state === undefined) {
            this._state = 100;
        }
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    type = 'magazine';
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
    type = 'book';
}
class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}

class Library {
    constructor(name) {
        this.name = name;
    }

    books = [];

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if (findBook == undefined) {
            return null;
        } else {
            return findBook;
        }
    }

    giveBookByName(bookName) {
        let givingBook = this.books.find(book => book.name === bookName);
        if (givingBook === undefined) {
            givingBook = null;
        }
        this.books = this.books.filter(book => book.name !== bookName);
        return givingBook;
    }
}