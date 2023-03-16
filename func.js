//.repeat()
console.log(".repeat() ->");

let yell = "owowow";
let party = yell.repeat(20);
console.log(party);

let cat = {
    meow(times){
        console.log("meow".repeat(times));
    },
    phrr(times){
        console.log("phrr".repeat(times));
    },
    snor(times){
        console.log("zzzZ".repeat(times));
    }
};

cat.meow(3);
cat.phrr(6);
cat.snor(9);

console.log("");

//Default function parameters
console.log("Default function parameters ->");

function add(x, y){
    console.log(x+y);
}

add();
add(1, 2);

function addmore(x = 5, y = 6){
    console.log(x+y);
}

addmore();
addmore(1, 2);

function haveFun (activity = "hiking", time = 3){
    console.log(`Today i will go ${activity} for ${time} hrs`)
}

haveFun();
haveFun("biking", 2.5);
haveFun("biking");

console.log("");

//Arrow Functions
console.log("Arrow Functions ->");

// =>
let std = (std) => console.log(std);
std(["A","B","C"]);

let stdlist = function (std){
    console.log(std);
}

stdlist(["A","B","C"]);

let lists = ["apple", "banana", "cherry"];
lists.map( (item) => console.log(item));

let list = ["apple", "banana", "cherry"];
list.map(function (item){
    console.log(item);
})

console.log("");

//Arrow Functions -> this
console.log("Arrow Functions (this) ->");

let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobby: function (){
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};

person.printHobby()

console.log("");

//Generators
console.log("Generators ->");

function* director() {
    yield "three";
    yield "two";
    yield "one";
    yield "action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().done);
console.log(countdown.next());
console.log(countdown.next());

console.log("");