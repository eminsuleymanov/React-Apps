import { base_url } from "./constants";
import axios from "axios";

//get all
async function getAll(endpoint) {
  try {
    const response = await axios.get(base_url + endpoint);
    return response;
  } catch (error) {
    return error;
  }
}

async function getOne(endpoint,id) {
    try {
      const response = await axios.get(base_url + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function deleteOne(endpoint,id) {
    try {
      const response = await axios.delete(base_url + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function post(endpoint,payload) {
    try {
      const response = await axios.post(base_url + endpoint, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function putOne(endpoint,id,payload) {
    try {
      const response = await axios.put(base_url + endpoint + `/${id}`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function patchOne(endpoint,id,payload) {
    try {
      const response = await axios.patch(base_url + endpoint + `/${id}`, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

const controller = {
    getAll,
    getOne,
    delete: deleteOne,
    patch: patchOne,
    put: putOne,
    post
}

export default controller