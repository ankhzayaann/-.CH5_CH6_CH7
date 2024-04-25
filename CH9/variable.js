//#100
function myTest()
{
    if(true)
    {
        var x = 100;
    }
    console.log(x);
}
myTest();
//#x is not defined
function myTest()
{
    if(true)
    {
        let  x = 100;
    }
    console.log(x);
}
myTest();
//#assignment to constant variable
function myTest()
{
    if(true)
    {
    const x = 100;
    x =200;
   }
}   
myTest();