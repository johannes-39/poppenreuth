"use client"; // This is a client component

import './home.css';
import React, {useState} from "react";
import image from "../../components/Card/blog-post-3.jpeg";
import CardComponent from "@/app/src/components/Card/card";
import TestComp from "@/app/src/components/testComp/testComp";
function MyHome() {
    const [checkout, setCheckout] = useState(false);
    return (
        <div className={"divCompNews"}>
            <div className={"divContent"}><TestComp></TestComp>
                <CardComponent setCheckout={setCheckout} checkout={checkout} content={"commando poppenreuth shirt"} content1={"20€"} image={image}/>

            </div>

            </div>





    );
}

export default MyHome;