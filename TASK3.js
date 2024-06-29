function tashkhis (exe){
    let tool=exe.length;
const regex= /[0-9]{5}/;
let regex2= regex.test(exe);
if(tool ==5&& regex2== true){
    console.log('true');
}else{
    console.log ('false')
}
};