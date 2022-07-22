let rUrl = 'https://uat-forsah-api.910ths.sa'
//let rUrl = 'https://forsa-api.910ths.sa'
//let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = 'd44f2afacc48d74f33fa9093627884a3'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
