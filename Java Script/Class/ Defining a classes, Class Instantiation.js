class Product{
    //properties->variables->data members
    name;
    id;
    price;

    //behaviours -> functions -> member functions
    display(){
        console.log("displaying the current product");
    }
}

const p=new Product();
console.log(p);
p.display();