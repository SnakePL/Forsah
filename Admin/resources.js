//let rUrl = 'https://uat-forsah-api.910ths.sa'
//let rUrl = 'https://forsa-api.910ths.sa'
let rUrl = 'https://cr-forsah-uat-api.k8s.910ths.sa'

let rToken = 'cdd0df0fe5e1d0269ae71f2f5ff72dca'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
