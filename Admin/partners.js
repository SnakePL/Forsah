import http, { get } from 'k6/http';
import { check, group, sleep } from 'k6';

const url = 'https://uat-forsah-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const urlstaging = 'https://staging-forsah-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const urlProd = 'https://forsa-api.910ths.sa/api/v1/partners?scope=ops-partner-list';
const token = '9b635aac97f43938e787115b0f54db4c';
const tokenstaging = '9b635aac97f43938e787115b0f54db4c';
const tokenProd = '9b635aac97f43938e787115b0f54db4c';
const params = {
    headers: {
        "X-AUTH-TOKEN": token,
    }
}
const paramsStaging = {
    headers: {
        "X-AUTH-TOKEN": tokenstaging,
    }
}
const paramsProd = {
    headers: {
        "X-AUTH-TOKEN": tokenProd,
    }
}
export let options = {
    Iterations: 100
};
export default function () {

    let res = http.get(url, params);
    //let res2 = http.get(urlstaging, paramsStaging);
    //let res3 = http.get(urlProd, paramsProd);

    check(res, {
        'is status code 200': (r) => r.status === 200,
        'is response faster then 1s': (r) => r.timings.duration < 1000,
        'nie zwraca errora': (r) => !r.error,
    });
};