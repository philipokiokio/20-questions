const argv = require('process').argv



let argArray = argv.slice(2,5)

// console.log(argArray.length)
if (argArray.length === 3){
    let firstName = argArray[0]
    let lastName = argArray[1]
    let age = Number(argArray[2])
    console.log(`Welcome ${firstName} ${lastName} ${age}`)
}else{
    console.log('Terminal arguments for the firstname, lastname and age were not passed. ')
}

