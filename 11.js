//duplicate char in array
var str='amanshahahamed';
var strArray=str.split('');
var map=new Map();
var set=new Set();

strArray.forEach((val)=>{
       if(map.has(val))
       set.add(val);
       else
       map.set(val,1);
});
console.log(set);