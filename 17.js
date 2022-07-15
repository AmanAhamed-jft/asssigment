
// Valid mobile number detection based on the following condition:
// The mobile number should have a length of 10 or more digit
// The first digit should >=6
// Can also have +91, 0, 91 as the prefix
// If the mobile number is valid output the input mobile number in the below format: 
// (+91)999-899-9891


let num='6387959740'
let prefix='';

function validPerfix(){
    if(num[0]=='+' && num[1]=='9' && num[2]=='1'){
        prefix='+91';
        return true;
    }
    if(num[0]=='9' && num[1]=='1'){
        prefix='91';
        return true;
    }
    if(num[0]=='0'){
        prefix='0';
        return true;
    }
    return false;
}

function validLength(){
    num=num.substring(prefix.length).trim();
    return num.length>=10;
}

function firstDigit(){
    return num[0]>=6;
}

if(validPerfix() && validLength() && firstDigit()){
    console.log(num);
    num=num.substring(0,3)+'-'+num.substring(3,6)+'-'+num.substring(6);
    prefix=`(${prefix})`;
    num=prefix+num;
    console.log(num);

}
else
console.log('Invalid Number');

