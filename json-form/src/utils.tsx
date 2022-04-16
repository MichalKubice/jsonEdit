import axios from "axios";
import {iOptions} from "./types/options";

export const getData = () => {
  const data = axios.get("/api/data").then((res) => JSON.parse(res.data));
  return data;
};

export const editData = (data: iOptions) => {
  axios
    .post("/api/data/update", {
      data,
    })
    .then((res) => console.log(res.data));
};

export const downloadData = () => {
  axios.get("/api/data/download", {responseType: "blob"}).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "values.json"); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};
