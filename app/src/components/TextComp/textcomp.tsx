import React from 'react';
import './textcomp.css'
import ButtonComponent from "@/app/src/components/button/button";
import {Dropdown} from "@mui/base";
import Sizepicker from "@/app/src/components/sizepicker/sizepicker";
const TextComponent:React.FC<any> =  ({setCheckout, checkout, myclick, content1, input}) => {
    return (
        <div >
            {
                myclick === false ? <p className={'p'}>{input}</p>: <div><p  className={'p2'}>{content1}<div className={'line'}></div>
                    <div className={"purchase"}>
                        <Sizepicker>
                        </Sizepicker>                        <div className={'line1'}></div>
                        <ButtonComponent setCheckout={setCheckout} checkout={checkout}></ButtonComponent>


                    </div>
                </p></div>}
        </div>
    )
}
export default TextComponent;