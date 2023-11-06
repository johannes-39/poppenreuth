import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import './cardContent.css';
import ChatBox from "@/app/src/components/ChatBox/ChatBox";
import {useEffect, useState} from "react";


import axios from "axios";
import SwipeableTextMobileStepper from "@/app/src/components/picturesSlider/picturesSlider";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
interface DataItem {
    comment: string;
    date_added: string;
    postid: string;
    user: string;
    _id: string;
}


export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);

    const [data, setData] = useState<DataItem[]>([]);

    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<DataItem[]>('http://localhost:4000/postcomments');
                setData(response.data);
            } catch (error) {
                console.error("test");
            }
        }

        fetchData();
    }, []);

    console.log(data);

    const myMap = data.map(x => { return { comment: x.comment, user: x.user}});
    myMap.reverse();
    console.log(myMap);




    const handleExpandClick = () => {
        setExpanded(!expanded);
        setExpanded2(false);
    };
    const handleExpandClick2 = () => {
        setExpanded2(!expanded2);
        setExpanded(false);
    };

    return (
        <Card className={"cardBody"} sx={{ maxWidth: '30rem'}}>


            <CardContent>
                <SwipeableTextMobileStepper/>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton onClick={handleExpandClick2} aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent >
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>

                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    <div className={"chatBox"}>
                        <IconButton className={"commentButton"} onClick={handleExpandClick2} aria-label="share">
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                    </div>

                </CardContent>
            </Collapse>
            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>


                    <ChatBox content={myMap}></ChatBox>

                </CardContent>
            </Collapse>
        </Card>
    );
}
