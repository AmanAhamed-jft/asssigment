let arr=[1,1,1,3,3,5,5,6];
const map=new Map()
arr.forEach((keys)=>{
     if(map.has(keys)){
        let value=map.get(keys)+1;
        map.set(keys,value);
     }else{
         map.set(keys,1);
     }
});