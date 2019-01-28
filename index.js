const Mortgage = require("./Mortgage")

let m = new Mortgage(
    capitalBorrowed = 70000,
    years = 10,
    fixedInterestRate = 1.82,
    yearsFixed = 2,
    variableInterestRate = 4.21
)

m.numberOfPaymentsMade = 24

m.makePayment()

console.log(m.capitalBorrowed)

