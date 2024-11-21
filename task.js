//Functions
//Reverse a string inside the function => "Trendnologies" => x


var str = "Trendnologies"
var rev = str.split(" ").reverse(" ").join(" ")
console.log("Trendnologies");

//function

var a="karthi"
var b=" "
for (var i=a.length-1;i>=0;i--)
{
    b +=a[i]
}console.log(b);

//Iterate 0 to 10 even numbers inside the function -->loop
//function printevennumbers(){
//  for (let i =0;i<=10;i++){
//    if(i % 2 === 0){
//      console.log(i);
//}
//}printevennumbers();
//}



//loopings
//["Mango", "apple","orange","banana","iceapple"]==>loop the array

var fruits = ["Mango", "apple","orange","banana","iceapple"]
for(var i=0; i<=fruits.length;i++){
    console.log(fruits);
}

//print the odd numbers between 20 to 30
//find maximum number of an array [10,25,67,11,98]

//if else
//check if number is odd or even

let number=11
if(15){
    console.log("Odd number");
}
else if(8){
    console.log("Even number")
}
else
{
    console.log("None")
}
//print
//if time is 9.05 am and 10.5 am , print madurai and thanjavur buses will dept

let time= 10.00
if(time>=9.05 && time<=10.05){
    console.log("Madurai and Thanjavur buses will depart");
}
else if(time>=12.10 && time<=1.10){
    console.log("Banglore and Mysore buses will depart")
}
else if(time>=3.00 && time<=4.00){
    console.log("Pondicheery and cuddalore buses will depart");
}
else{
    console.log("Local buses will depart")
}

//this

var obj={
    name:"Raj",
    age:30,
    det:function(){
        console.log(this.age);
        
    }
}
console.log(obj);
obj.det()

//sort

const arrnum = [2,1,5,7,9,4,8,3,6];
arrnum.sort((a,b)=>b-a);
console.log(arrnum);

//template or string literals

//   var a ="Mani"
//   var b = "Hi"
//   console.log(b+a+"How are you");
// //   console.log('${b} ${a}      how are you!!');

// task 1
// 1.Object => * Create a employee databse .
// *  Change the values for 2 index and 5 index
// * print the object 

// var obj = {

//     name : "Renji",
//     age  :30
// }
// var emp = {
//     name : "karthi",
//     age : 20
// }
// var emp1 = {
//     name : "Ana",
//     age : 25
// }
// var emp2 = {
//     name : "Dia",
//     age  : 35
// }
// var emp3 = {
//     name: "Kevin",
//     age : 15
// }
// var emp4 = {
//     name: "louis",
//     age : 40
// }
// obj[2].name = "rayan"
// obj[2].age  = 60
// console.log(obj[2]);

// console.log(obj.name);
// console.log(obj.age);

// 2.Object Destructuring => Create an object and destructure.

const school = {
    name : "ria",
    std  : "V",
    place : "chennai"
}
const{name,std,place}=school
console.log(name);
console.log(std);
console.log(place);

// 3.Array Destructuring =>  create an array and destructure.

// 4.Short hand property => Use short hand property .






