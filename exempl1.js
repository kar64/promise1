console.log(1);
let b=true;
const pr=new Promise((res,rej)=>{
    setTimeout(()=>{
        if(b){
           res('ok');
        }else{
            rej('end');
        }
        
    },10)
}).then((value1)=>{
    console.log(value1)
},(value2)=>{
    console.log(value2);
})
console.log(2);