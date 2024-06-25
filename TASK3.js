const input25=document.querySelector('#input3');
let number=['1','2','3','4','5','6','7','8','9'];
let num =0;
function tashkhis2(){
    if(input25.value.length === 5){
        marhale2()
        
    }else{
        console.log("false")
    }
};

function marhale2(){
    for(let input26 of input25.value){
        if(number.includes(input26)){
        num++
        }
    }
    if(num ===5){
        console.log('true')
    }else{
        console.log('false')
    }
}