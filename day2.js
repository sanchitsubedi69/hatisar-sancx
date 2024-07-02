// const days = ['sunday','monday','tuesday','wednesday']
//console.log(days[2])
// days.push('thursday')
// console.log(days)
// days.pop()
// console.log(days)
// days.unshift('hello')
// days.shift()
// const data = days.slice(1,3)
// console.log(data)
// days.splice(1,1,'haha')
// console.log(days)
// const data = [1,2,3,4,5,6]
// data.splice(2,3,'hello','bye','world')
// console.log(data)
// const text = 'i am from nepal'
//output-->['i','am','from','nepal']
// const splitteddata = text.split(" ")
// console.log(splitteddata)

// const languages = ['js','php','c']
//output>['js','html','php','c']
// languages.splice(1,0,'html')
// console.log(languages)
const person = Object.freeze({
    name : "sancx",
    address : "Itahari",
    nationality : "Nepali"
})

// console.log(person.address)
// console.log(person['address'])
// person.age = 22
// person.haha = "hehe" 
// console.log(person)

const test = [
    {
        name : "manish"
    },
    {
        name : "sancx"

    }
]
 
// output-->

// [
//     {
//         name : "manish"
//     },
//     {
//         name : "sancx"
//     },
//     {
//         name : "nishay"
//     }
// ]

test.push(
    {
        name : "nishay"
    }

)
console.log(test)

//function greet(){
  //  console.log("hello sanc")
//}

//class person {
  //  name = 'sanc'
    //greet()
    //{
       // console.log("hello sanc")


    //}
//}