const Interest = require('./Interest')

class Mortgage {
    constructor(capitalBorrowed, years, fixedInterestRate, yearsFixedRate, variableInterestRate) {
        this.capitalBorrowed = capitalBorrowed
        this.initialCapitalBorrowed = capitalBorrowed
        this.years = years
        this.numberOfPayments = this.years * 12
        this.numberOfPaymentsMade = 0
        this.interest = new Interest(
            this,
            fixedInterestRate,
            yearsFixedRate,
            variableInterestRate
        )
    }

    get mortgagePayment() {
        let r = this.interest.monthlyInterestRate
        let N = this.numberOfPayments
        let P = this.initialCapitalBorrowed

        let accumulatedInterestRate = Math.pow(1 + r, N)
        let monthlyPayments = (P * r * accumulatedInterestRate) / (accumulatedInterestRate - 1)

        return Number(monthlyPayments.toFixed(2))
    }

    makePayment() {
        let payment = this.mortgagePayment
        let interestPaid = this.interest.monthlyInterestPayment

        let actualDeductionFromCapital = Number(payment - interestPaid).toFixed(2)
        this.capitalBorrowed = Number(this.capitalBorrowed - actualDeductionFromCapital).toFixed(2)
        this.numberOfPaymentsMade += 1

        console.log(`
        No. ${this.numberOfPaymentsMade}, 
        Payment: ${payment} , 
        Deduction: ${actualDeductionFromCapital},
        InterestPaid: ${interestPaid},
        Outstanding: ${this.capitalBorrowed}
        `)
    }
}

module.exports = Mortgage