let arr= [2, "a", 4, "d", 3, "a", "c", "e", 5, 1];
let sortedArray=arr.sort((a,b)=>{
       if( (isNaN(a)&& !isNaN(b)) ){
             return 1;
       }
       if( ((isNaN(b) && !isNaN(a))) ){
           return -1;
       }
        else {
        if(a>b)
        return 1;
        else
        return -1;
    }
});

console.log(sortedArray);


