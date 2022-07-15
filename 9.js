//swaping two nuber without swaping
var a=19,b=16;
function swap(){
    a=a+b;
    b=a-b;
    a=a-b;
}
swap();
console.log(`a=${a}  b=${b}`)