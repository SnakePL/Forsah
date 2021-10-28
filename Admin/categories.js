import http from 'k6/http';
import { check, group, sleep } from 'k6';

let url = 'https://uat-forsah-api.910ths.sa/api/v1/categories?scope=admin';
let token = '9b635aac97f43938e787115b0f54db4c';
let params = {
    headers: {
        "X-AUTH-TOKEN": token,
    }
}
export let options = {
    Iterations: 100
};
export default function () {

    group('Admin - Catrgories', function () {
        let response = http.get(url, params);

        check(response, {
            'is status code 200': (r) => r.status === 200,
            'is response faster then 1s': (r) => r.timings.duration < 1000,
            'nie zwraca errora': (r) => !r.error,
        });
    });


};