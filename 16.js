//reverse a string
var str='123434545546547675012394 * 1223435436565796877608'
var strArr=str.split('*');
var firstNum=strArr[0].trim();
var secondNum=strArr[1].trim();
var ans='';
function sumDigit(first,second){
    let carry=0;
    let sum='';
    let i=first.length-1,j=second.length-1
    for(i,j;i>=0 && j>=0;i--,j--){
        let a=parseInt(first[i]),b=parseInt(second[j]);
        sum=((a+b+carry)%10)+sum;
        carry=Math.floor((a+b+carry)/10);
    }
    while(i>=0){
        let a=parseInt(first[i]);
        sum=((a+carry)%10)+sum;
        carry=Math.floor((a+carry)/10);
        i--;
    }
    while(j>=0){
        let b=parseInt(second[j]);
        sum=((b+carry)%10)+sum;
        carry=Math.floor((b+carry)/10);
        j--;
    }
    if(carry!=0)
    sum=carry+sum;
    return sum;
}

function mul(){

   for(let j=secondNum.length-1,k=0;j>=0;j--,k++){
    let mulAns='';
    let carry=0;
    for(let i=firstNum.length-1;i>=0;i--){
        let digit=((firstNum[i]*secondNum[j])+carry);
        let d=((firstNum[i]*secondNum[j])+carry)%10;
        mulAns=(((firstNum[i]*secondNum[j])+carry)%10)+mulAns;
        carry= Math.floor((firstNum[i]*secondNum[j]+carry)/10); 
     }
       if(carry!=0)
       mulAns=carry+mulAns;
       if(k==0)
       ans=mulAns;
       else{
           let m=k;
           while(m--){
            mulAns=mulAns+'0';
           }
           ans=sumDigit(ans,mulAns);
       }  
   }
}
mul();
console.log(ans);

