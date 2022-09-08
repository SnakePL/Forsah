import http, { get } from "k6/http";
import { check, group, sleep } from "k6";
import { rUrl, params, checkList } from "./resources.js";

let url = `${rUrl}/api/v1/partners?scope=ops-partner-list`;

export let options = {
  Iterations: 100,
};

export default function () {
  group("Grupa Admin Partners", function () {
    let response = http.get(url, params);
    check(response, checkList);
  });
}
