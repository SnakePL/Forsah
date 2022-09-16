import http, { get } from "k6/http";
import { check, group, sleep } from "k6";
import { rUrl, params, checkList } from "./resources.js";

let url = `${rUrl}/api/v1/filters/marketplace/recalculate`;

export let options = {
  Iterations: 100,
};

export default function () {
  group("recalculateMarketplace.js", function () {
    let response = http.get(url, params);
    check(response, checkList);
  });
}
