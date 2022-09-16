import http, { get } from "k6/http";
import { check, group, sleep } from "k6";
import { rUrl, params, checkList } from "./resources.js";

let url = `${rUrl}/api/v1/filters/opportunity-dashboard/recalculate`;

export let options = {
  Iterations: 100,
};

export default function () {
  group("recalculateOpportunityDashboard", function () {
    let response = http.get(url, params);
    check(response, checkList);
  });
}
