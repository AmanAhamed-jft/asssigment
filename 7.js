
var arr;
(function sieve(){
    arr=Array(100001).fill(true);
     for(let i=2;i<=10001;i++){
        if(arr[i]){
            for(let j=i*i;j<=10001;j+=i)
            arr[j]=false;
        }
     }

}());
var num=Math.floor((Math.random()*10000)+2);
console.log(arr[num],num);