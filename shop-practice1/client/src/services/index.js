import { BASE_URL} from "./constants";
import axios from "axios";

async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response;
  } catch (error) {
    return error;
  }
}

async function getOne(endpoint,id) {
    try {
      const response = await axios.get(BASE_URL + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function deleteOne(endpoint,id) {
    try {
      const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
      return response.data;
    } catch (error) {
      return error;
    }
}

async function post(endpoint,payload) {
    try {
      const response = await axios.post(BASE_URL + endpoint, payload);
      return response.data;
    } catch (error) {
      return error;
    }
}

const controller = {
    getAll,
    getOne,
    delete: deleteOne,
    post
}

export default controller