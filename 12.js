//occurance of array element
var arr=[1,1,1,1,2,2,2,4,4,5,5,9];
var map=new Map();
arr.forEach((val)=>{
       if(map.has(val)){
        let value=map.get(val)+1;
        map.set(val,value);
       }else{
          map.set(val,1);
       }
});

console.log(map);