//finding 0
var arr=[1,2,3,4,5,6,7,8,9,0];
var num;
arr.forEach((val,i)=>{
           if(val==0){
                  if(i==0){
                     num=arr[i+1]-1;
                  }else
                  num=arr[i-1]+1;
           }
});

console.log(num);