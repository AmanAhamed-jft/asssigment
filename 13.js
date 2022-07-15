var arr=[1,1,5,6,7,8,9,3,4,5,6,1,2,9,8];
var map=new Map();
arr.forEach((val)=>{
       if(!map.has(val)){
          map.set(val,1);
       }
});

arr=Array.from(map.keys());
console.log(arr);