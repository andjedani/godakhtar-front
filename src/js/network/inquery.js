import { baseUrl, api } from ".";
import axios from "axios";

const serviceUrl = baseUrl + api + "inquiry/";

export const createInquery = json => {
  return axios.post(serviceUrl, json).catch(function(error) {
    console.log(error);
  });
};
