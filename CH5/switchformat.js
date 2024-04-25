const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('C 드라이브를 포맷하시겠습니까? ', function(ch){
    switch(ch)
    {
        case 'y':
            console.log("네, 드라이브를 포맷하겠습니다.");
            break;
        case 'n':
            console.log("아니요, 드라이브를 포맷하지 안겠습니다.");
            break;
        default:
    console.log('값이 유효하지 않습니다.');
}
rl.close();
});