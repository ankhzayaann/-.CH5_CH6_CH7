const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("다이쓰! 무조건 천원, 상품입력?", function (obj){
    let basket = {
        [obj]: "1000원",
    }
    console.log(basket[obj]);
    rl.close();
});


let user ={
    id : "jamsu",
    pw : "1111",
    name : "Ich",
    mobile : "010-4477-0000",
    country : "Korea"
}

for(let info in user){
    console.log(`${info}: ${user[info]}`);
}