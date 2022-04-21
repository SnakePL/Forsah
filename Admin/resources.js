//let rUrl = 'https://uat-forsah-api.910ths.sa'
let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = 'db752c754eaba5c874ef18bb2768049e'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
