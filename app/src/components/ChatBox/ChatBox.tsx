import React from 'react';
import './ChatBox.css'
import {IconButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const ChatBox:React.FC<any> =  ({content}) => {

    return (
        <div key={null}>
            <div className={"messages"}>
                {  content.map((count: { user: string; comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; }) =>

                    count.user === "Johannes Städtler" ?
                        <div key={count.user} className={"meineNachricht"}><div className={"nachrichtenEigen"} >{count.comment}</div> </div>
                        :
                        <div key={count.user} className={"fremdeNachrichten"}><div className={"nachrichtenFremd"} >{count.comment}</div></div>
                )
                }

            </div>
            <div className={"box"}>
                <input className={"chatBoxText"} placeholder={""}/>
                <div className={'sendIcon'}>
                    <IconButton className={"iconButton"}>
                        <SendIcon/>
                    </IconButton>
                </div>
            </div>
        </div>


    )
}
export default ChatBox;