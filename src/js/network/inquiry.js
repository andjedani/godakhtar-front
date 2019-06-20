import { baseUrl, api } from ".";
import axios from "axios";

const serviceUrl = baseUrl + api + "inquiry/";

export const createInquiry = json => {
  const options = {
    method: "POST",
    url: serviceUrl,
    data: json
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};

export const addSignleProductToInquiry = (inquiryId, json) => {
  const options = {
    method: "POST",
    url: serviceUrl + inquiryId + "/addproduct/",
    data: json
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};

export const getInquiries = () => {
  const options = {
    method: "GET",
    url: serviceUrl
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};

export const getInquiryById = inquiryId => {
  const options = {
    method: "GET",
    url: serviceUrl + inquiryId
  };
  return axios(options).catch(function(error) {
    console.log(error);
  });
};
