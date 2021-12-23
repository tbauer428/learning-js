// @ts-check

const HOURS_PER_DAY = 8
const BILLABLE_DAYS_IN_MONTH = 22

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export const dayRate = (ratePerHour) => {
  return HOURS_PER_DAY * ratePerHour
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export const daysInBudget = (budget, ratePerHour) => {
  return Math.floor(budget / dayRate(ratePerHour))
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  let normalRateDays = numDays % BILLABLE_DAYS_IN_MONTH
  let rate = dayRate(ratePerHour)
  let discountedRate = rate * (1 - discount)
  if (discount === 0) {
    return Math.ceil(rate * numDays)
  } else {
    return Math.ceil(
      discountedRate * (numDays - normalRateDays) 
      + 
      rate * normalRateDays
    )
  }
}
