let arr=[1,2,3,4,5,6]
console.log(arr);

//modifying from back of the array
arr.push(1)
console.log(arr);
let m=arr.pop()
console.log(m);
console.log(arr);

//modyfying from the front of the array
let l=arr.shift()
console.log(l);
console.log(arr);
arr.unshift(69)
console.log(arr);

//array ko jodna
let arr1=[1,2,3]
let arr2=[4,5,6,7]
let arr3=arr1.concat(arr2)
console.log(arr1,arr2,arr3);

//array lo string bnana
let s=arr3.join("@")
console.log(s);

//reverse the array
arr3.reverse()
console.log(arr3);

//How to find index of any element present in array
let a=[1,2,3,4,5]
console.log(a.indexOf(3));

//How to slice an array
let b=[9,0,8,90]
console.log(b.slice(1,3));