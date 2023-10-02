function greet(){
    console.log("Hi There!")
}
greet()

function sqr(a){
    // console.log(a*a);
    return a*a
}

function update(a){
    a=5
    
}
// sqr(8)
let b=sqr(8)
console.log(b);

//it dosent goes by referece
// let a;
// update(a)
// console.log(a);

function add(a,b=3){
    console.log(a+b);
}
add(3)

function add2([num1,num2]){
    console.log(num1+num2);
}
let arr=[1,2,3,4];
add2(arr)



//1)jab aapka code app turant nahi chalana chaahte future mein chalaana chaahte ho
//2)jab aapka code aap reuse karna chahte ho
//3)jab aap code chalana chaahte ho har baar with different data