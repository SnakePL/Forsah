import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { rUrl, params } from './resources.js'

let url = `${rUrl}/api/v1/opportunities?scope=opportunity-dashboard`;

export let options = {
    Iterations: 100
};

export default function () {
    group('Grupa Admin Opportunities', function () {


        let response = http.get(url, params);
        check(response, {
            'Is status code 200': (r) => r.status === 200,
            'Is response faster than 1s': (r) => r.timings.duration < 1000,
            'Is response faster than 2s': (r) => r.timings.duration < 2000,
            'Is there an error in the response': (r) => !r.error,
        });
    });
};