//Building promises
console.log("Building Promises ->");

const delayWithReject = (seconds) =>
    new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(
                new Error("seconds must be a number")
            );
        }

        setTimeout(resolve, seconds * 1000);
    }

    );

console.log("zero sec");

// run below independently so that rest of the code does not interfere with dealy and loading
//delayWithReject("one").then(() => console.log("one sec"));
//delayWithReject(2).then(() => console.log("five sec"));
//delayWithReject(1).then(() => console.log("one sec"));

console.log("");

//Loading remote data with promises (Boiler plate - old style)
console.log("Loading remote data with promises (Boiler plate - old style) ->");

const spacepeople = () => {
    return new Promise((resolves, rejects) => {
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                rejects(Error(request.statusText));
            }
        };
        request.onerror = (err) => rejects(err);
        request.send();
    });
};

spacepeople().then(
    (spaceData) => console.log(spaceData),
    (err) => console.error(new Error("Cant load people!"))
);

console.log("");

//returning promises with fetch() - avoiding boiler plate OLD style -> 
console.log("returning promises with fetch() - avoiding boiler plate OLD style -> ");

let getSpacepeople = () =>
    fetch("http://api.open-notify.org/astros.json")
        .then((res) => res.json());

let spaceNames = () =>
    getSpacepeople()
        .then((json) => json.people)
        .then((people) => people.map((p) => p.name))
        .then(names => names.join(", "));

spaceNames().then(console.log);

console.log("");

//Async function/ Await keyword -> 
console.log("Async function/ Await keyword -> ");

const delay = (seconds) =>
    new Promise((resolves) =>
        setTimeout(resolves, seconds * 1000)
    );

delay(2).then(console.log("delay 2 sec"));

const countToFive = async () => {
    console.log("zero sec");
    await delay(1);
    console.log("1 sec");
    await delay(2);
    console.log("2 sec");
    await delay(3);
    console.log("3 sec");
}

countToFive();

console.log("");

//Async function/ Await with fetch -> 
console.log("Async function/ Await with fetch -> ");

const githubreq = async (login) => {
    let response = await fetch(`https://api.github.com/users/${login}`);

    //with fetch we need to convert response to json
    let json = await response.json();

    let summary = `${json.name}, ${json.company}`
    console.log(summary)
};

githubreq("mushfequezihan");
githubreq("eveporcello");

console.log("");