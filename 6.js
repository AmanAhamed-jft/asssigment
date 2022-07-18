//third largest number
const arr=[1,10,17,8,4,3,5];

let first=arr[0],second=Number.MIN_VALUE,third=Number.MIN_VALUE;

for(let i=1;i<arr.length;i++){
    if(arr[i]>first){
        third=second;
        second=first;
        first=arr[i];
    }
    else if(arr[i]<first && second <arr[i]) {
        third=second;
        second=arr[i];
    }
    else{
         if(arr[i]>third)
         third=arr[i];
    }
}

console.log(first,second,third);