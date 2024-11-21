
//nested array 

var ofcobj = [
    {
        name : "Vickram",
        Role : "Tester",
        prj  : 1
        },
        {
            name : "Karthi",
            Role : "team lead",
            Prj : 2
        },
    
        {
            name : "Vidula",
            Role : "Manager",
            Prj  : 3
        }
]

        ofcobj[1].name= "Ram"
        ofcobj[1].Role = "Trainer"
        console.log(ofcobj[1]);

        var keys = Object.keys(ofcobj[2])
        console.log(keys);

        var val = Object.values(ofcobj[2])
        console.log(val);

//console.log(ofcobj);

//sort //doubt

//const arrnum = [2,1,5,7,9,4,8,3,6];
//arrnum.sort((a,b)=>a-b);
//console.log(arrnum);

//split

var s = "Java script"
var spl = s.split(" ")
console.log(spl);

//join

var r = "Hello world"
var join = spl.join("")
console.log(join);

//reverse //doubt

var str = "Madurai"
var rev = str.split("").reverse().join(" ");
console.log(rev);

//slice //doubt

let birds = ["Parrot", "crow","peacock","pigeon","eagle"]
let slice = birds.slice(2,-1)
console.log(slice);

//splice

let weeks = ["Sun","Mon","tue","Thur","sat"]
weeks.splice(5,1,"wed")
console.log(weeks);

//string methods

//includes
var inc= "javascript"
var inc2=inc.includes("ri")
console.log(inc2);

//toUppercase

var up ="Vickram"
console.log(up.toUpperCase());

//toLowercase

var locase = "CHENNAI"
console.log(locase.toLowerCase());

//indexOf

var ind= "Chennai"
console.log(ind.indexOf("n"));

//lastindexOf

var lasind = "Chennai"
console.log(lasind.lastIndexOf("n"));

//length

var len="America"
console.log(len.length);

//charAt

var ch = "Javascript"
console.log(ch.charAt(5));

//replace

var rep="Hello world"
console.log(rep.replace("Hello","Welcome"));

//repeat

var rept="prani"
console.log(rept.repeat(5));

//startswith

var stwith = "Chennai"
console.log(stwith.startsWith("H"));

//endswith

var endwi = "Chennai"
console.log(endwi.endsWith("i"));

//if else
 let age =10
 if(age>=9){
    console.log("He is eligible to vote");
 }
 else{
    console.log("He is not eligible to vote");
 }

 //else if

 let mark = 70
if(mark>=100 && mark<=90){
    console.log("Garde A");
}
else if(mark>=80){
    console.log("Grade A");
}
else if(mark>=60){
    console.log("Grade C");
}
else{
    console.log("Fail");
}
 //object

 var obj = {
    name: "Karthi",
    age: 20
 }
 //obj.name="Prani"
 //obj.age=15
 console.log(obj.name);
 console.log(obj.age);

 //Object destructuring
//doubt
 //const objdes = {
   // name:"Rani",
    //age : 10,
    //dept:"IT"
 //}
 //console.log(name,age,dept);

 //setTimeout function

 setTimeout(()=>{
console.log("Hello I'm javascript");
 },3000)

 //this
//doubt
 //var obj1={
   // age:12,
    //age:13,
    //details:function (){
      //  console.log(this.age);
    //}        
    //}
    //console.log(obj1);
    //obj.details()

    //constructor

    function Bike(name,year,model){
        this.bikename=name
        this.bikeyear=year
        this.bikemodel=model
    }
    var details=new Bike("Activa",2020,"390")
    console.log(details);

    var details2=new Bike("Duke","2010","250")
    console.log(details2);

    //constructor using anonymous function

    function Student(name, year,depart){
        this.studentname=name
        this.studentyear=year
        this.studentdepart=depart
        this.studentdetails=function(){
            console.log('the student name is ${name} and the student year is ${Second year} and the student depart is ${CSE}');
        }
    }
var details=new Student("Vidula",2024,"CSE")
console.log(details);
details.studentdetails();
    
    //template literals or string literals
//doubt
   // var c="Mani"
   // var b= "Hi"
    //console.log(b+a+"How are you");
    //console.log('${b} ${c}  how are you!!');

    //class

    class school{
        constructor(name,std,rank){
            this.name=name
            this.std=std
            this.rank=rank
        }
        fulldetails(){
            console.log('the name is ${this.name} the std is ${this.std} and the rank is ${this.rank}');
            
        }
    }
        var details=new school("Vicky",10,2)
        console.log(details);
        details.fulldetails();

        //callback

        function greetings(){
            console.log("hello world");
        }
        function name(x){
            console.log("karthi");
            x()
            
        }
    name(greetings)

    //Promise

    function water(){
        return new Promise((resolve, reject) => {
             setTimeout(()=>{
            resolve("Watercan fill");
            console.log("Watercan fill");
            },3000)
    })
}
    function room(){
         return new Promise((resolve, reject) => {
           setTimeout(()=>{
            resolve("clean room");
            console.log("Clean room");
            },2000)
    })
}
    function trash(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("trashout");
            console.log("trashout");
            },500)
    })
}
    water().then(value=>{console.log(value);
        return room()}).then(value=>{console.log(value);return trash()}).then(value=>{console.log(value);console.log("Task completed");}) 


        //task

        //Wakeup at 5 Am
        //go to gym
        //go to office 

        function office(){
            return new Promise((resolve,reject)=>{
                resolve("Go to office");
            })
        }
        function home(){
            return new Promise((resolve,reject)=>{
                resolve("Wake up at 5 AM");            
        })
    }
    function workout(){
        return new Promise((resolve,reject)=>{
            resolve("go to gym");
        })
    }
    office().then(value=>{console.log(value);return home()}).then(value=>{console.log(value);return workout()}).then(value=>{console.log(value);return office()})



    



  
 












