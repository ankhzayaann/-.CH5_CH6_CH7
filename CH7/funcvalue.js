var userName = '이창현'; //전역변수
var userPW ='111'; //전역변수

function account(userId , userpw)
{
    console.log(userId);
    console.log(userPW);
    var savedName ='이창현';
    var savedPw = '1111';

    if(userId == savedName)
    {
       if(userpw == savedPw)
       {
        console.log('반갑습니다.' + userId +'님');
       }
    }
}
account(userName, userPW)