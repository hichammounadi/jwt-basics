const CustomAPIError = require('./custom-error')
const {statusCode} = require('http-status-codes')
const { StatusCodes } = require('http-status-codes')
class Unauthenticated extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = Unauthenticated
  