//let rUrl = 'https://uat-forsah-api.910ths.sa'
let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = '3fe4c0ec46a8a1c92accc47ef4514fbd'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
