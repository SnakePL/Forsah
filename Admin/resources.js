let rUrl = 'https://uat-forsah-api.910ths.sa'
//let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = '3d2ebfdf91bb94988d6537553aa78cc7'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
