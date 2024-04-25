function plus(a, b)
{
    return (a +b);
}
var result = plus(10,20);
console.log('두 수의 합: '+ result);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkAge(age){
    if (age >19){
        return true;
    }else{
        return false;
    }
}

rl.question("나이를 입력하세요 : ", function (nail){
    if (checkAge(nail)){
        console.log("입장 가능합니다.");
    }
    rl.close();
});

function Week()
{
    console.log('mon');
    console.log('tue');
    console.log('wed');
    return;
    console.log('thr');
    console.log('fri');
    console.log('sat');
    console.log('sun');
}
console.log(Week() === undefined);