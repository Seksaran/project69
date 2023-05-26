import React,{useEffect, useState } from "react";
import { Get, Post , Update, Delete } from "@service/http";

const List = () => {
    const [data, setData] = useState("");
    
    const onGetData = async () => {
        let result = await Get (`user`);
        if (result.status == 200) {
            setData(result.data);
        }else{
            console.log(result.data.error);
        }
    };

    const onPostData = async (data) => {
        let result = await Post (`user`, data);
        if(result.status == 201){
            console.log("Create complete");
        }else{
            console.log(result.data.error);
        }
    };

    const onUpdateData = async (data, id) => {
        let result = await Update (`user/${id}`, data);
        if(result.status == 200){
            console.log("Update complete");
        }else{
            console.log(result.data.error);
        }
    };

    const onDeleteData = async (data, id) => {
        let result = await Delete (`user/${id}`);
        if(result.status == 200){
            console.log("Delete complete");
        }else{
            console.log(result.data.error);
        }
    };
    
    //useEffect(()=>{
    //    onGetData()
    // },[])

    return (
        <>
        <h1>List</h1>
        </>
    );
};

export default List;