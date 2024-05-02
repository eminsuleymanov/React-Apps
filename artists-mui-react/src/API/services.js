import axios from "axios";
import  base_url  from "./base.js";

//requests

//get all
export async function getAll() {
  let result = { data: null, error: null };
  await axios
    .get(base_url)
    .then((res) => {
      result = { ...result, data: res.data };
    })
    .catch((err) => {
      result = { ...result, error: err };
    });

  return result;
}