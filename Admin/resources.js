//let rUrl = 'https://uat-forsah-api.910ths.sa'
let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = 'd058b74d2bca5d89d4689fcd3ee815cb'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
