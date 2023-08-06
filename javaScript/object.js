// let product = {
//     pro_id: 11,
//     pro_name:"product",
// };

//normal method for creating object //////////////////////////////////
// const course = {
//     lecture_id: 10,
//     section:4,
//     notes: {
//         intro: "welcome to js"
//     },
//     enroll(){
//         console.log("You enrolled course");
//     }
// }

// course.enroll();
// console.log(course);

// course.prices=999;



// factory function method for creating object////////////////////////////////

// function createCourse(id){
//     return {
//         lecture_id: id,
//         enroll(){
//             console.log("You enrolled course");
//         }
//     }
//     // return course;
// }

// const course=createCourse(11);

// course.enroll();
// console.log(course);


// constructor function method for creating object////////////////////////////////

// function Course(id){
//     this.id=id;
//     this.enroll=function(){
//         console.log("you sucessfully enrolled in " + this.id + " course");
//     }
// }
// const course=new Course(12);

// course.enroll();

// function Course(id){
//     this.id=id;
//     this.enroll=function(){
//         console.log("you sucessfully enrolled in " + this.id + " course");
//     }
// }
// const course=new Course(12);

// course.enroll();
// delete(course);
// console.log(course);


//pass by value in primitive data type  //////////////////////////////////
// let number=10;
// let num=number;
// number=15;
// console.log(number);
// console.log(num);

//pass by reference in object type////////////////////////////////

// let obj={title:"java"};
// let obj2=obj;

// obj.title="c++";
// console.log(obj);
// console.log(obj2);

//pass by value in object type////////////////////////////////

// let obj={title:"java"};

// let obj2={...obj};

// obj.title="c++";

// console.log(obj);
// console.log(obj2);

// copy object with asign functions////////////////////////////////

let obj={title:"java"};
let obj1={title1:"C++"};

let obj2=Object.assign({}, obj,obj1);

console.log(obj);

console.log("obj2");
console.log(obj2);
