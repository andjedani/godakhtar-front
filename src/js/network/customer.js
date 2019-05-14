import { baseUrl } from "../network";
import axios from "axios";

const serviceUrl = baseUrl + "customers/";

export const readCustomer = () => {};

export const createCustomer = json => {
  axios
    .post(serviceUrl, json)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateCustomer = () => {};

export const deleteCustomer = () => {};
