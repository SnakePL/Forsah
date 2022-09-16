import http from "k6/http";
import { check, group, sleep } from "k6";
import { rUrl, params, checkList } from "./resources.js";

let url = `${rUrl}/api/v1/categories/stats`;

export let options = {
  Iterations: 100,
};

export default function () {
  group("stats", function () {
    let response = http.get(url, params);
    check(response, checkList);
  });
}
