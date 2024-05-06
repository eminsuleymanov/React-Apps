import axios from "axios";
import { Base_Url } from "../constants.js";

//requests

//get all
export async function getAll(endpoint) {
  let result = { data: null, error: null };
  await axios
    .get(Base_Url + endpoint)
    .then((res) => {
      result = { ...result, data: res.data };
    })
    .catch((err) => {
      result = { ...result, error: err };
    });

  return result;
}

//get one
export async function getOne(endpoint, id) {
    let result = { data: null, error: null };
    await axios
      .get(Base_Url + endpoint + `/${id}`)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });
  
    return result;
}

//delete
export async function deleteOne(endpoint, id) {
    let result = { data: null, error: null };
    await axios
      .delete(Base_Url + endpoint + `/${id}`)
      .then((res) => {
        result = { ...result, data: res.data };
      })
      .catch((err) => {
        result = { ...result, error: err };
      });
  
    return result;
}

//post
export async function post(endpoint, payload) {
    let result = { data: null, error: null };
    await axios
      .post(Base_Url + endpoint, payload)
      
  
    return result;
}
