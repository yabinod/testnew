let global="global variable";
function test1(){
    let local="Local variable";
    console.log(local);
    console.log(global);
}
console.log(global);
test1();