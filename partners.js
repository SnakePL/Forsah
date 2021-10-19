import http, { get } from 'k6/http';
import { check, group, sleep } from 'k6';

const url = 'https://uat-forsah-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const urlstaging = 'https://staging-forsah-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const urlProd = 'https://forsa-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const token = 'af771b239f5ed911e8dc2c1cc494c53e';
const tokenstaging = 'e7a84f1523f0fd57806630c0e2ae7021';
const tokenProd = 'fa896529ac490ea4dd1dac9e7bae207a';
const params = {
    headers:{
        "X-AUTH-TOKEN": token,
    }
}
const paramsStaging = {
    headers:{
        "X-AUTH-TOKEN": tokenstaging,
    }
}
const paramsProd = {
    headers:{
        "X-AUTH-TOKEN": tokenProd,
    }
}

export default function () {
//let res = http.get(url,params);
//let res2 = http.get(urlstaging,paramsStaging);
let res3 = http.get(urlProd, paramsProd);

};