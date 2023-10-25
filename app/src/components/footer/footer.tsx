import React from 'react';
import './footer.css';
const Footer:React.FC<any> =  () => {
    return (
        <div className={'divFooter'}>
            <a className={"aFooter"} href={"/impressum"}>IMPRESSUM</a>
        </div>
    )
}
export default Footer;