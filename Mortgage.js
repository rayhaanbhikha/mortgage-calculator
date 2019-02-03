const Interest = require('./Interest')
const Overpayments = require('./Overpayments')


class Mortgage {
    constructor({ capitalBorrowed, years, initialRate, variableRate }) {
        this.capitalBorrowed = capitalBorrowed
        this.initialCapitalBorrowed = capitalBorrowed
        this.years = years
        this.numberOfPayments = this.years * 12
        this.numberOfPaymentsMade = 0

        this.overpayments = new Overpayments(this)
        this.interest = new Interest(this, initialRate, variableRate)

        this.payments = []
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

        this.payments.push({
            paymentNumber: this.numberOfPaymentsMade,
            payment,
            actualContribution: actualDeductionFromCapital,
            interestPaid,
            outstanding: this.capitalBorrowed
        })
    }

    makeOverPayment(overpayment) {
        this.overpayments.payment(overpayment)
    }
}

module.exports = Mortgage