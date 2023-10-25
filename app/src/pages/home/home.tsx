"use client"; // This is a client component

import './home.css';
import React, {useState} from "react";
import image from "../../images/blog-post-3.jpeg";
import CardComponent from "@/app/src/components/Card/card";
function MyHome() {
    const [checkout, setCheckout] = useState(false);
    return (
        <div className={"divCompNews"}>
            <div className={"divContent"}>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth shirt"} content1={"20€"} image={image}/>
            </div>

            </div>





    );
}

export default MyHome;