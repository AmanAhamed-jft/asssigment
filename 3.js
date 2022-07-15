//reverse a string
var str='my name is aman shah ahamed';
var newstr=[];
str.split(' ').forEach((obj)=>{
    newstr.push(obj.split('').reverse().join(''));
});
console.log(newstr.join(' '));