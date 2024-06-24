const input24=document.querySelector('#input2');
const capital=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function tashkhis(){
    let counter=0;
    for(let input23 of input24.value ) {
        if(capital.includes(input23)){
            counter++
        }
    }
    console.log(counter)
}