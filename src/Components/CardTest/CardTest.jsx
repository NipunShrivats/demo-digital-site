import * as React from 'react';
import "./CardTestStyle.css"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function CardTest(props) {
    const { firstAlphabet, name, username, image, to, test } = props;

    return (
        <Card sx={{ maxWidth: 345 }}>

            <Link to={to} target='blank_'>
                <CardMedia
                    className='img'
                    component="img"
                    height="196"
                    image={image}
                    alt="Paella dish"
                />
            </Link>
            <CardContent>
                <span className='coma comaL'><RiDoubleQuotesL /></span>
                <Typography variant="body2">
                    {test} <br />
                </Typography>
                <span className='quote-name'>— {name}</span>
                <span className='coma comaR'><RiDoubleQuotesR /></span>

            </CardContent>
        </Card>
    );
}
