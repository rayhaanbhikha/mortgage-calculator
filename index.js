let capitalBorrowed = 70000
let years = 10
let yearsFixedRate = 2
let interestRate = (r = 1.82) => (r / 12) / 100
let NumberOfPayments = (years) => years * 12
let N = NumberOfPayments(10)


// let mortgage = {
//     capitalBorrowed: 70000,
//     years: 10,
//     NumberOfPayments: () => {
//         return this.years * 12
//     },
//     intere
// }



const Mortgage = require("./Mortgage")


let m = new Mortgage(
    70000,
    10,
    1.82,
    2,
    4.21
)

// console.log(m.capitalBorrowed)

// console.log(m.interestRate)

// console.log(m.mortgagePayment)


for (let i = 0; i < 12; i++) {
    console.log("----- ", i, " ------")
    m.makePayment()
    // console.log(m.capitalBorrowed)
    console.log("--------------")
}

console.log(m.capitalBorrowed)


// m.numberOfPaymentsMade = 24
// m.makePayment()
//
// console.log(m.mortgagePayment)

// console.log(m.interestRate)





// function computeMonthlyPayments(interestRate, capitalBorrowed, NumberOfPayments) {
//     let accumulatedInterestRate = Math.pow(1 + interestRate, NumberOfPayments)
//     let monthlyPayments = (r * capitalBorrowed * accumulatedInterestRate) / (accumulatedInterestRate - 1)
//     return Number(monthlyPayments.toFixed(2))
// }

// console.log(computeMonthlyPayments(interestRate(1.82), capitalBorrowed, NumberOfPayments))




// let monthlyInterest = (r) => {
//     return Number((capitalBorrowed * r).toFixed(2))
// }

// let fixedRateMonthlyPayments = computeMonthlyPayments(interestRate(1.82))

// let variableRateMonthlyPayments = computeMonthlyPayments(interestRate(4.24))

// console.log(monthlyInterest(interestRate(1.82)), fixedRateMonthlyPayments, capitalBorrowed)


// capitalBorrowed -= (fixedRateMonthlyPayments - monthlyInterest(interestRate(1.82)))

// console.log(monthlyInterest(interestRate(1.82)), fixedRateMonthlyPayments, capitalBorrowed)


// let c = {
//     val: 4000,
//     deduct: function (x) {
//         this.val = this.val - x
//     }
// }

// console.log(c.val)

// c.deduct(300)

// console.log(c.val)








// let yearlyMortgagePayments = (fixedRate = true) => {
//     for (let i = 0; i < 12; i++) {
//         let fixedPayment = null
//         let interestPayment = null

//         if (fixedRate) {
//             fixedPayment = fixedRateMonthlyPayments
//             interestPayment = monthlyInterest(1.82)
//         } else {
//             fixedPayment = variableRateMonthlyPayments
//             interestPayment = monthlyInterest(4.24)
//         }

//         capitalBorrowed -= (fixedPayment - interestPayment)
//         // console.log(fixedPayment, interestPayment, capitalBorrowed)
//     }
// }


// yearlyMortgagePayments()
// console.log(capitalBorrowed)




// console.log(fixedRateMonthlyPayments)




// yearlyMortgagePayments()
// console.log(`${1}, £${capitalBorrowed}`)


// for (i = 0; i < years; i++) {
//     if (i > yearsFixedRate) {
//         yearlyMortgagePayments()
//     } else {
//         yearlyMortgagePayments(fixedRate = false)
//     }
//     console.log(`${i}: £${capitalBorrowed}`)
//     if (capitalBorrowed <= 0)
//         break
// }
