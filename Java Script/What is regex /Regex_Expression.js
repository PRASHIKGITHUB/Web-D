let pattern='pw'

let regExOne=new RegExp(pattern)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)

let regExThree=/pw/gi //gi isnt case sensitive

const stringToCheck='pW is growing at a rapid speed and recently they are working on Pw skills to create skill based pwcontent'

const result=regExThree.test(stringToCheck) //return bool
const result2=regExTwo.test(stringToCheck) //return bool
console.log(result);
console.log(result2);

const anotherResult=stringToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult=stringToCheck.replace(regExThree,'p-w') //it will replace pw with p-w
console.log(oneMoreResult);

const WebUrl="https://pwSkills.com/prashik%20bahadure.com"
// const usableUrl=WebUrl.replace(/%20/,'-')
const usableUrl=WebUrl.replace(/%\d0/,'-') //\d denotes any interger number
console.log(usableUrl);


// regxr.com for further practising