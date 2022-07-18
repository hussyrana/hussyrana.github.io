String.prototype.filter = function (arr) {
  let final = this.split(" ").reduce((acc, el) => {
    if (arr.includes(el)) {
      return acc;
    } else {
      return acc.concat(el) + " ";
    }
  }, "");
  return final.trimEnd();
};

console.log("This house is not nice!".filter(["not"]));

Array.prototype.bubbleSort = function () {
  let arr = this.concat();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

function Person(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}
let teacher = new Person("hassan", "ali");
teacher.teach = function (subject) {
  console.log(this.fName + " is teaching " + subject);
};
teacher.teach("math");

const person1 = {
  first: "jgj",
  last: "ghg",
};

const tcher = Object.create(person1);
console.log(tcher);
tcher.first = "hassan";
tcher.last = "ali";
tcher.teach = function (subject) {
  console.log(this.first + " is teaching " + subject);
};
tcher.teach("math");

const person2 = {
  name: "",
  age: 0,
  greeting() {
    console.log(
      `Greetings, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
  solute() {
    console.log(
      "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
    );
  },
};

const student = Object.create(person2);
student.major = "JavaScript";
student.name = "hassan";
student.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
};

const professor = Object.create(person2);
professor.name = "ali";
professor.age = 29;
professor.department = "CS";
professor.greeting = function () {
  console.log(
    `Good day,my name is ${this.name} and I am in the ${this.department} department.`
  );
};
student.greeting();
student.solute();
professor.greeting();
professor.solute();

function person(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = () => {
    console.log(
      `Greetings, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
  this.solute = () => {
    console.log(
      "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
    );
  };
}

const student = new person("hassan", 26);
student.major = "JavaScript";
student.greeting = function () {
  console.log(`Hey, my name is ${this.name} and I am studying ${this.major}`);
};

const professor = new person("ali", 29);
professor.department = "CS";
professor.greeting = function () {
  console.log(
    `Good day,my name is ${this.name} and I am in the ${this.department} department.`
  );
};
student.greeting();
student.solute();
professor.greeting();
professor.solute();
