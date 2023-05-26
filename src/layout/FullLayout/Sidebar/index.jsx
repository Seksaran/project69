import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperSidebar, ButtonNav } from "./SidebarStyled";

const Sidebar = () => {
    const navigate = useNavigate();
    
    

    const path = [
        {
            id: 1 ,
            name: "LIST",
            path: "/",
        },
        {
            id: 2 ,
            name: "CREATE",
            path: "/create",
        },
    ];

   return (
   <>
   <WrapperSidebar>
    {
        path.map((val, index) => {
            return (
                <ButtonNav 
                to={val.path}
                key={index}
                >
                {val.name}
                </ButtonNav>
            );
        })
    }
   </WrapperSidebar>
   </>
   );
};

export default Sidebar;
