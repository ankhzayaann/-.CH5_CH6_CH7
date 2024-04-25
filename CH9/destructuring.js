

let user = {
    id : 'jamsuham',
    pq : '1234',
    name : '점수함',
    age : 30,
};

let {id, ...rest} = user;


console.log(id);
console.log(rest.pw);
console.log(rest.name);
console.log(rest.age);