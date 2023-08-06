// object creation 
let product={
    itemName: "chair",
    price:999,
    discount:10,
    itemCode: 111,
};
console.log("normal product");
console.log(product);

// factory function
function createProduct(name, pr, dis, iC){
    return{
        itemName: name,
        price: pr,
        discount: dis,
        itemCode: iC,
    }
}

const flower=createProduct("flower",300,50,112);
console.log("Factory function product");
console.log(flower);

// constructor function
function Product(name, price, discount, itemCode){
    this.itemName=name,
    this.price=price,
    this.discount=discount,
    this.itemCode=itemCode,
    this.discount_value=function(){
        d=discount*price/100;
        console.log(d);
    }
}

const football=new Product("football",400,50,115);
console.log("constructor function product");
console.log(football);
football.discount_value();
