import React, {useState} from 'react';
import './testComp.css'
import image from '../Card/blog-post-3.jpeg'
import Image from 'next/image'
import ClearIcon from '@mui/icons-material/Clear';
import {IconButton} from "@mui/material";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
const TestComp:React.FC<any> =  () => {
    const [test, setTest] = useState(false);
    const [test2, setTest2] = useState(false);
    const handleOnClick = () => {
        setTest(!test);
    }
    const handleOnClick2 = () => {
        setTest2(!test2);
    }
    function ani() {
        // @ts-ignore
        document.getElementById('img').className = 'classname';
    }
    return (
        <div className={"box"}>

            <div  className={`animated-component ${test? 'visible' : ''}`}>
                <div onClick={handleOnClick} className={`boxbefore ${test? 'visible' : ''}`}><Image className={`avatar ${test? 'visible' : ''}`} src={image} alt="blog"/><div className={`centered ${test? 'visible' : ''}`}>NEWS</div></div>
                <div className={`boxaround ${test? 'visible' : ''}`}>
                    <div className={`textComp ${test? 'visible' : ''}`}>
                        <div className={"textHeader"}>
                            <h1 className={'ueberschrift'}>Lorem ipsum dolor</h1>
                            <div className={`close1 ${test? 'visible' : ''}`}>
                                <IconButton onClick={handleOnClick} sx={{boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'}}>
                                    <ClearIcon/>
                                </IconButton></div>
                        </div>
                        <div className={"divider"}></div>

                        <div className={`boxafter ${test? 'visible' : ''}`}>


                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            <div className={"grid"}>

                                <div className={"grid2"}>
                                    <div className={`commentBox ${test? 'visible' : ''}`}><input className={`comment ${test? 'visible' : ''}`} placeholder={"..."}/></div>

                                </div>
                                <div className={"grid3"}>
                                    <div className={`close ${test? 'visible' : ''}`}>
                                        <IconButton onClick={handleOnClick2}  sx={{marginTop: '4px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'}}>
                                            <MessageOutlinedIcon/>
                                        </IconButton>
                                    </div>
                                </div>




                            </div>
                        </div>



                    </div>


                </div>


            </div>
        </div>

    )
}
export default TestComp;