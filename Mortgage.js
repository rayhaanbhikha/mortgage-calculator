class Mortgage {
    constructor(
        capitalBorrowed,
        years,
        fixedInterestRate,
        yearsFixedRate,
        variableInterestRate
    ) {
        this.capitalBorrowed = capitalBorrowed
        this.initialCapitalBorrowed = capitalBorrowed
        this.years = years,
        this.fixedInterestRate = fixedInterestRate,
        this.yearsFixedRate = yearsFixedRate,
        this.variableInterestRate = variableInterestRate
        this.NumberOfPayments = this.years * 12
        this.numberOfPaymentsMade = 0
    }

    get interestRate() {
        if (
            this.numberOfPaymentsMade > 0 &&
            this.numberOfPaymentsMade > this.yearsFixedRate * 12
        ) {
            return this.variableInterestRate / 100
        } else {
            return this.fixedInterestRate / 100
        }
    }

    get monthlyInterestRate() {
        return this.interestRate / 12
    }

    get monthlyInterestPayment() {
        return Number((this.capitalBorrowed * this.monthlyInterestRate).toFixed(2))
    }

    get mortgagePayment() {
        let accumulatedInterestRate = Math.pow(1 + this.monthlyInterestRate, this.NumberOfPayments)
        let monthlyPayments = (this.monthlyInterestRate * this.initialCapitalBorrowed * accumulatedInterestRate) / (accumulatedInterestRate - 1)
        return Number(monthlyPayments.toFixed(2))
    }

    makePayment() {
        let actualDeductionFromCapital = Number(this.mortgagePayment - this.monthlyInterestPayment).toFixed(2)
        this.capitalBorrowed = Number(this.capitalBorrowed - actualDeductionFromCapital).toFixed(2)
        this.numberOfPaymentsMade += 1
        console.log(`${this.numberOfPaymentsMade}, ${this.mortgagePayment} , ${actualDeductionFromCapital}, ${this.capitalBorrowed}` )
    }
}

module.exports = Mortgage