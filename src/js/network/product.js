import { baseUrl, api } from ".";
import axios from "axios";

const serviceUrl = baseUrl + api + "products/";

export const productOptions = () => {
  const options = {
    method: "OPTIONS",
    url: serviceUrl
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};

export const getProductAttrs = name => {
  const options = {
    method: "GET",
    url: serviceUrl + "list/" + name
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};
