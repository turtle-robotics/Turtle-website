import React from "react";
import RightArrow from '../../assets/images/icons/rightArrow.svg?react';
export default function Button(props){
    const className = props.className;
    const textContent = props.content
    return (
        <>
            <div className="w-auto">
                <a href="/about" className={className + " flex justify-items-center items-center w-full h-10 text-center relative rounded-full px-10"}>
                        <span className="mx-3 text-xl font-[Times] text-neutral-100 w-full text-nowrap" >{textContent}</span>
                        <RightArrow className="absolute top-1/2 -translate-y-1/2 -translate-x-3/4 right-0"/>
                    
                </a>
            </div>
        </>
    );
}