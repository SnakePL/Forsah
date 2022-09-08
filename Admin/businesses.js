import http from "k6/http";
import { check, group, sleep } from "k6";
import { rUrl, params, checkList } from "./resources.js";

let url = `${rUrl}/api/v1/businesses`;

export let options = {
  Iterations: 100,
};

export default function () {
  group("Grupa Admin Biznesy", function () {
    let response = http.get(url, params);
    check(response, checkList);
  });
}
