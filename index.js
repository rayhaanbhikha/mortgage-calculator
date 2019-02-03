const Mortgage = require("./Mortgage")

let mortageOptions = {
    capitalBorrowed: 70000,
    years: 10,
    initialRate: {
        interestRate: 1.82,
        years: 2
    },
    variableRate: 4.21
}

// let m = new Mortgage(
//     capitalBorrowed = 70000,
//     years = 10,
//     fixedInterestRate = 1.82,
//     yearsFixed = 2,
//     variableInterestRate = 4.21
// )

let m = new Mortgage(mortageOptions)

// m.numberOfPaymentsMade = 24
for (let i = 0; i < 12; i++) {
    m.makePayment()
    m.makeOverPayment(200)
}

// m.payments

console.log(m.payments)

