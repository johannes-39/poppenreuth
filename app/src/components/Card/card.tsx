import React, {useState} from 'react';
import './card.css'
import TextComponent from "../TextComp/textcomp"
const CardComponent:React.FC<any> =  ({setCheckout, checkout, content, content1, image}) => {
    const [test, setTest] = useState(false);
    const handleOnClick = () => {
        setTest(!test);
    }
    return (
        <div className={"divBodyBox"}>
            <div className={'divBody'}>
                {
                    // eslint-disable-next-line @next/next/no-img-element
                    test === true ? <div className={'divCard'}><img onClick={handleOnClick} className={'img'} src={image} alt="blog"/><TextComponent setCheckout={setCheckout} checkout={checkout} myclick={test} content1={content1} input={"BESTELLEN"}></TextComponent></div> :
                        // eslint-disable-next-line @next/next/no-img-element
                        <div  className={'divCard'}><img onClick={handleOnClick} className={'img'} src={image} alt="blog"/><TextComponent setCheckout={setCheckout} checkout={checkout} myclick={test} input={content}></TextComponent></div>
                }
            </div>
        </div>

    )
}
export default CardComponent;