//Object Literals
console.log("Object literals ->");

function skier1 (name, sound){
    return {
        name: console.log(`${name}`),
        sound,
        powderYell: function(){
            let yell = this.sound.toUpperCase();
            console.log(`${yell}, ${yell}`);
        }
    };
}

skier1("Sendy", "woo");
skier1("Sendy", "woo").powderYell();

console.log("");

//Object Spread
console.log("Object Spread ->");

const daytime = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingmeals = {daytime, nighttime};
console.log(backpackingmeals);

const meals = {...daytime, nighttime};
console.log(meals);

console.log("");

//Destructuring
console.log("Destructuring ->");

const vaca = {
    des: "chilie",
    traveler: 2,
    activity: "ski",
    cost: "a lot"
};

function marketing(des, activity){
    return `Come to ${des} and do some ${activity}`;
}

console.log(marketing(vaca));

const sandwich = {
    title: "reuben",
    price: 7,
    description: "A classic",
    indgrediants: [
        "bread",
        "beef",
        "dressing",
        "cheese"
    ]
};

console.log(sandwich);
console.log(sandwich.title);
console.log(sandwich.price);

const {title, price} = {
    title: "reuben",
    price: 7,
    description: "A classic",
    indgrediants: [
        "bread",
        "beef",
        "dressing",
        "cheese"
    ]
};


console.log(title);
console.log(price);

console.log("");

//for /of loop
console.log("for/of loop ->");

for (let letter of "javascript") {
    console.log(letter);
}

let topics = ["javascript", "node", "css"]
for (let topic of topics) {
    console.log(topic);
}

let sub = new Map();
sub.set("html", "/sub/html");
sub.set("css", "/sub/css");
sub.set("js", "/sub/js");

for (let s of sub){
   console.log(s);
}

for (let s of sub.keys()){
    console.log(s);
}

for (let s of sub.values()){
    console.log(`course des found at ${s}`);
}

for (let s of sub.entries()){
    console.log(s);
}

console.log("");

//classes
console.log("Classes ->");

class Vehicle {
    constructor(des, wheels){
        this.des = des;
        this.wheels = wheels;
    }

    describeYourself(){
        console.log(
            `i am a ${this.des} with ${this.wheels} wheels.`
        );
    }
}

let van = new Vehicle("van", 4);
console.log(van);
van.describeYourself();

console.log("");

//Inheritance
console.log("Inheritance (getting from classes object) ->");

class Truck extends Vehicle{
    constructor(){
        super("semi truck", 18)
    }
}

let truck = new Truck;
truck.describeYourself();

console.log("");

//Getters and Setters
console.log("Getters and Setters ->");

class Hike{
    constructor(dis, pace){
        this.dis = dis;
        this.pace = pace;
    }

    get lenofHr(){
        return `${this.calLenHr()} hrs`;
    }

    calLenHr(){
        return this.dis / this.pace;
    }
}

const mtTall = new Hike(10, 2);
console.log(mtTall.lenofHr);

let attendance = {
    _list: [],
    set addname(fullname){
        this._list.push(fullname);
    },
    get list(){
        return this._list.join(", ");
    }
}

attendance.addname = "jon doe";
console.log(attendance.list);

attendance.addname = "bill hannon";
attendance.addname = "charlie charlson";
console.log(attendance.list);

console.log("");