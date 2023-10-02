const powerTwo=(n)=>{
    return n**2;
}

function powerCube(powerTwo,n){
    return powerTwo(n)*n;
}

console.log(powerCube(powerTwo,3));

function sayHello() {
    return ()=>{
        console.log("hello Prashik");
    }
}

let temp=sayHello() //temp will contain anonymous function 
console.log(temp);
temp();//since temp contain function it can be run


const higherOrder=(n)=>{
    const oneFun=(m)=>{
        const twoFun=(o)=>{
            return m+n+o;
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(2)(4)(5));