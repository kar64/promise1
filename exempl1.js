console.log(1);
let b=true;
let c=false;
let d=true;
const pr=new Promise((res1,rej1)=>{
    setTimeout(()=>{
        if(b){
           res1('ok1');
        }else{
            rej1('end1');
        }
        
    },10)
})
.then((value1)=>{
    console.log(value1)
    return new Promise((res2,rej2)=>{
        setTimeout(()=>{
            if(c){
               res2('ok2');
            }else{
                rej2('end2');
            }
            
        },10)
    })
},(value2)=>{
    console.log(value2);
    return new Promise((res3,rej3)=>{
        setTimeout(()=>{
            if(d){
               res3('ok3');
            }else{
                rej3('end3');
            }
            
        },10)
    })
})
.then((value3)=>{
    console.log(value3);
},(value4)=>{
    console.log(value4);
})
console.log(2);
