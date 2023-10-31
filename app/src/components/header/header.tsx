import React from 'react';
import './header.css';
import {Box, Button} from "@mui/material";
const Header:React.FC<any> =  () => {
    return (
        <div className={'div'}>
            <div className={'div2'}>
                <nav className='nav'>
                    <ul className="nav-links">
                        <li className={"li"}><a href="/">NEWS</a> </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
export default Header;