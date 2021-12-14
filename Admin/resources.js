let rUrl = 'https://uat-forsah-api.910ths.sa'
//let rUrl = 'https://forsa-api.910ths.sa'

let rToken = '4cf3f029c31a1bf24244eaf3c1b29d95'
let params = {
    headers: {
        'X-AUTH-TOKEN': rToken
    }
}
module.exports = {
    rToken, rUrl, params
 }
// module.export zamiast tego przed let moge dac export 

//jak nie chce mi sie importowac pojedynczo to tez wyeksportowac moge jako 1 obiekt 
//wszystko z góry i zponiej zaimportowac tlyko ten 1 obiekt
//export const obiektAll = {
//params: params,

//}