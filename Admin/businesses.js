import http from 'k6/http';
import { check, group, sleep } from 'k6';
let url = 'https://uat-forsah-api.910ths.sa/api/v1/businesses'
let token = '9dd637f3cb7676f8d7c1eb496faa13fa'
let params = {
    headers: {
        'X-AUTH-TOKEN': token
    }
}
export default function () {
    group('Grupa Admin Biznesy', function () {


        let response = http.get(url, params);
        check(response, {
            'is status code 200': (r) => r.status === 200,
            'is response faster then 1s': (r) => r.timings.duration < 1000,
            'nie zwraca errora': (r) => !r.error,
        });

    });
};