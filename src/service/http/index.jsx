import axios from "axios";

const API_URl = import.meta.env.VITE_API_KEY;

const config = {
    headers: {
        token : "",
    },
};

export const Post = async (url,data) => {
    return await axios
    .post(`${API_URl}${url}$`, data , config)
    .then((res) => res)
    .catch((error)=>{
        return error.response;
    });
};

export const Get = async (url) => {
    return await axios
    .get(`${API_URl}${url}$`, config)
    .then((res) => res)
    .catch((error)=>{
        return error.response;
    });
};

export const Update = async (url,data) => {
    return await axios
    .put(`${API_URl}${url}$`, data , config)
    .then((res) => res)
    .catch((error)=>{
        return error.response;
    });
};

export const Delete = async (url) => {
    return await axios
    .delete(`${API_URl}${url}$`, config)
    .then((res) => res)
    .catch((error)=> {
        return error.response;
    });
};