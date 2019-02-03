class Interest {
    constructor(mortgage, fixedInterest, variableRate) {
        this.mortgage = mortgage
        this.fixedInterestRate = fixedInterest.interestRate
        this.yearsFixedRate = fixedInterest.years
        this.variableRate = variableRate
    }

    get passedFixedRatePeriod() {
        if (
            this.mortgage.numberOfPaymentsMade > 0 &&
            this.mortgage.numberOfPaymentsMade > this.yearsFixedRate * 12
        ) return true

        return false
    }

    get interestRate() {
        if (this.passedFixedRatePeriod) {
            return this.variableInterestRate / 100
        }

        return this.fixedInterestRate / 100
    }

    get monthlyInterestRate() {
        return this.interestRate / 12
    }

    get monthlyInterestPayment() {
        return Number((this.mortgage.capitalBorrowed * this.monthlyInterestRate).toFixed(2))
    }
}

module.exports = Interest