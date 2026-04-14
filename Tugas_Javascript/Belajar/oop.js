function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person("Alice", 30, "New York");
let person2 = new Person("Bob", 25, "Los Angeles");

console.log(person1); // Output: Alice
console.log(person2);