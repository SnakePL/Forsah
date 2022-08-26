//let rUrl = 'https://uat-forsah-api.910ths.sa'
let rUrl = 'https://forsa-api.910ths.sa'

let rToken = '9a90aa933236161ffb66ceea39f89153'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
let checkList = {
    'Is status code 200': (r) => r.status === 200,
    'Is response faster than 1s': (r) => r.timings.duration < 1000,
    'Is response faster than 2s': (r) => r.timings.duration < 2000,
    'Is there an error in the response': (r) => !r.error,
}
module.exports = {
    rToken, rUrl, params, checkList
 }
