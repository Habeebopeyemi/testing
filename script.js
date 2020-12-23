// creating an age array
/*var year = [1990,1980,1987,2006,1999]
function arrayCalc(arr,fn){
    var resultingAge = []
    for(var i = 0;i < arr.length;i++){
       resultingAge.push(fn(arr[i]))
    }
    return resultingAge
}

// creating a call back function that calculate ages
function agecalculator(el){
    return 2020 - el
}

// creating a call back function that helps to return boolean if the resulting age is greater than 18
function isFullAge(el){
    return el >= 18
}
// checking code functionality
var age = arrayCalc(year,agecalculator)
console.log(age)
var fullAge = arrayCalc(age,isFullAge)
console.log(fullAge)

// first class functions returning function
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name+',can you please explain what UX design is')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('which course do you teach,'+name)
        }
    }else{
        return function(name){
            console.log(name+', what do you do ?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')
teacherQuestion('Alfred')
designerQuestion('jack')
designerQuestion('Mike')

// second method for calling the same function above
interviewQuestion('designer')('Rozaq')

// immediately invoke function expression(IIFE)
function game(){
    var score = Math.random() * 10
   console.log(score >= 5)
}
game()

(function () {
    var score = Math.random() * 10
   console.log(score >= 5)
})()

// console.log(score)
(function(goodLuck){
    var score = Math.random() * 10
    console.log(score >= 5 - goodLuck)
})(5)
*/

// CLOSURES

function retirement(retirementAge){
    var a = ' years left until retirement'
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66)
retirementUS(1990)

retirement(60)(1998)

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name+',can you please explain what UX design is')
        }else if(job === 'teacher'){
            console.log('which course do you teach,'+name)
        }else{
            console.log(name+', what do you do ?')
        }
    }
}
var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')
teacherQuestion('Alfred')
designerQuestion('jack')
designerQuestion('Mike')

// call,apply and bind
var john = {
    name: 'John',
    age: 24,
    job: 'teacher',
    presentation:function(format,timeOfTheDay){
        if(format === 'formal'){
            console.log('Good '+timeOfTheDay+' ladies and gentlemen, am '+this.name+',a '+this.age+' years old '+this.job)
        }else if(format === 'friendly'){
            console.log(timeOfTheDay+' dude, am '+this.age+' '+this.job+' popularly called '+this.name)
        }else{console.log(timeOfTheDay+' everyone, am by name '+this.name+'a '+this.age+' years old '+this.job)}
    }
}

var mike = {
    name: 'Mike',
    age: 43,
    job: 'designer',
}

john.presentation('formal','morning')

john.presentation.call(mike,'friendly','evening')

// john.presentation.apply(mike,['friendly','evening'])

var mikeFormal = john.presentation.bind(mike,'formal')
mikeFormal('afternoon')

// demonstrating more of what bind functio is capable of doing
var year = [1990,1980,1987,2006,1999]
function arrayCalc(arr,fn){
    var resultingAge = []
    for(var i = 0;i < arr.length;i++){
       resultingAge.push(fn(arr[i]))
    }
    return resultingAge
}

// creating a call back function that calculate ages
function agecalculator(el){
    return 2020 - el
}

// creating a call back function that helps to return boolean if the resulting age is greater than 18
function isFullAge(limit,el){
    return el >= limit
}
// checking code functionality
var age = arrayCalc(year,agecalculator)
console.log(age)
var fullAge = arrayCalc(age,isFullAge.bind(this,20))
console.log(fullAge)