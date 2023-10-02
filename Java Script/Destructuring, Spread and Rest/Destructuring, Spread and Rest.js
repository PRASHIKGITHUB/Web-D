const oneArray=[1,2,3,4]
const twoArray=[5,6,7,8]
const combine=oneArray.concat(twoArray)
console.log(combine);

const threeArray=[oneArray,twoArray]
console.log(threeArray); //array of array

const threeArray1=[...oneArray,...twoArray] //spread operator
console.log(threeArray1);

//how to get arguments which is passed to a function
function manyArguments(){
    let args=Array.from(arguments)
    let finalArray=args.map(e=>e)
    console.log(finalArray)
}

manyArguments(1,2,3,4)
manyArguments(1,2,3,4,5,6,7,8,9)