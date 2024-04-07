class Product{
    //properties->variables->data members
    name;
    id;
    price;
    //eventhough name id price is commented construcor will assign values to an object
    constructor(n,p,r){
        console.log("constructor called");
        this.name=n;
        this.id=p;
        this.price=r;
        // return 10; if your are returning primitive then it will be avoided in constructor
        return {x:10,y:0}
    }

    //behaviours -> functions -> member functions
    display(){
        console.log("displaying the current product");
        console.log(this);
        console.log(this.name,this.id,this.price);
    }
}

const p=new Product("prashik",20,1000); //new creates an empty plane object
console.log(p);
p.display();