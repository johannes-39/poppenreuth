import React, {useState} from 'react';
import './sizepicker.css'
const Sizepicker:React.FC<any> =  () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("size");
    const handleOnClick = () => {
        setOpen(!open);
    }

    const handleOnClick1 = () => {
        setValue("M");
        setOpen(!open);
    }
    const handleOnClick2 = () => {
        setValue("L");
        setOpen(!open);
    }
    const handleOnClick3 = () => {
        setValue("XL");
        setOpen(!open);
    }
    const handleOnClick4 = () => {
        setValue("XXL");
        setOpen(!open);
    }

    return (
        <div className={"dropdown1"}>
            <button className={'button'} onClick={handleOnClick}>{value}</button>
            {
                open ? <div className={"test123"}>
                    <button onClick={handleOnClick1} className={'button1'}>M</button>
                    <button onClick={handleOnClick2} className={'button1'}>L</button>
                    <button onClick={handleOnClick3} className={'button1'}>XL</button>
                    <button onClick={handleOnClick4} className={'button1'}>XXL</button>
                </div> : null
            }
        </div>
    )
}
export default Sizepicker;