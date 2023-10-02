console.log("prashik")
console.log(this)
let a="prashik is the"
console.log(a)
let names=["prashik","true","false",2,3,false]
// anything can be put in the array
const temp=3
let highScore=300
let name2="300";
console.log(highScore)
console.log(3/7);
console.log("My name is ",a);
console.log(temp==a);
console.log(name2==highScore);
console.log(name2===highScore); //it will compare type of data too
if (highScore>250) {
    console.log("high score");
}
else{
    console.log("better luck next time");
}
for(let x=0;x<5;x++){
    console.log(x);
}
let bool=true;
bool? console.log("true"):console.log("false")

// Arrays
let arr=[1,2,"else","id"]
console.log(arr);

let b=new Array()
console.log(b);
let c=new Array(3)
console.log(c);
let d=new Array(3,4,"hello")
console.log(d);
console.log(d[2]);
d.push(4,5);
console.log(d);
d.pop(); //it returns the value which is poped
d.shift()//it returns the value which is poped from front
console.log(d) 
d.unshift(69)
console.log(d)


let a1=[1,2,3]
let a2=[4,5,6]
let a3=a1.concat(a2)
console.log(a3);
console.log(a1,a2,a3);

let s=a3.join(" ")
console.log(s);

a3.reverse();
console.log(a3);

console.log(a3.indexOf(3));

let arr1=[1,2,3,4,5,6]
console.log(arr1.slice(1,3)); //starting,end-1

arr1.splice(2,0,69); //(index,kitne element delete krne hai,kya dalna hai)
console.log(arr1);

console.log(2**3);