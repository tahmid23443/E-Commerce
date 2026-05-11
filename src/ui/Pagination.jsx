import React, { useState } from "react";
import Button from "./Button";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";



export function Pagination({ handlechange , pageNum , totalPage}) {
  
 
  
   

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
        className: "rounded-full",
    });

    const next = () => {
        if (pageNum === totalPage) return;

        handlechange(pageNum + 1);
    };

  const prev = () => {
    if (pageNum === 1) return;  
    handlechange(pageNum - 1);
};
    return (
        <div className="flex items-center gap-4 mt-10 justify-center">
            <Button

                className="flex items-center gap-2 rounded-full"
                onClick={prev}
              disabled={pageNum === 1}  
            >
                 Previous
                <BiArrowFromRight strokeWidth={2} className="h-4 w-4" /> 
            </Button>
            <div className="flex items-center gap-2">
                {
                    [...Array(totalPage)].map((i , indx)=>(

                        <Button variant={pageNum == (indx + 1) ? "primary" : "secondary"} className="rounded-full" 
                        onClick={()=>handlechange(indx + 1)}>{indx + 1}</Button>
                    ))
                }
               
            </div>
            <Button

                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={pageNum === totalPage}
            >
                Next
                <BiArrowFromLeft strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    );
}