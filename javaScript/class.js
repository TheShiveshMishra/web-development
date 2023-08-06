// class product {
//     constructor(name,price,discount,code)   {
//         this.itemname = name,
//         this.price = price,
//         this.discount = discount,
//         this.itemcode = code
//     }
// }

// let pencil = new product("Pencil",40,10,110);
// console.log(pencil);

// // alternate method for declare class////////////////////////////////

// // const product_1=class{
// //     constructor(name,price,discount,code)   {
// //         this.itemname = name,
// //         this.price = price,
// //         this.discount = discount,
// //         this.itemcode = code
// //     }
// // }

// // let chair = new product_1("Chair",400,100,610);
// // console.log(chair);


// // getter and setter methods////////////////////////////////////////////////////////////

// const product_1=class{
//     constructor(name,price,discount,code)   {
//         this.itemname = name,
//         this.price = price,
//         this.discount = discount,
//         this.itemcode = code
//     }
//     get get_discount() {
//         return this.discount
//     }

//     set set_discount(value) {
//         this.discount=value
//     }

//     discount_value() {
//         return this.price*this.discount/100        
//     }
// }

// let chair = new product_1("Chair",400,100,610);
// console.log(chair);


// Extending the class //////////////////////////////////////////////////

class product {
    constructor(name)   {
        this.itemname = name
    }
    getitemname() { return this.itemname +" is a product"}
}

class furniture extends product {
    constructor(itemname) {
        super(itemname)
}
    getitemname() { return this.itemname +" is a furniture"}
}

let chair = new furniture("Chair");
let pencil = new product("pencil");