//let rUrl = 'https://uat-forsah-api.910ths.sa'
let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = 'e33fc0d139d2456e8116fef8fcad6158'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
