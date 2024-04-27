# JavaScript and classes

# oop

## object
- collection of properties and methods
- toLowerCase

## why use OOP

# parts of  OOP
object literal

- Constuctor funtion
- Prototype
- Classes
- Instances (new,  this)

## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

 ## In JavaScript, while not explicitly having classes in the traditional sense like in languages such as Java or C++, object-oriented programming (OOP) concepts can still be implemented through prototypes and constructor functions. The four pillars of OOP, which are encapsulation, inheritance, polymorphism, and abstraction, can be applied in JavaScript. Let's explore each with examples:

## Encapsulation:
## Encapsulation refers to bundling data and methods that operate on that data within one unit, such as a class in traditional OOP. In JavaScript, you can achieve encapsulation using closures or constructor functions.
javascript
Copy code
function Person(name, age) {
    let _name = name; // private variable
    let _age = age; // private variable

    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    };

    this.setName = function(name) {
        _name = name;
    };

    this.setAge = function(age) {
        _age = age;
    };
}

let person1 = new Person("Alice", 30);
console.log(person1.getName()); // Output: Alice
console.log(person1.getAge()); // Output: 30
person1.setAge(31);
console.log(person1.getAge()); // Output: 31
Inheritance:
Inheritance allows objects to inherit properties and methods from a parent object. In JavaScript, you can achieve inheritance using prototype chaining or ES6 classes.
javascript
Copy code
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function() {
    return "Some generic sound";
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function() {
    return "Woof!";
};

let dog = new Dog("Buddy");
console.log(dog.name); // Output: Buddy
console.log(dog.makeSound()); // Output: Woof!
Polymorphism:
Polymorphism allows objects of different classes to be treated as objects of a common superclass. In JavaScript, you can achieve polymorphism through method overriding.
javascript
Copy code
class Shape {
    calculateArea() {
        // Default implementation
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let shapes = [new Rectangle(5, 10), new Circle(3)];
shapes.forEach(shape => console.log(shape.calculateArea()));
Abstraction:
Abstraction involves hiding the complex implementation details and showing only the necessary features of an object. In JavaScript, you can achieve abstraction by exposing only relevant methods and properties.
javascript
Copy code
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        // Abstract method
    }

    stop() {
        // Abstract method
    }
}

class Car extends Vehicle {
    start() {
        return `${this.make} ${this.model} starts...`;
    }

    stop() {
        return `${this.make} ${this.model} stops...`;
    }
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar.start()); // Output: Toyota Camry starts...
console.log(myCar.stop()); // Output: Toyota Camry stops...


These examples demonstrate how you can implement the four pillars of OOP in JavaScript using various techniques like constructor functions, prototypes, and ES6 classes.





