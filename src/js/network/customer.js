import { baseUrl, api } from "../network";
import axios from "axios";

const serviceUrl = baseUrl + api + "customers/";

export const readCustomer = () => {
  return axios.get(serviceUrl).catch(function(error) {
    console.log(error);
  });
};

export const createCustomer = json => {
  axios
    .post(serviceUrl, json)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const updateCustomer = () => {};

export const deleteCustomer = () => {};
