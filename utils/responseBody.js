const errorResponseBody = {
    err: {},
    data: {},
    message: 'Something went wrong, please try again later',
    success: false
}

const successResponseBody = {
    err: {},
    data: {},
    message: 'Successfully processed request',
    success: true
}

module.exports = { 
    errorResponseBody, 
    successResponseBody 
};