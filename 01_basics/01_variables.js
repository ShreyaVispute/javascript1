const accountId = 144553
let accountEmail ="tira@gmail.com"
var accountPassword = "12345"
accountCity="Pune"
let accountState; //undefined

// accountId=2 not allowed as it is const
accountEmail="hc@hc.com"
accountPassword="212134"
accountCity="Mumbai"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/**
 * preferred not to use var
 * because of issue in block scope and functional scope
 */