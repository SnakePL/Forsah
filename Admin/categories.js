import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { rUrl, params } from './resources.js'

let url = `${rUrl}/api/v1/categories?scope=admin`;

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