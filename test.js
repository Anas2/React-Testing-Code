const axios = require('axios');
// async function abc() {
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const jsonData = await data.json();
//     return jsonData;
// }


// axios 
async function abc() {
    let api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/todos",
    });
    let data = await api.get('/1');
    return data;
}

async function def() {
    const data = await abc();
    console.log(Cal(data.data.id + 1, 2));
    console.log(data.data);
}

function Cal(a, b) {
    return a * b;
}


def()
console.log("kkkkkkkkkkkkkkkk");


function callBackHell() {
    let fname = "M"
    setTimeout((fname) => {
        console.log(fname);
        let mname = "Anas"
        setTimeout((mname) => {
            console.log(mname);
            let lname = "Qureshi"
            setTimeout((lname) => {
                console.log(lname);
                let para = "is greate "
                setTimeout((para) => {
                    console.log(para);
                    let person = "Person"
                    setTimeout((person) => {
                        console.log(person);
                    }, 2000, person);
                }, 2000, para);
            }, 2000, lname);
        }, 2000, mname);
    }, 2000, fname);
}
callBackHell()
