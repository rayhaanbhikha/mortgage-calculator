const Mortgage = require("./Mortgage")

let mortageOptions = {
    capitalBorrowed: 70000,
    years: 10,
    initialRate: {
        interestRate: 1.82,
        years: 2
    },
    variableRate: 4.21,
    ercs: [2.5, 2] // 10% allowance.
}

let m = new Mortgage(mortageOptions)

let y = 3

// m.numberOfPaymentsMade = 24
for (let i = 0; i < y * 12; i++) {
    m.makePayment(300)
    // m.makeOverPayment(200)
}

// m.payments

// console.log(m.payments)
// console.log(m.overpayments.overpaymentTotal)
// console.log(m.currentMortgageYear)
// console.log(m.capitalBorrowed)
