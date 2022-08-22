let rUrl = 'https://uat-forsah-api.910ths.sa'
//let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = '9022ba9f0b113bb1adca45fe360de494'
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
