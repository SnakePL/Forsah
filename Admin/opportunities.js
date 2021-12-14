import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { rUrl, params } from './resources.js'

let url = `${rUrl}/api/v1/opportunities?scope=opportunity-dashboard`;

export let options = {
    Iterations: 1,
    //Iterations: __ENV.batch || 100 - zlini polecen
    thresholds: { //quality gate'y
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
        checks: ['rate>0.6'], //checki mogą być również użyte w thresholdach
        'group_duration{group:::Grupa Admin Opportunities}': ['avg < 10'],
    },
};
export function setup() {
    let response = http.get(url, params);
    return response
  }
export default function () {
    group('Grupa Admin Opportunities', function () {


        let response = http.get(url, params);
        check(response, {
            'is status code 200': (r) => r.status === 200,
            'is response faster then 1s': (r) => r.timings.duration < 1000,
            'body odpowiedzi nie zwraca errora': (r) => !r.error,

        });
       // console.log(JSON.stringify(response,null,2));
       
    });
};
export function teardown(data) {
    console.log("KONIEC")
    console.log(JSON.stringify(data,null,2));
    //  https://github.com/gabrielstar/k6training/blob/master/007_structure/01_teoria.md
  }