// const isRaining = true
// if(isRaining){
//     console.log("carry umbrella")

// }
//  else{
//     console.log("Dont carry umbrella")
//  }
//ternary operator
// const result = isRaining ? "carry umbrella" : "Dont carry Umbrella"
// console.log(result)

//short circuit
// isRaining && console.log("carry umbrella")




// const age = "21"
// if(age == 21)//(age === 21)
//     {
//         console.log("Age equals 21")

//     }else{
//         console.log("Age is not equal to 21")
//     }
// const temperature = 27
// if(temperature > 30){
//     console.log("Hot")

// }else  if (temperature > 20)
//     {console.log("Moderate")
//     }
//     else{
//         console.log("cool")
//     }

    // const grade = 70
    // output
    // 80-90-->console.log("A")
    // 70-80--> console.log("B+")
    // 60-80--> loconsole.g("B")
    // 0-60--> console.log("Fail")
// if(grade > 80 && grade  < 90){
//     console.log("A")
// }
// else if (grade > 70 && grade < 80)
// {
//     console.log("B+")  
// }else if (grade > 60 && grade < 80)
// {
//     console.log("B")
// }else
// {
//     console.log("Fail")
// } 

//loop

// const days = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday']
//  for(var i = 0; i < days.length;  i++ ){
//     console.log(days[i])

//  } 
 //other method
//  for(let abc of days){
    // console.log(abc)
//  }
// const data = {
//     name : "sancx",
//     age : 21,
//     address : "Itahari"
// }

// for(let key in data){
//     console.log(key,'is',data[key])
// }



// console.log(1+2)
// console.log(2+3)
// console.log(5+6)

// regular function
// function add(a,b)
// {
//     console.log(a+b)
// }
// add(1,2)

// named regular function
// const add = function(a,b)
// {
//     console.log(a + b)
// }
// //anynomous function
// const add = (a,b)=> 
    // function Numbers() {
    //     for (let i = 1; i <= 9; i++) {
    //       console.log(i*i)
    //     }
    // }
      const sun = {
        status: 200,
        message: "Code found",
        code: [
            {
                _id: "668510da18d90581711b6292",
                text: "test\n",
                userId: "f959757",
                title: "test",
                ipAddress: "49.244.110.12",
                createdAt: "2024-07-03T08:50:34.704Z"
               
            }
        ]
    }
 function nio(sun){
    console.log(sun.code[0].userId)
    console.log(sun.code[0].title)
    console.log(sun.code[0].ipAddress)
 }
 nio(sun)


    