import React from 'react';
import './textcomp.css'
const TextComponent:React.FC<any> =  ({setCheckout, checkout, myclick, content1, input}) => {
    return (
        <div >
            {
                myclick === false ? <p className={'p'}>{input}</p>: <div><p  className={'p2'}>{content1}<div className={'line'}></div>
                    <div className={"purchase"}>
                        <div className={'line1'}></div>


                    </div>
                </p></div>}
        </div>
    )
}
export default TextComponent;