class Mortgage {
    constructor(
        capitalBorrowed,
        years,
        fixedInterestRate,
        yearsFixedRate,
        variableInterestRate
    ) {
        this.capitalBorrowed = capitalBorrowed
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
            this.numberOfPaymentsMade >= this.yearsFixedRate * 12
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
        let monthlyPayments = (this.monthlyInterestRate * this.capitalBorrowed * accumulatedInterestRate) / (accumulatedInterestRate - 1)
        return Number(monthlyPayments.toFixed(2))
    }

    makePayment() {
        console.log("Monthly payment: -> ", this.mortgagePayment)
        console.log("interest payment -> ", this.monthlyInterestPayment)
        let actualDeductionFromCapital = Number(this.mortgagePayment - this.monthlyInterestPayment).toFixed(2)
        console.log("actual: ", actualDeductionFromCapital)
        this.capitalBorrowed -= actualDeductionFromCapital
    }
}

module.exports = Mortgage