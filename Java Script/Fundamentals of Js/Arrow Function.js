const square=(x)=>x*x;
console.log(square(8));

const temp=(x,y)=>x+y
console.log(temp(4,5));

const sum=(x,y)=>{
    console.log("Adding ${x} and ${y}");
    return x+y;
}
console.log(sum(8,0));

const sumAndDifference=(x,y)=>({sum:x+y,difference:x-y})
console.log(sumAndDifference(4,5));