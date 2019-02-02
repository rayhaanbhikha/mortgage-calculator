const Mortgage = require("./Mortgage")

let m = new Mortgage(
    capitalBorrowed = 70000,
    years = 10,
    fixedInterestRate = 1.82,
    yearsFixed = 2,
    variableInterestRate = 4.21
)

// m.numberOfPaymentsMade = 24
for (let i = 0; i < 12; i++) {
    m.makePayment()
    m.makeOverPayment(200)
}

console.log(m.capitalBorrowed)

