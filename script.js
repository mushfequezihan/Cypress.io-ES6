//template strings examples instead of regular concat
console.log("template strings ->");

function print(firstName){
    console.log(`Hello ${firstName}`);
}

print("zihan");

function createEmail(firstName, price){
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: ${price}
    Shipping: ${shipping}
    Grand Total: $${price + shipping}
    `);
}

createEmail("Guy", 100);

console.log("");

//searching strings
console.log("searching strings ->");

const planet = "Earthartart";
console.log(planet.startsWith("Ear"));
console.log(planet.includes("h"));
console.log(planet.includes("Earth1"));
console.log(planet.includes("art"));
console.log(planet.search("art"));

console.log("");

//symbols
console.log("Symbols ->");

const id = Symbol();

const courseinfo = {
    title: "JavaScript",
    topics: ["strings", "arrays", "objects"],
    id: "js-course"
};

courseinfo[id] = 41234;
console.log(courseinfo);

console.log("");

//Maps
console.log("Maps ->");

let course = new Map();

course.set("react", {des: "ui"});
course.set("jest", {des: "test"});

console.log(course);
console.log(course.react);
console.log(course.get("react"));

let details = new Map([
    [new Date(), "today"],
    [2, {javascript: ["js", "node", "react"]}],
    ["items", [1,2]]
]);

console.log(details.size);
console.log(details);

details.forEach(function (items){
    console.log(items)
});

console.log("");

//Sets
console.log("Sets ->");

let books = new Set();
books.add("Pride and prejudice");
books.add("War and Peace").add("Oliver twist");

console.log(books);
console.log(books.size);

console.log("has Oliver twist -> ", books.has("Oliver twist"));

books.delete("Oliver twist");
console.log(books);

books.add("War and Peace");
console.log(books);

books.forEach(function (item){
    console.log(item);
});

console.log("");

//Spread Operator
console.log("Spread Operator ->");

// ...

let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

let animals = ["Smoky", "Mira", "Swimmy", cats, dogs];
console.log(animals);

let animal = ["Smoky", "Mira", "Swimmy", ...cats, ...dogs];
console.log(animal);

console.log("");

//Destructuring
console.log("Destructuring ->");

let citis = ["Spokane", "Boston", "Los angels", "Seattle", "portland"];
console.log(citis[0]);

let [first,sec, , , fifth] = ["Spokane", "Boston", "Los angels", "Seattle", "portland"];
console.log(first);
console.log(sec);
console.log(fifth);

console.log("");

//.includes()
console.log(".includes() ->");

let cities = ["Spokane", "Boston", "Los angels", "Seattle", "portland"];

console.log(cities.includes("Boston"));
console.log(cities.includes("Santa Barbara"));

console.log("");

