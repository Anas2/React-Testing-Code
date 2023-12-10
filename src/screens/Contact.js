import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../componants/Navbar';
import List from '../componants/List';
import AddItem from '../componants/AddItem';

function Contact(props) {

    const [items, setItems] = useState(["anas", "azeem"]);

    const onAddHandler = (data) => {
        // arr.push(data) 
        setItems(() => [...items, data])
    }
    console.log(items)

    
    useEffect(() => {
        // console.log("state........");
        return ()=>{
            console.log("..........REMOVED.........");
        }
    },[])

    return (
        <Box>
            <Navbar />
            <Box>
                <Typography variant='h1'>Contact us</Typography>
            </Box>

            <Box sx={{ textAlign: "center" }}>
                <AddItem onAdd={onAddHandler} />
                <br />
                <br />
                <List arr={items} />
            </Box>
        </Box>
    );
}

export default Contact;