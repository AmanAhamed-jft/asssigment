var map=new Map([
        ['Developer', 5],
        ['Designer', 3],
        [ 'QA', 4],
        ['Manager',1]      
]);
var arr=[];
var newArray=[];
map.forEach((val,key)=>{
    arr.push(Array(val).fill(key));
    newArray=[...newArray, ...Array(val).fill(key)]
});
console.log(arr);
console.log(newArray);



