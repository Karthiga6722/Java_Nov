
//printing statement 

//console.log()

console.log(10)

//two ways :

//terminal - node [file name]
//extension - code runner

//how to write the js code:

//syntax:
//variable - container to store the values

//variable_type variable_name = value
//console.log(variable_name)

var sugarbox = "sugar"
console.log(sugarbox);

//variable types

//var

var a = 10 //redeclaration 
    a = 5  //reassign
console.log(a);

//let

let b = 10 //it can't redeclare same variable type and name 
    b = 5  //reassign same variable name with diff values
console.log(b);

//const

const c = 10 //it can't redeclare
      c = 5  //it can't reassign.. it will be constant no chnages can be done
console.log(c);


//Datatypes :

//Primitive datatypes:

//string - " a@&i" 
//number -  12145 normal numbers and 12.8decimal 
var num = 10.1
console.log(num);

//boolean - true or false
var t = false
console.log(t);

//null  no values to give but have to give some values so giving null

var n = null
console.log(n);


//unidentified

let a      
console.log(a);   

//Non-primitive datatypes:

//Array - [] - collection of values and data within square brackets

var arr = ["hello","how are you","good morning"] // var arr = ["chennai", 1,23.5,true,null]
console.log(arr)                                 //console.log(arr[5])

//length : starts with 1

//index : starts with 0

//Object - {} -  collections of key and value pairs

var obj = {
    name : "karthi",
    age : 12,
    sts : "V"
}
console.log(obj);
