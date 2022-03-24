"use strict"

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

let vasya = new Student("Vasya", "male", 25);
let masha = new Student("Masha", "female", 40);
let vova = new Student("Vova", "male", 29);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...newmarks) {
  if (this.marks === undefined) {
    this.marks = [...newmarks];
  } else {
    this.marks.push(...newmarks);
  }
};

Student.prototype.getAverage = function () {
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  const length = this.marks.length;
  return sum / length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
