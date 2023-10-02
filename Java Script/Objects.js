let obj={id:101,name:"Alex",salary:10000}
let emp=new Object();
emp.id=456
emp.name="hello"
emp.salary=15000;
console.log(emp);



function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
let e=new Emp(23,"amy",12000);
console.log(e);
console.log(e.name);
delete e.salary
console.log(e);



let Employee={
    id:23,
    name:"hello",
    age:22
};
let keys=Object.keys(Employee);
console.log(keys);
let value=Object.values(Employee)
console.log(value);
let entries=Object.entries(Employee)
console.log(entries);
Employee.sex="male"; //you can add new key values too
console.log(Employee) 



// Object.freeze(Employee); //you can't add delete modify any key values
// Employee.id=100;
// console.log(Employee);

Object.seal(Employee); //you can't add delete but modify
Employee.id=100;
console.log(Employee);

//copy object and can add new keys
let o=Object.assign({X:12},Employee)
console.log(o);