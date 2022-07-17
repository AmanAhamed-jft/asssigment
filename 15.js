var text='React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript';
text=text.toLocaleLowerCase();
var map=new Map();
text.split(' ').forEach((val)=>{
    if(map.has(val)){
        let value=map.get(val)+1;
        map.set(val,value);
    }else
    map.set(val,1);
});
map=new Map([...map].sort((a,b)=>{
       if(a[1]>b[1])
       return -1;
       if (a[1]==b[1]){
            if(a[0]>b[0])
            return 1;
            else
            return -1;
       }
}));
console.log(map);