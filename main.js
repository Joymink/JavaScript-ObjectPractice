//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function ParseThru(thing){
    for (const [key, value] of Object.entries(thing)) {
        
        if(value == "[object Object]"){
            console.log(key+ ":")
            for (const [key2, value2] of Object.entries(value[0])) {
                console.log(key2 +":" + value2)
            }
        }
        else{
            console.log(key + ":" + value)
        }
    }
   
}
ParseThru(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age=age;

    this.printInfo = ()=>{
        console.log(`Name: ${this.name}\nAge: ${this.age}\n`)
    }
    this.addAge = num=>{
        num++
        this.age=num
        return num
    }

}

let jayden = new Person('Jayden',22);
let keylen = new Person('Keylen',29);
jayden.printInfo()
keylen.printInfo()
jayden.addAge(jayden.age)
jayden.addAge(jayden.age)
jayden.addAge(jayden.age)
jayden.printInfo()

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkLength = (word) =>{
    return new Promise((resolve, reject)=>{
        if(word.length > 10){
            resolve(true)
        }
        else{
            reject(false)
        }
    })
}
checkLength("Suus")

.then ((result) =>{
    console.log('Big Word')
})

.catch((error)=>{
    console.log('Small Number')
})