import toDate from '../toDate/index.js'

/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Date} the new date with the year setted
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
export default function setYear (dirtyDate, dirtyYear, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var year = Number(dirtyYear)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
    return new Date(NaN)
  }

  date.setFullYear(year)
  return date
}
