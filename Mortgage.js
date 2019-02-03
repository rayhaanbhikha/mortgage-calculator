const Interest = require('./Interest')
const Overpayments = require('./Overpayments')


class Mortgage {
    constructor({ capitalBorrowed, years, initialRate, variableRate }) {
        this.capitalBorrowed = capitalBorrowed
        this.initialCapitalBorrowed = capitalBorrowed

        this.years = years
        this.currentMortgageYear = 0
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

    makePayment(overpayment = 0) {
        let payment = this.mortgagePayment
        let interestPaid = this.interest.monthlyInterestPayment

        let actualDeductionFromCapital = Number(payment - interestPaid).toFixed(2)
        this.capitalBorrowed = Number(this.capitalBorrowed - actualDeductionFromCapital).toFixed(2)
        this.makeOverPayment(overpayment)

        this.incrementNumberOfPayments()

        this.payments.push({
            paymentNumber: this.numberOfPaymentsMade,
            payment,
            interestPaid,
            actualContribution: actualDeductionFromCapital,
            overpayment,
            outstanding: this.capitalBorrowed
        })
    }

    incrementNumberOfPayments(value = 1) {
        this.numberOfPaymentsMade += value
        if(this.numberOfPaymentsMade % 12 == 1) {
            this.currentMortgageYear += 1
            this.overpayments.newOverpaymentThreshold = this.capitalBorrowed
            console.log(this.numberOfPaymentsMade, this.currentMortgageYear, this.overpayments.overpaymentThreshold)
        }
    }

    makeOverPayment(overpayment) {
        if(overpayment > 0) {
            this.overpayments.payment(overpayment)
        }
        return overpayment
    }
}

module.exports = Mortgage