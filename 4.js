//check a number is palindrome

function palindrome(num){
    let revNum=0;
    while(num>0){
      let rem=num%10;
      revNum=revNum*10+rem;
      num=Math.floor(num/10);
    }
    return revNum;
}

var num=1991;
if(num==palindrome(num))
console.log('it is palindrome');
else
console.log('Not a Palindrome');